// Email Templates for Nodemailer

export const adminTemplate = (name, email, message) => ({
  subject: `📩 New IT Services Quote from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
      <h2 style="color: #333;">New IT Services Quote</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #fff; border-left: 4px solid #007BFF; margin: 10px 0; padding: 10px;">
        ${message}
      </blockquote>
      <p style="font-size: 12px; color: #666;">This message was sent from your website contact form.</p>
    </div>
  `
});

export const userTemplate = (name, message) => ({
  subject: "✅ We received your message",
  text: `Hi ${name},\n\nThanks for contacting us! We’ll get back to you shortly.\n\nHere's what you sent:\n${message}\n\nBest regards,\nMostasoft Team`,
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
      <h2 style="color: #007BFF;">Thank you for contacting us!</h2>
      <p>Hi <strong>${name}</strong>,</p>
      <p>Thanks for reaching out. We’ve received your message and our team will get back to you soon.</p>
      <h3 style="margin-top:20px;">📋 Your Message</h3>
      <blockquote style="background: #fff; border-left: 4px solid #28a745; margin: 10px 0; padding: 10px;">
        ${message}
      </blockquote>
      <p style="margin-top: 20px;">Best regards,<br><strong>Mostasoft Team</strong></p>
      <hr/>
      <p style="font-size: 12px; color: #666;">This is an automated confirmation. Please don’t reply directly to this email.</p>
    </div>
  `
});
