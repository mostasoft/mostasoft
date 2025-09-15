import nodemailer from "nodemailer";
import { adminTemplate, userTemplate } from "@/lib/emailTemplates";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    // Send to Admin
    const adminMail = adminTemplate(name, email, message);
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_TO,
      replyTo: email,
      ...adminMail,
    });

    // Send to User
    const userMail = userTemplate(name, message);
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: email,
      ...userMail,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ message: "Email sending failed" }),
      { status: 500 }
    );
  }
}
