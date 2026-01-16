import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  service: z.enum([
    "web-development",
    "mobile-development",
    "graphic-design",
  ]),
  budget: z.string(),
  description: z.string().min(10, "Description must be at least 10 characters."),
});

const createQuoteEmailTemplate = (data: z.infer<typeof quoteSchema>) => `
  <h1>New Quote Request</h1>
  <p><strong>Full Name:</strong> ${data.fullName}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Service:</strong> ${data.service}</p>
  <p><strong>Budget:</strong> ${data.budget}</p>
  <p><strong>Description:</strong></p>
  <p>${data.description}</p>
`;

const createQuoteConfirmationEmailTemplate = (
  data: z.infer<typeof quoteSchema>
) => `
  <h1>Thank you for your quote request</h1>
  <p>Hi ${data.fullName},</p>
  <p>We have received your request for a quote for the <strong>${data.service}</strong> service. We will get back to you with a detailed quote within 24 hours.</p>
  <p>Here is a summary of your request:</p>
  <ul>
    <li><strong>Service:</strong> ${data.service}</li>
    <li><strong>Budget:</strong> ${data.budget}</li>
    <li><strong>Description:</strong> ${data.description}</li>
  </ul>
  <p>Best regards,</p>
  <p>The AWD Tech Team</p>
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = quoteSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const { fullName, email, service, budget, description } = validationResult.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "support.cm@awdpay.com",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const adminMailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || "support.cm@awdpay.com",
      replyTo: email,
      subject: `New Quote Request for ${service}`,
      html: createQuoteEmailTemplate(validationResult.data),
    };

    const userMailOptions = {
      from: `"AWD Tech" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Confirmation of your quote request",
      html: createQuoteConfirmationEmailTemplate(validationResult.data),
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
    });
  } catch (error) {
    console.error("Error sending quote email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send quote request" },
      { status: 500 }
    );
  }
}
