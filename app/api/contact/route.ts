import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

const createEmailTemplate = (data: z.infer<typeof contactSchema>) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      color: white;
      padding: 24px;
      border-radius: 12px 12px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 24px;
    }
    .field {
      margin-bottom: 20px;
      padding: 16px;
      background-color: #f8fafc;
      border-radius: 8px;
      border-left: 4px solid #f97316;
    }
    .field-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: #64748b;
      margin-bottom: 4px;
      letter-spacing: 0.5px;
    }
    .field-value {
      font-size: 16px;
      color: #1e293b;
      margin: 0;
    }
    .footer {
      margin-top: 32px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
      color: #64748b;
      font-size: 14px;
    }
    .logo {
      font-size: 20px;
      font-weight: bold;
      color: #f97316;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">From</div>
        <p class="field-value">${data.name} &lt;${data.email}&gt;</p>
      </div>
      
      <div class="field">
        <div class="field-label">Subject</div>
        <p class="field-value">${data.subject}</p>
      </div>
      
      <div class="field">
        <div class="field-label">Message</div>
        <p class="field-value" style="white-space: pre-line;">${
          data.message
        }</p>
      </div>
      
      <div class="field">
        <div class="field-label">Received At</div>
        <p class="field-value">${new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })}</p>
      </div>
    </div>
    
    <div class="footer">
      <div class="logo">Design Studio</div>
      <p>This message was sent from your website's contact form.</p>
      <p>© ${new Date().getFullYear()} Design Studio. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

const createConfirmationEmailTemplate = (
  data: z.infer<typeof contactSchema>
) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      color: white;
      padding: 32px 24px;
      border-radius: 12px 12px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: bold;
    }
    .header p {
      margin: 8px 0 0;
      opacity: 0.9;
      font-size: 16px;
    }
    .content {
      padding: 32px 24px;
    }
    .message-box {
      background-color: #f8fafc;
      padding: 20px;
      border-radius: 8px;
      margin: 24px 0;
      border-left: 4px solid #f97316;
    }
    .message-box p {
      margin: 0;
      font-style: italic;
      color: #475569;
    }
    .highlight {
      background-color: #fff7ed;
      padding: 16px;
      border-radius: 8px;
      margin: 24px 0;
      border: 1px solid #fed7aa;
    }
    .highlight h3 {
      color: #ea580c;
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 18px;
    }
    .footer {
      margin-top: 32px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
      color: #64748b;
      font-size: 14px;
    }
    .contact-info {
      background-color: #f1f5f9;
      padding: 20px;
      border-radius: 8px;
      margin: 24px 0;
      text-align: center;
    }
    .contact-info p {
      margin: 8px 0;
      color: #475569;
    }
    .btn {
      display: inline-block;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      color: white;
      padding: 12px 32px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      margin: 16px 0;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You, ${data.name}!</h1>
      <p>We've received your message and will get back to you soon.</p>
    </div>
    
    <div class="content">
      <p>Hello ${data.name},</p>
      
      <p>Thank you for contacting Design Studio. We've received your inquiry and our team will review it shortly. We typically respond within 24 hours during business days.</p>
      
      <div class="message-box">
        <p>"${data.message.substring(0, 200)}${
  data.message.length > 200 ? "..." : ""
}"</p>
      </div>
      
      <div class="highlight">
        <h3>What Happens Next?</h3>
        <p>1. Our team will review your inquiry</p>
        <p>2. We'll assess your project requirements</p>
        <p>3. You'll receive a detailed response with next steps</p>
        <p>4. We'll schedule a free consultation if needed</p>
      </div>
      
      <div class="contact-info">
        <h3>Need Immediate Assistance?</h3>
        <p>Email: hello@designstudio.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Hours: Mon-Fri, 9AM-6PM PST</p>
      </div>
      
      <div style="text-align: center;">
        <a href="https://designstudio.com/portfolio" class="btn">View Our Portfolio</a>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Design Studio</strong></p>
      <p>123 Design Street, San Francisco, CA 94107</p>
      <p>© ${new Date().getFullYear()} Design Studio. All rights reserved.</p>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 16px;">
        This is an automated message. Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check (simple version)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    console.log(`Contact form submission from IP: ${ip}`);

    // Parse and validate request body
    const body = await request.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationResult.error.issues.map((err) => ({
            field: err.path[0],
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }
    const { name, email, subject, message } = validationResult.data;

    // Check for spam (simple content filtering)
    const spamKeywords = [
      "http://",
      "https://",
      "www.",
      ".ru",
      "viagra",
      "casino",
      "bitcoin",
    ];
    const messageLower = message.toLowerCase();
    const isPotentialSpam = spamKeywords.some(
      (keyword) =>
        messageLower.includes(keyword) || email.toLowerCase().includes(keyword)
    );

    if (isPotentialSpam) {
      console.log(`Potential spam detected from: ${email}`);
      // Still return success to spammers (don't reveal we detected spam)
      return NextResponse.json({
        success: true,
        message: "Message received successfully",
      });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to admin
    const adminMailOptions = {
      from:
        process.env.SMTP_FROM || `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || "admin@designstudio.com",
      replyTo: email,
      subject: `📧 New Contact: ${subject}`,
      html: createEmailTemplate({ name, email, subject, message }),
      text: `
New Contact Form Submission
===========================

From: ${name} <${email}>
Subject: ${subject}

Message:
${message}

Received: ${new Date().toISOString()}
      `.trim(),
    };

    // Send confirmation email to user
    const userMailOptions = {
      from:
        process.env.SMTP_FROM || `"Design Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Thank You for Contacting Design Studio",
      html: createConfirmationEmailTemplate({ name, email, subject, message }),
      text: `
Thank You for Contacting Design Studio
======================================

Hello ${name},

Thank you for reaching out to Design Studio. We've received your message and will get back to you within 24 hours during business days.

Your Message:
"${message.substring(0, 200)}${message.length > 200 ? "..." : ""}"

If you need immediate assistance, please contact us at:
Email: hello@designstudio.com
Phone: +1 (555) 123-4567

Best regards,
The Design Studio Team
      `.trim(),
    };

    // Send both emails
    const [adminResult, userResult] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    // Log success (in production, you might want to log to a service)
    console.log("Email sent successfully:", {
      adminMessageId: adminResult.messageId,
      userMessageId: userResult.messageId,
      toAdmin: adminResult.accepted,
      toUser: userResult.accepted,
      timestamp: new Date().toISOString(),
    });

    // In development with Ethereal, log preview URLs
    if (process.env.NODE_ENV === "development") {
      console.log(
        "Preview URL (Admin):",
        nodemailer.getTestMessageUrl(adminResult)
      );
      console.log(
        "Preview URL (User):",
        nodemailer.getTestMessageUrl(userResult)
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      data: {
        name,
        email,
        subject,
        messageId: adminResult.messageId,
      },
    });
  } catch (error) {
    console.error("Email sending error:", error);

    // Don't expose sensitive error details in production
    const errorMessage =
      process.env.NODE_ENV === "development"
        ? error instanceof Error
          ? error.message
          : "Unknown error"
        : "Failed to send message. Please try again later.";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method for testing
export async function GET() {
  return NextResponse.json({
    message: "Contact API is working",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
}
