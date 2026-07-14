// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_FILES = 6;
const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB per photo
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];

// Real visitors take more than a couple of seconds to fill a two-step
// form. Anything faster is almost certainly a script, not a person.
const MIN_FILL_TIME_MS = 2500;

// Basic per-IP rate limit. In-memory, so it resets on cold start —
// good enough to blunt a burst of scripted submissions without
// needing an external service.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const formData = await req.formData();

    const elapsedMs = Number(formData.get("elapsedMs"));
    if (Number.isFinite(elapsedMs) && elapsedMs < MIN_FILL_TIME_MS) {
      return NextResponse.json({ success: true, skipped: true });
    }

    const services = formData.getAll("services").map(String);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const propertyAddress = String(formData.get("propertyAddress") || "");
    const message = String(formData.get("message") || "");

    // ── Photos ──
    const files = formData
      .getAll("photos")
      .filter((f) => f instanceof File) as File[];

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { success: false, error: `Maximum ${MAX_FILES} photos allowed` },
        { status: 400 },
      );
    }

    const attachments = [];
    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { success: false, error: `Unsupported file type: ${file.type}` },
          { status: 400 },
        );
      }
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, error: `${file.name} is over the 8MB limit` },
          { status: 400 },
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: emailData, error } = await resend.emails.send({
      from: "RAS-VERTEX <sam@rasvertex.com.au>",
      to: "team@rasvertex.com.au",
      subject: `New Quote Request — ${name || "Unknown"}`,
      text: `
Services: ${services.join(", ") || "None"}

Address: ${propertyAddress}

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}

Photos attached: ${attachments.length}
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: emailData?.id });
  } catch (err) {
    console.error("Contact API error:", err);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
