// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_FILES = 6;

// Photos now upload straight from the browser to Cloudinary (see
// QuoteBookingForm) and we only ever receive back secure_url strings —
// this guards against the field being used to smuggle arbitrary links
// into the notification email.
const CLOUDINARY_CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
function isTrustedPhotoUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      parsed.hostname === "res.cloudinary.com" &&
      parsed.pathname.startsWith(`/${CLOUDINARY_CLOUD}/`)
    );
  } catch {
    return false;
  }
}

// Real visitors take more than a couple of seconds to fill a two-step
// form. Anything faster is almost certainly a script, not a person.
const MIN_FILL_TIME_MS = 2500;

// Basic per-IP rate limit. In-memory, so it resets on cold start —
// good enough to blunt a burst of scripted submissions without
// needing an external service.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map<string, number[]>();

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function fetchWithTimeout(
  input: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function verifyTurnstileToken(token: string, ip: string): Promise<boolean> {
  if (!token) return false;

  try {
    const res = await fetchWithTimeout(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY || "",
          response: token,
          remoteip: ip,
        }),
      },
      8000,
    );
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verify error:", err);
    return false;
  }
}

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

    // A missing token means the widget never loaded client-side (ad
    // blocker, privacy extension, corporate firewall) — the client already
    // waits several seconds before allowing submission without one, so by
    // the time we see this, it's a real customer, not a bot skipping the
    // check. A *present* token still has to actually verify, though — that
    // path stays strict.
    const turnstileToken = String(formData.get("turnstileToken") || "");
    if (turnstileToken) {
      const humanVerified = await verifyTurnstileToken(turnstileToken, ip);
      if (!humanVerified) {
        return NextResponse.json(
          { success: false, error: "Verification failed. Please try again." },
          { status: 403 },
        );
      }
    } else {
      console.warn(`Contact form submitted without a Turnstile token (ip: ${ip})`);
    }

    const services = formData.getAll("services").map(String);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const propertyAddress = String(formData.get("propertyAddress") || "");
    const message = String(formData.get("message") || "");

    // ── Photos — already uploaded to Cloudinary client-side, we just
    // received the resulting URLs back ──
    const photoUrls = formData
      .getAll("photoUrls")
      .map(String)
      .filter(isTrustedPhotoUrl);
    const failedPhotoCount = Number(formData.get("failedPhotoCount")) || 0;

    if (photoUrls.length > MAX_FILES) {
      return NextResponse.json(
        { success: false, error: `Maximum ${MAX_FILES} photos allowed` },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const failedPhotoNote =
      failedPhotoCount > 0
        ? `\n⚠️ ${failedPhotoCount} photo(s) the customer attached failed to upload and are not included.`
        : "";

    const photosText =
      (photoUrls.length > 0
        ? photoUrls.map((url, i) => `  ${i + 1}. ${url}`).join("\n")
        : "  None") + failedPhotoNote;

    const photosHtml =
      photoUrls.length > 0
        ? photoUrls
            .map(
              (url) =>
                `<a href="${url}" style="display:inline-block;margin:4px"><img src="${url}" width="160" style="border-radius:8px;display:block" /></a>`,
            )
            .join("")
        : "<p>None</p>";

    const { data: emailData, error } = await Promise.race([
      resend.emails.send({
      from: "RAS-VERTEX <sam@rasvertex.com.au>",
      to: "team@rasvertex.com.au",
      subject: `New Quote Request — ${name || "Unknown"}${failedPhotoCount > 0 ? " (photo upload failed)" : ""}`,
      text: `
Services: ${services.join(", ") || "None"}

Address: ${propertyAddress}

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}

Photos:
${photosText}
      `,
      html: `
        <p><strong>Services:</strong> ${escapeHtml(services.join(", ") || "None")}</p>
        <p><strong>Address:</strong> ${escapeHtml(propertyAddress)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
        <strong>Phone:</strong> ${escapeHtml(phone)}<br/>
        <strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        ${failedPhotoCount > 0 ? `<p style="color:#a2540b"><strong>⚠️ ${failedPhotoCount} photo(s) the customer attached failed to upload and are not included.</strong></p>` : ""}
        <p><strong>Photos:</strong></p>
        ${photosHtml}
      `,
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Email send timed out")), 15000),
      ),
    ]);

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
      {
        success: false,
        error: err instanceof Error ? err.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}
