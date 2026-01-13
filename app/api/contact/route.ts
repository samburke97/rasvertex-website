import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  projectDetails: string;
  helpType: string;
  to: string;
  subject: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.projectDetails || !data.helpType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // For now, we'll log the submission and return success
    // In production, you would integrate with an email service like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Postmark
    // - AWS SES

    console.log("=== New Contact Form Submission ===");
    console.log(`To: ${data.to}`);
    console.log(`Subject: ${data.subject}`);
    console.log(`Name: ${data.name}`);
    console.log(`Help Type: ${data.helpType}`);
    console.log(`Project Details: ${data.projectDetails}`);
    console.log("===================================");

    // Example integration with Resend (uncomment and configure when ready):
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'RAS-VERTEX Website <noreply@rasvertex.com.au>',
      to: data.to,
      subject: data.subject,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Service Interest:</strong> ${data.helpType}</p>
        <h3>Project Details:</h3>
        <p>${data.projectDetails.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // Return success - the frontend will handle the success state
    return NextResponse.json({
      success: true,
      message: "Message received successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
