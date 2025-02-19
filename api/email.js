import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  console.log("DEBUG: Starting Email Process...");

  try {
    console.log("DEBUG: Checking Environment Variables...");
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Missing SMTP credentials in environment variables.");
    }
    console.log("DEBUG: EMAIL_USER:", process.env.EMAIL_USER);

    // SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: "mail.sanayatechs.iq",
      port: 587,
      secure: false, // Must use SSL/TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    console.log("DEBUG: SMTP Transporter Created Successfully!");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@sanayatechs.iq",
      subject: `New Contact Form Submission from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`,
    };

    console.log("DEBUG: Sending Email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("DEBUG: Email Sent Successfully! Message ID:", info.messageId);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message || "Failed to send email" });
  }
}
