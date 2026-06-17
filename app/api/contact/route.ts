// app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "RAS-VERTEX <quotes@rasvertex.com>",
      to: "team@rasvertex.com.au",
      subject: `New Quote Request — ${data.name}`,
      text: `
Services: ${data.services?.join(", ")}

Property Type: ${data.propertyType}
Address: ${data.propertyAddress}

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

Message:
${data.message}
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}
