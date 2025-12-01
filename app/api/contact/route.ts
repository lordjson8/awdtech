import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères").max(100),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  subject: z.string().min(3, "Le sujet doit comporter au moins 3 caractères").max(200),
  message: z
    .string()
    .min(10, "Le message doit comporter au moins 10 caractères")
    .max(5000),
  service: z.enum(["web", "mobile", "design", "infogerance", "ai", "ecommerce", "cloud", "autre"]).optional(),
});

const createEmailTemplate = (data: z.infer<typeof contactSchema>) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouveau Contact - AWDTECH</title>
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
      background: linear-gradient(135deg, #0066cc 0%, #004d99 100%);
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
    .logo {
      font-size: 20px;
      font-weight: bold;
      color: #0066cc;
      margin-bottom: 8px;
    }
    .content {
      padding: 24px;
    }
    .field {
      margin-bottom: 20px;
      padding: 16px;
      background-color: #f8fafc;
      border-radius: 8px;
      border-left: 4px solid #0066cc;
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
    .service-badge {
      display: inline-block;
      background: #e6f0ff;
      color: #0066cc;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-top: 8px;
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
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
      text-align: center;
    }
    .contact-info p {
      margin: 5px 0;
      color: #475569;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>AWDTECH - Nouveau Contact</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">De</div>
        <p class="field-value">${data.name} &lt;${data.email}&gt;</p>
      </div>
      
      <div class="field">
        <div class="field-label">Sujet</div>
        <p class="field-value">${data.subject}</p>
      </div>
      
      ${data.service ? `
      <div class="field">
        <div class="field-label">Service demandé</div>
        <p class="field-value">
          ${getServiceLabel(data.service)}
          <span class="service-badge">${getServiceCategory(data.service)}</span>
        </p>
      </div>
      ` : ''}
      
      <div class="field">
        <div class="field-label">Message</div>
        <p class="field-value" style="white-space: pre-line;">${data.message}</p>
      </div>
      
      <div class="field">
        <div class="field-label">Reçu à</div>
        <p class="field-value">${new Date().toLocaleString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })}</p>
      </div>
      
      <div class="contact-info">
        <p><strong>Contacts AWDTECH</strong></p>
        <p>Cameroun: +237 656 849 690 / +237 653 624 318</p>
        <p>Gabon: +241 66 50 39 99 / +241 76 38 80 06</p>
        <p>Côte d'Ivoire: +225 27 24 3 73010 / +225 27 24 3 73317</p>
        <p>Email: support.cm@awdpay.com</p>
      </div>
    </div>
    
    <div class="footer">
      <div class="logo">AWDTECH - Service Numérique Partout dans le Monde</div>
      <p>Moteur de votre transformation digitale</p>
      <p>© ${new Date().getFullYear()} AWDTECH. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>
`;

const createConfirmationEmailTemplate = (data: z.infer<typeof contactSchema>) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AWDTECH - Merci pour votre message</title>
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
      background: linear-gradient(135deg, #0066cc 0%, #004d99 100%);
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
      border-left: 4px solid #0066cc;
    }
    .message-box p {
      margin: 0;
      font-style: italic;
      color: #475569;
    }
    .highlight {
      background-color: #e6f0ff;
      padding: 20px;
      border-radius: 8px;
      margin: 24px 0;
      border: 1px solid #b3d1ff;
    }
    .highlight h3 {
      color: #0066cc;
      margin-top: 0;
      margin-bottom: 12px;
      font-size: 18px;
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }
    .service-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
    }
    .service-card h4 {
      color: #0066cc;
      margin: 0 0 8px 0;
    }
    .service-card p {
      margin: 0;
      font-size: 14px;
      color: #64748b;
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
      background: linear-gradient(135deg, #0066cc 0%, #004d99 100%);
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
      box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Merci ${data.name} !</h1>
      <p>Nous avons bien reçu votre message et vous répondrons très bientôt.</p>
    </div>
    
    <div class="content">
      <p>Bonjour ${data.name},</p>
      
      <p>Merci d'avoir contacté AWDTECH. Nous avons bien reçu votre demande et notre équipe l'examinera sous peu. Nous répondons généralement dans les 24 heures ouvrables.</p>
      
      ${data.message ? `
      <div class="message-box">
        <p>"${data.message.substring(0, 200)}${data.message.length > 200 ? "..." : ""}"</p>
      </div>
      ` : ''}
      
      <div class="highlight">
        <h3>Prochaines étapes :</h3>
        <p>1. Notre équipe examinera votre demande</p>
        <p>2. Nous évaluerons vos besoins spécifiques</p>
        <p>3. Vous recevrez une réponse détaillée avec les étapes suivantes</p>
        <p>4. Nous organiserons une consultation gratuite si nécessaire</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <h4>🌐 Développement Web</h4>
          <p>E-commerce, E-learning, Sites sur mesure</p>
        </div>
        <div class="service-card">
          <h4>📱 Développement Mobile</h4>
          <p>Android, iOS, Applications multiplateformes</p>
        </div>
        <div class="service-card">
          <h4>🎨 Design UI/UX</h4>
          <p>Identité de marque, Web Design, Graphisme</p>
        </div>
        <div class="service-card">
          <h4>🤖 Intelligence Artificielle</h4>
          <p>Solutions innovantes basées sur l'IA</p>
        </div>
        <div class="service-card">
          <h4>🛒 E-commerce</h4>
          <p>Plateformes de commerce électronique</p>
        </div>
        <div class="service-card">
          <h4>☁️ Services Cloud</h4>
          <p>Infrastructure cloud évolutive</p>
        </div>
      </div>
      
      <div class="contact-info">
        <h3>Contactez-nous directement :</h3>
        <p><strong>📧 Email:</strong> support.cm@awdpay.com</p>
        <p><strong>📞 Cameroun:</strong> +237 656 849 690 / +237 653 624 318</p>
        <p><strong>📞 Gabon:</strong> +241 66 50 39 99 / +241 76 38 80 06</p>
        <p><strong>📞 Côte d'Ivoire:</strong> +225 27 24 3 73010 / +225 27 24 3 73317</p>
        <p><strong>⏰ Horaires:</strong> Lundi-Vendredi, 8h-18h</p>
      </div>
      
      <div style="text-align: center;">
        <a href="https://awdtech.com/produits" class="btn">Découvrir nos produits</a>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>AWDTECH - Service Numérique Partout dans le Monde</strong></p>
      <p>Moteur de votre transformation digitale</p>
      <p>© ${new Date().getFullYear()} AWDTECH. Tous droits réservés.</p>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 16px;">
        Ceci est un message automatique. Merci de ne pas y répondre.
      </p>
    </div>
  </div>
</body>
</html>
`;

// Helper functions
const getServiceLabel = (service: string) => {
  const services: Record<string, string> = {
    web: "Développement Web",
    mobile: "Développement Mobile",
    design: "Design UI/UX",
    infogerance: "Infogérance",
    ai: "Intelligence Artificielle",
    ecommerce: "Solutions E-commerce",
    cloud: "Services Cloud",
    autre: "Autre demande"
  };
  return services[service] || "Non spécifié";
};

const getServiceCategory = (service: string) => {
  const categories: Record<string, string> = {
    web: "WEB",
    mobile: "MOBILE",
    design: "DESIGN",
    infogerance: "IT",
    ai: "IA",
    ecommerce: "E-COMMERCE",
    cloud: "CLOUD",
    autre: "GÉNÉRAL"
  };
  return categories[service] || "GÉNÉRAL";
};

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    console.log(`Soumission formulaire AWDTECH depuis IP: ${ip}`);

    // Parse and validate request body
    const body = await request.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation échouée",
          errors: validationResult.error.issues.map((err) => ({
            field: err.path[0],
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }
    
    const { name, email, subject, message, service } = validationResult.data;

    // Check for spam (French keywords as well)
    const spamKeywords = [
      "http://",
      "https://",
      "www.",
      ".ru",
      "viagra",
      "casino",
      "bitcoin",
      "bonus",
      "gratuit",
      "gagner",
      "argent",
    ];
    
    const contentToCheck = `${subject} ${message} ${email}`.toLowerCase();
    const isPotentialSpam = spamKeywords.some(
      (keyword) => contentToCheck.includes(keyword)
    );

    if (isPotentialSpam) {
      console.log(`Spam potentiel détecté de: ${email}`);
      return NextResponse.json({
        success: true,
        message: "Message reçu avec succès",
      });
    }

    // Configure email transporter for AWDTECH
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "support.cm@awdpay.com",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to AWDTECH admin
    const adminMailOptions = {
      from: process.env.SMTP_FROM || `"AWDTECH Site Web" <${process.env.SMTP_USER || "noreply@awdtech.com"}>`,
      to: process.env.ADMIN_EMAIL || "support.cm@awdpay.com",
      replyTo: email,
      subject: `📧 AWDTECH - Nouveau Contact: ${subject}`,
      html: createEmailTemplate({ name, email, subject, message, service }),
      text: `
NOUVEAU CONTACT AWDTECH
=======================

De: ${name} <${email}>
Sujet: ${subject}
${service ? `Service: ${getServiceLabel(service)}` : ''}

Message:
${message}

Reçu: ${new Date().toISOString()}

---
AWDTECH - Service Numérique Partout dans le Monde
Contacts:
Cameroun: +237 656 849 690 / +237 653 624 318
Gabon: +241 66 50 39 99 / +241 76 38 80 06
Côte d'Ivoire: +225 27 24 3 73010 / +225 27 24 3 73317
Email: support.cm@awdpay.com
      `.trim(),
    };

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_FROM || `"AWDTECH" <${process.env.SMTP_USER || "noreply@awdtech.com"}>`,
      to: email,
      subject: "✅ AWDTECH - Merci pour votre message",
      html: createConfirmationEmailTemplate({ name, email, subject, message, service }),
      text: `
MERCI DE VOTRE INTÉRÊT POUR AWDTECH
====================================

Bonjour ${name},

Merci d'avoir contacté AWDTECH. Nous avons bien reçu votre message et notre équipe l'examinera sous peu.

Votre demande concerne: ${subject}

Nous vous répondrons dans les 24 heures ouvrables.

Pour toute question urgente, contactez-nous:
📧 Email: support.cm@awdpay.com
📞 Cameroun: +237 656 849 690 / +237 653 624 318
📞 Gabon: +241 66 50 39 99 / +241 76 38 80 06
📞 Côte d'Ivoire: +225 27 24 3 73010 / +225 27 24 3 73317

Cordialement,
L'équipe AWDTECH
Service Numérique Partout dans le Monde
      `.trim(),
    };

    // Send both emails
    const [adminResult, userResult] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    // Log success
    console.log("Email AWDTECH envoyé avec succès:", {
      adminMessageId: adminResult.messageId,
      userMessageId: userResult.messageId,
      client: name,
      email: email,
      service: service || "Non spécifié",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
      data: {
        name,
        email,
        subject,
        service: service ? getServiceLabel(service) : "Non spécifié",
        messageId: adminResult.messageId,
      },
    });
  } catch (error) {
    console.error("Erreur d'envoi d'email AWDTECH:", error);

    const errorMessage =
      process.env.NODE_ENV === "development"
        ? error instanceof Error
          ? error.message
          : "Erreur inconnue"
        : "Échec de l'envoi du message. Veuillez réessayer plus tard.";

    return NextResponse.json(
      {
        success: false,
        message: "Échec de l'envoi du message",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    message: "API Contact AWDTECH en ligne",
    status: "healthy",
    company: "AWDTECH - Service Numérique Partout dans le Monde",
    timestamp: new Date().toISOString(),
    contacts: {
      cameroon: "+237 656 849 690 / +237 653 624 318",
      gabon: "+241 66 50 39 99 / +241 76 38 80 06",
      ivoryCoast: "+225 27 24 3 73010 / +225 27 24 3 73317",
      email: "support.cm@awdpay.com"
    }
  });
}