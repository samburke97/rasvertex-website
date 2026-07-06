// app/api/careers/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_RESUME_SIZE = 10 * 1024 * 1024;
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

    const skillsets = formData.getAll("skillsets").map(String);
    const experience = String(formData.get("experience") || "");
    const irata = String(formData.get("irata") || "");
    const irataLevel = String(formData.get("irataLevel") || "");
    const rightToWork = String(formData.get("rightToWork") || "");
    const visaType = String(formData.get("visaType") || "");
    const driversLicence = String(formData.get("driversLicence") || "");
    const whiteCard = String(formData.get("whiteCard") || "");
    const otherQual = String(formData.get("otherQual") || "");
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
      subject: `New Job Application — ${name || "Unknown"}`,
      text: `
New job application received.

--- SKILLSET ---
Skills: ${skillsets.length > 0 ? skillsets.join(", ") : "None provided"}
Experience: ${experience || "Not answered"}

--- QUALIFICATIONS ---
IRATA certified: ${irata || "Not answered"}
IRATA level: ${irataLevel || "N/A"}
Right to work in Australia: ${rightToWork || "Not answered"}
Visa type: ${rightToWork === "No" ? visaType || "Not provided" : "N/A"}
Current driver's licence: ${driversLicence || "Not answered"}
White Card: ${whiteCard || "Not answered"}
Other qualifications: ${otherQual || "None"}

--- APPLICANT ---
Name: ${name}
Phone: ${phone}
Email: ${email}

--- ADDITIONAL ---
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
