// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: emailData, error } = await resend.emails.send({
      from: "RAS-VERTEX <sam@rasvertex.com.au>",
      to: "team@rasvertex.com.au",
      subject: `New Quote Request — ${data.name || "Unknown"}`,
      text: `
Services: ${data.services?.join(", ") || "None"}

Property Type: ${data.propertyType || ""}
Address: ${data.propertyAddress || ""}

Name: ${data.name || ""}
Phone: ${data.phone || ""}
Email: ${data.email || ""}

Message:
${data.message || ""}
      `,
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
