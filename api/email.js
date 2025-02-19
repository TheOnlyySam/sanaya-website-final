import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Debugging: Check if environment variables are loaded
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Found");

  // SMTP Configuration for "mail.sanayatechs.iq"
  const transporter = nodemailer.createTransport({
    host: "mail.sanayatechs.iq", // Custom mail server
    port: 465, // SMTP Port for outgoing emails
    secure: true, // Use SSL/TLS
    auth: {
      user: process.env.EMAIL_USER, // Your email (from environment variables)
      pass: process.env.EMAIL_PASS, // Your email password (from environment variables)
    },
    tls: {
      rejectUnauthorized: false, // Allows self-signed certificates
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email
    to: "info@sanayatechs.iq", // Recipient email
    subject: `New Contact Form Submission from ${name}`,
    text: `Email: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email failed:", error);
    res.status(500).json({ error: error.message || "Failed to send email" });
  }
}
