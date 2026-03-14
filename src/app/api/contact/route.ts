import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, service, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "suresh@l4rg.us",
      replyTo: email,
      subject: `Gladius eSport Contact – ${service}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "N/A"}
Service: ${service}

Message:
${message}
      `,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;border:1px solid #ddd">
          <h2 style="margin-bottom:15px">New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Service Requested:</strong> ${service}</p>

          <hr style="margin:20px 0">

          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}