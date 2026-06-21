// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_FILES = 6;
const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB per photo
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Honeypot check — mirrors the client-side check, but never
    // trust the client alone. If this hidden field is filled,
    // silently pretend success and send nothing.
    const honeypot = formData.get("company");
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      return NextResponse.json({ success: true, skipped: true });
    }

    const services = formData.getAll("services").map(String);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const propertyType = String(formData.get("propertyType") || "");
    const propertyAddress = String(formData.get("propertyAddress") || "");
    const ctsNumber = String(formData.get("ctsNumber") || "");
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

Property Type: ${propertyType}
Address: ${propertyAddress}
CTS Number: ${ctsNumber || "N/A"}

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
