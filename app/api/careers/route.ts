// app/api/careers/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_RESUME_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const honeypot = formData.get("website");
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      return NextResponse.json({ success: true, skipped: true });
    }

    const role = String(formData.get("role") || "");
    const irata = String(formData.get("irata") || "");
    const qbcc = String(formData.get("qbcc") || "");
    const liability = String(formData.get("liability") || "");
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const resumeFile = formData.get("resume");
    const attachments = [];

    if (resumeFile instanceof File && resumeFile.size > 0) {
      if (!ALLOWED_RESUME_TYPES.includes(resumeFile.type)) {
        return NextResponse.json(
          { success: false, error: "Resume must be a PDF or Word document." },
          { status: 400 },
        );
      }
      if (resumeFile.size > MAX_RESUME_SIZE) {
        return NextResponse.json(
          { success: false, error: "Resume must be under 10 MB." },
          { status: 400 },
        );
      }
      attachments.push({
        filename: resumeFile.name,
        content: Buffer.from(await resumeFile.arrayBuffer()),
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: emailData, error } = await resend.emails.send({
      from: "RAS-VERTEX <sam@rasvertex.com.au>",
      to: "team@rasvertex.com.au",
      subject: `New Candidate — ${role || "Unknown Role"}`,
      text: `
New job application received.

Role: ${role}

Qualifications:
- IRATA certified: ${irata || "Not answered"}
- QBCC licensed: ${qbcc || "Not answered"}
- Public liability insurance: ${liability || "Not answered"}

Applicant:
Name: ${name}
Phone: ${phone}
Email: ${email}

About:
${message || "None provided"}

Resume attached: ${attachments.length > 0 ? "Yes" : "No"}
      `.trim(),
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
    console.error("Careers API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
