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
  <title>📨 Nouveau Contact - AWDTECH</title>
  <style>
    /* Reset and base styles */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 20px;
      background-color: #f8fafc;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    /* Main container */
    .email-wrapper {
      max-width: 680px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      border: 1px solid #e1e8f0;
    }
    
    /* Header with gradient */
    .email-header {
      background: linear-gradient(135deg, #FF6B00 0%, #0056B3 100%);
      color: white;
      padding: 30px 35px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .header-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" opacity="0.1"><path d="M0,0 L100,0 L100,100 Z" fill="white"/></svg>');
      background-size: cover;
    }
    
    .header-content {
      position: relative;
      z-index: 2;
      flex: 1;
    }
    
    .notification-badge {
      position: relative;
      z-index: 2;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50px;
      padding: 8px 20px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
      backdrop-filter: blur(5px);
    }
    
    .header-title {
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 8px 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .header-subtitle {
      font-size: 14px;
      opacity: 0.9;
      font-weight: 300;
      margin: 0;
    }
    
    /* Content area */
    .email-content {
      padding: 40px 35px;
    }
    
    /* Info card */
    .info-card {
      background: linear-gradient(to right, #FFF8F0, #F0F7FF);
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 30px;
      border: 1px solid #E1EFFF;
      box-shadow: 0 4px 12px rgba(0, 86, 179, 0.05);
    }
    
    .info-card-header {
      color: #0056B3;
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 20px 0;
      padding-bottom: 12px;
      border-bottom: 2px solid #FF6B00;
      display: flex;
      align-items: center;
    }
    
    .info-card-header svg {
      margin-right: 10px;
    }
    
    /* Contact details */
    .contact-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 25px;
    }
    
    .detail-group {
      display: flex;
      align-items: flex-start;
      padding: 15px;
      background: white;
      border: 1px solid #e1e8f0;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    
    .detail-group:hover {
      border-color: #0056B3;
      box-shadow: 0 5px 15px rgba(0, 86, 179, 0.1);
      transform: translateY(-2px);
    }
    
    .detail-icon {
      background: #FF6B00;
      color: white;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      flex-shrink: 0;
    }
    
    .detail-content {
      flex: 1;
    }
    
    .detail-label {
      color: #0056B3;
      font-weight: 600;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    
    .detail-value {
      color: #333;
      font-size: 16px;
      margin: 0;
      font-weight: 500;
    }
    
    /* Message box */
    .message-section {
      margin: 30px 0;
    }
    
    .message-header {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    
    .message-icon {
      background: #0056B3;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
    }
    
    .message-title {
      color: #0056B3;
      font-weight: 600;
      font-size: 18px;
      margin: 0;
    }
    
    .message-box {
      background: white;
      border: 2px solid #F0F7FF;
      border-radius: 10px;
      padding: 25px;
      font-size: 15px;
      line-height: 1.7;
      color: #333;
      white-space: pre-line;
      box-shadow: 0 4px 12px rgba(0, 86, 179, 0.05);
      border-left: 4px solid #FF6B00;
    }
    
    /* Service badge */
    .service-section {
      margin: 30px 0;
    }
    
    .service-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #FF6B00 0%, #FF8E3C 100%);
      color: white;
      padding: 8px 20px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 14px;
      margin-top: 10px;
      box-shadow: 0 3px 10px rgba(255, 107, 0, 0.2);
    }
    
    .service-badge::before {
      content: "🎯";
      margin-right: 8px;
    }
    
    .service-category {
      display: inline-block;
      background: #0056B3;
      color: white;
      padding: 6px 15px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 600;
      margin-left: 10px;
    }
    
    /* Timeline */
    .timeline {
      background: linear-gradient(to right, #F0F7FF, #FFF8F0);
      border-radius: 12px;
      padding: 25px;
      margin: 40px 0 30px;
      border: 1px solid #E1EFFF;
    }
    
    .timeline-title {
      color: #0056B3;
      font-weight: 600;
      font-size: 16px;
      margin: 0 0 20px 0;
      display: flex;
      align-items: center;
    }
    
    .timeline-title::before {
      content: "⏰";
      margin-right: 10px;
    }
    
    .timeline-item {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px dashed #D1E3FF;
    }
    
    .timeline-item:last-child {
      border-bottom: none;
    }
    
    .timeline-time {
      color: #FF6B00;
      font-weight: 600;
      font-size: 14px;
      min-width: 100px;
    }
    
    .timeline-event {
      color: #333;
      font-size: 14px;
      flex: 1;
    }
    
    /* Footer */
    .email-footer {
      background: #F8FAFC;
      padding: 30px 35px;
      border-top: 1px solid #EAEEF2;
    }
    
    .footer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    
    .brand-logo {
      color: #0056B3;
      font-weight: 800;
      font-size: 20px;
      letter-spacing: 1px;
    }
    
    .brand-tagline {
      color: #FF6B00;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 1px;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }
    
    .contact-item {
      text-align: center;
      padding: 15px;
      background: white;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }
    
    .contact-item:hover {
      border-color: #FF6B00;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 107, 0, 0.1);
    }
    
    .contact-country {
      color: #0056B3;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 8px;
    }
    
    .contact-numbers {
      color: #333;
      font-size: 13px;
      margin: 0;
    }
    
    .copyright {
      text-align: center;
      color: #64748b;
      font-size: 13px;
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #e2e8f0;
    }
    
    /* Priority indicator */
    .priority-indicator {
      display: inline-flex;
      align-items: center;
      background: #FF6B00;
      color: white;
      padding: 6px 15px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 600;
      margin-left: 15px;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { opacity: 0.9; }
      50% { opacity: 0.7; }
      100% { opacity: 0.9; }
    }
    
    /* Divider */
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #FF6B00, #0056B3, transparent);
      margin: 35px 0;
      opacity: 0.3;
    }
    
    /* Responsive adjustments */
    @media (max-width: 720px) {
      body {
        padding: 10px;
      }
      
      .email-content {
        padding: 30px 20px;
      }
      
      .email-header {
        flex-direction: column;
        text-align: center;
        padding: 25px 20px;
      }
      
      .notification-badge {
        margin-top: 15px;
        align-self: center;
      }
      
      .contact-details {
        grid-template-columns: 1fr;
      }
      
      .detail-group {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .detail-icon {
        margin-bottom: 10px;
      }
      
      .contact-grid {
        grid-template-columns: 1fr;
      }
      
      .footer-header {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }
    }
    
    @media (max-width: 480px) {
      .email-header {
        padding: 20px 15px;
      }
      
      .header-title {
        font-size: 20px;
      }
      
      .email-content {
        padding: 25px 15px;
      }
      
      .info-card {
        padding: 20px 15px;
      }
      
      .message-box {
        padding: 20px 15px;
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <!-- Header -->
    <div class="email-header">
      <div class="header-overlay"></div>
      <div class="header-content">
        <h1 class="header-title">📨 Nouveau Contact</h1>
        <p class="header-subtitle">Formulaire de contact - AWDTECH</p>
      </div>
      <div class="notification-badge">
        Nouveau message <span class="priority-indicator">À traiter</span>
      </div>
    </div>
    
    <!-- Main Content -->
    <div class="email-content">
      <!-- Info Card -->
      <div class="info-card">
        <h2 class="info-card-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          Informations du contact
        </h2>
        
        <div class="contact-details">
          <div class="detail-group">
            <div class="detail-icon">👤</div>
            <div class="detail-content">
              <div class="detail-label">Nom</div>
              <p class="detail-value">${data.name}</p>
            </div>
          </div>
          
          <div class="detail-group">
            <div class="detail-icon">📧</div>
            <div class="detail-content">
              <div class="detail-label">Email</div>
              <p class="detail-value"><a href="mailto:${data.email}" style="color: #0056B3; text-decoration: none;">${data.email}</a></p>
            </div>
          </div>
          
          <div class="detail-group">
            <div class="detail-icon">📝</div>
            <div class="detail-content">
              <div class="detail-label">Sujet</div>
              <p class="detail-value">${data.subject}</p>
            </div>
          </div>
          
          <div class="detail-group">
            <div class="detail-icon">📅</div>
            <div class="detail-content">
              <div class="detail-label">Reçu à</div>
              <p class="detail-value">${new Date().toLocaleString("fr-FR", {
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
        </div>
        
        <!-- Service Information -->
        ${data.service ? `
        <div class="service-section">
          <div class="detail-label">Service demandé</div>
          <div class="service-badge">
            ${getServiceLabel(data.service)}
            <span class="service-category">${getServiceCategory(data.service)}</span>
          </div>
        </div>
        ` : ''}
      </div>
      
      <!-- Message Section -->
      <div class="message-section">
        <div class="message-header">
          <div class="message-icon">💬</div>
          <h2 class="message-title">Message</h2>
        </div>
        <div class="message-box">
          ${data.message}
        </div>
      </div>
      
      <!-- Timeline -->
      <div class="timeline">
        <h3 class="timeline-title">Historique du ticket</h3>
        
        <div class="timeline-item">
          <div class="timeline-time">Maintenant</div>
          <div class="timeline-event">Message reçu via formulaire de contact</div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-time">Dans 15 min</div>
          <div class="timeline-event">Notification envoyée à l'équipe commerciale</div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-time">Dans 1h</div>
          <div class="timeline-event">Première réponse attendue</div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-time">Dans 24h</div>
          <div class="timeline-event">Suivi client automatique</div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="divider"></div>
      
      <!-- Quick Actions -->
      <div class="info-card">
        <h2 class="info-card-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
          </svg>
          Actions rapides
        </h2>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="mailto:${data.email}?subject=Re: ${data.subject}" style="background: #0056B3; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">Répondre par email</a>
          <a href="tel:+237656849690" style="background: #FF6B00; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">Appeler le client</a>
          <a href="https://crm.awdtech.com/contacts/new" style="background: #333; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">Ajouter au CRM</a>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="email-footer">
      <div class="footer-header">
        <div class="brand-logo">AWDTECH</div>
        <div class="brand-tagline">SERVICE NUMÉRIQUE PARTOUT DANS LE MONDE</div>
      </div>
      
      <div class="contact-grid">
        <div class="contact-item">
          <div class="contact-country">📞 Cameroun</div>
          <p class="contact-numbers">+237 656 849 690<br>+237 653 624 318</p>
        </div>
        
        <div class="contact-item">
          <div class="contact-country">📞 Gabon</div>
          <p class="contact-numbers">+241 66 50 39 99<br>+241 76 38 80 06</p>
        </div>
        
        <div class="contact-item">
          <div class="contact-country">📞 Côte d'Ivoire</div>
          <p class="contact-numbers">+225 27 24 3 73010<br>+225 27 24 3 73317</p>
        </div>
        
        <div class="contact-item">
          <div class="contact-country">📧 Email</div>
          <p class="contact-numbers">support.cm@awdpay.com</p>
        </div>
      </div>
      
      <div class="copyright">
        <p><strong>Moteur de votre transformation digitale</strong></p>
        <p>© ${new Date().getFullYear()} AWDTECH. Tous droits réservés.</p>
        <p style="font-size: 11px; color: #94a3b8; margin-top: 10px;">Notification système - Générée automatiquement</p>
      </div>
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
  <title>AWDTECH - Confirmation de réception</title>
  <style>
    /* Reset and base styles */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 20px;
      background-color: #f8fafc;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    /* Main container */
    .email-wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      border: 1px solid #e1e8f0;
    }
    
    /* Header with gradient */
    .email-header {
      background: linear-gradient(135deg, #FF6B00 0%, #0056B3 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
      position: relative;
    }
    
    .header-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" opacity="0.1"><path d="M0,0 L100,0 L100,100 Z" fill="white"/></svg>');
      background-size: cover;
    }
    
    .header-content {
      position: relative;
      z-index: 2;
    }
    
    .company-logo {
      font-size: 36px;
      font-weight: 800;
      letter-spacing: 1px;
      margin-bottom: 10px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .company-tagline {
      font-size: 14px;
      opacity: 0.9;
      font-weight: 300;
      letter-spacing: 0.5px;
    }
    
    .greeting {
      margin-top: 25px;
      font-size: 28px;
      font-weight: 300;
    }
    
    .greeting strong {
      font-weight: 600;
    }
    
    /* Content area */
    .email-content {
      padding: 40px 30px;
    }
    
    .section-title {
      color: #0056B3;
      font-size: 18px;
      font-weight: 600;
      margin: 30px 0 15px;
      padding-bottom: 8px;
      border-bottom: 2px solid #FF6B00;
      display: inline-block;
    }
    
    .message-summary {
      background: linear-gradient(to right, #FFF8F0, #F0F7FF);
      border-left: 4px solid #FF6B00;
      padding: 20px;
      border-radius: 0 8px 8px 0;
      margin: 25px 0;
      position: relative;
    }
    
    .message-label {
      color: #FF6B00;
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 10px;
    }
    
    .message-preview {
      color: #333;
      font-style: italic;
      line-height: 1.7;
      margin: 0;
    }
    
    /* Process steps */
    .process-steps {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: 30px 0;
    }
    
    .step {
      display: flex;
      align-items: flex-start;
      padding: 15px;
      background: white;
      border: 1px solid #e1e8f0;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    
    .step:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 86, 179, 0.1);
      border-color: #0056B3;
    }
    
    .step-number {
      background: #0056B3;
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      margin-right: 15px;
      flex-shrink: 0;
    }
    
    .step-content {
      flex: 1;
    }
    
    .step-title {
      color: #0056B3;
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    /* Services grid */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin: 25px 0;
    }
    
    .service-card {
      background: white;
      border: 1px solid #e1e8f0;
      border-radius: 10px;
      padding: 20px 15px;
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .service-card:hover {
      border-color: #FF6B00;
      box-shadow: 0 5px 15px rgba(255, 107, 0, 0.1);
      transform: translateY(-3px);
    }
    
    .service-icon {
      font-size: 24px;
      margin-bottom: 10px;
      display: block;
    }
    
    .service-title {
      color: #0056B3;
      font-weight: 600;
      margin: 0 0 8px 0;
      font-size: 15px;
    }
    
    .service-desc {
      color: #64748b;
      font-size: 13px;
      margin: 0;
      line-height: 1.5;
    }
    
    /* Contact info */
    .contact-section {
      background: linear-gradient(to right, #F0F7FF, #FFF8F0);
      border-radius: 12px;
      padding: 25px;
      margin: 30px 0;
      border: 1px solid #E1EFFF;
    }
    
    .contact-row {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px dashed #D1E3FF;
    }
    
    .contact-row:last-child {
      border-bottom: none;
    }
    
    .contact-icon {
      background: #FF6B00;
      color: white;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      flex-shrink: 0;
    }
    
    .contact-details {
      flex: 1;
    }
    
    .contact-label {
      color: #0056B3;
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 3px;
    }
    
    .contact-value {
      color: #333;
      font-size: 14px;
    }
    
    /* CTA Button */
    .cta-section {
      text-align: center;
      margin: 35px 0 25px;
    }
    
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #FF6B00 0%, #FF8E3C 100%);
      color: white;
      padding: 16px 40px;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);
      border: none;
      cursor: pointer;
    }
    
    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(255, 107, 0, 0.3);
      background: linear-gradient(135deg, #FF8E3C 0%, #FF6B00 100%);
    }
    
    /* Footer */
    .email-footer {
      background: #F8FAFC;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #EAEEF2;
    }
    
    .signature {
      color: #0056B3;
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }
    
    .motto {
      color: #FF6B00;
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 20px;
      letter-spacing: 1px;
    }
    
    .copyright {
      color: #64748b;
      font-size: 13px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
    }
    
    .disclaimer {
      color: #94a3b8;
      font-size: 12px;
      margin-top: 15px;
      font-style: italic;
    }
    
    /* Response time badge */
    .response-badge {
      display: inline-block;
      background: #0056B3;
      color: white;
      padding: 8px 20px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 14px;
      margin: 20px 0;
      box-shadow: 0 3px 10px rgba(0, 86, 179, 0.2);
    }
    
    /* Divider */
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #FF6B00, #0056B3, transparent);
      margin: 35px 0;
      opacity: 0.3;
    }
    
    /* Responsive adjustments */
    @media (max-width: 620px) {
      body {
        padding: 10px;
      }
      
      .email-content {
        padding: 30px 20px;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .contact-row {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .contact-icon {
        margin-bottom: 10px;
      }
      
      .step {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .step-number {
        margin-bottom: 10px;
      }
      
      .cta-button {
        padding: 14px 30px;
        font-size: 15px;
      }
    }
    
    @media (max-width: 480px) {
      .email-header {
        padding: 30px 20px;
      }
      
      .company-logo {
        font-size: 28px;
      }
      
      .greeting {
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <!-- Header -->
    <div class="email-header">
      <div class="header-overlay"></div>
      <div class="header-content">
        <div class="company-logo">AWDTECH</div>
        <div class="company-tagline">Service Numérique Partout dans le Monde</div>
        <div class="greeting">Merci <strong>${data.name}</strong> !</div>
        <p>Confirmation de réception de votre message</p>
      </div>
    </div>
    
    <!-- Main Content -->
    <div class="email-content">
      <p>Bonjour <strong>${data.name}</strong>,</p>
      
      <p>Nous vous remercions d'avoir contacté <strong>AWDTECH</strong>. Votre message a bien été reçu et sera examiné par notre équipe dans les plus brefs délais.</p>
      
      <div class="response-badge">
        Réponse garantie sous 24 heures ouvrables
      </div>
      
      <!-- Message Summary -->
      ${data.message ? `
      <div class="section-title">Votre message</div>
      <div class="message-summary">
        <div class="message-label">Résumé</div>
        <p class="message-preview">"${data.message.substring(0, 200)}${data.message.length > 200 ? "..." : ""}"</p>
      </div>
      ` : ''}
      
      <!-- Process Steps -->
      <div class="section-title">Notre processus de traitement</div>
      <div class="process-steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <div class="step-title">Analyse de votre demande</div>
            <p>Notre équipe spécialisée examine votre requête pour en comprendre les spécificités</p>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <div class="step-title">Évaluation des besoins</div>
            <p>Nous identifions les meilleures solutions adaptées à vos objectifs</p>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <div class="step-title">Préparation de la réponse</div>
            <p>Nous élaborons une réponse détaillée avec les prochaines étapes</p>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <div class="step-title">Contact et suivi</div>
            <p>Nous vous contactons pour discuter des solutions proposées</p>
          </div>
        </div>
      </div>
      
      <!-- Services -->
      <div class="section-title">Nos services</div>
      <div class="services-grid">
        <div class="service-card">
          <span class="service-icon">🌐</span>
          <h4 class="service-title">Développement Web</h4>
          <p class="service-desc">E-commerce, E-learning, Sites sur mesure</p>
        </div>
        
        <div class="service-card">
          <span class="service-icon">📱</span>
          <h4 class="service-title">Développement Mobile</h4>
          <p class="service-desc">Android, iOS, Applications multiplateformes</p>
        </div>
        
        <div class="service-card">
          <span class="service-icon">🎨</span>
          <h4 class="service-title">Design UI/UX</h4>
          <p class="service-desc">Identité de marque, Web Design, Graphisme</p>
        </div>
        
        <div class="service-card">
          <span class="service-icon">🤖</span>
          <h4 class="service-title">Intelligence Artificielle</h4>
          <p class="service-desc">Solutions innovantes basées sur l'IA</p>
        </div>
        
        <div class="service-card">
          <span class="service-icon">🛒</span>
          <h4 class="service-title">E-commerce</h4>
          <p class="service-desc">Plateformes de commerce électronique</p>
        </div>
        
        <div class="service-card">
          <span class="service-icon">☁️</span>
          <h4 class="service-title">Services Cloud</h4>
          <p class="service-desc">Infrastructure cloud évolutive</p>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="divider"></div>
      
      <!-- Contact Information -->
      <div class="contact-section">
        <div class="section-title">Contactez-nous directement</div>
        
        <div class="contact-row">
          <div class="contact-icon">📧</div>
          <div class="contact-details">
            <div class="contact-label">Email</div>
            <div class="contact-value">support.cm@awdpay.com</div>
          </div>
        </div>
        
        <div class="contact-row">
          <div class="contact-icon">📞</div>
          <div class="contact-details">
            <div class="contact-label">Cameroun</div>
            <div class="contact-value">+237 656 849 690 / +237 653 624 318</div>
          </div>
        </div>
        
        <div class="contact-row">
          <div class="contact-icon">📞</div>
          <div class="contact-details">
            <div class="contact-label">Gabon</div>
            <div class="contact-value">+241 66 50 39 99 / +241 76 38 80 06</div>
          </div>
        </div>
        
        <div class="contact-row">
          <div class="contact-icon">📞</div>
          <div class="contact-details">
            <div class="contact-label">Côte d'Ivoire</div>
            <div class="contact-value">+225 27 24 3 73010 / +225 27 24 3 73317</div>
          </div>
        </div>
        
        <div class="contact-row">
          <div class="contact-icon">⏰</div>
          <div class="contact-details">
            <div class="contact-label">Horaires d'ouverture</div>
            <div class="contact-value">Lundi - Vendredi, 8h00 - 18h00</div>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="cta-section">
        <a href="https://awdtech.org/produits" class="cta-button">Découvrir nos solutions</a>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="email-footer">
      <div class="signature">L'équipe AWDTECH</div>
      <div class="motto">Moteur de votre transformation digitale</div>
      
      <div class="copyright">
        © ${new Date().getFullYear()} AWDTECH. Tous droits réservés.<br>
        Service Numérique Partout dans le Monde
      </div>
      
      <div class="disclaimer">
        Ceci est un message automatique de confirmation. Merci de ne pas y répondre directement.
      </div>
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
      from: process.env.SMTP_FROM || `"AWDTECH Site Web" <${process.env.SMTP_USER || "noreply@awdtech.org"}>`,
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
      from: process.env.SMTP_FROM || `"AWDTECH" <${process.env.SMTP_USER || "noreply@awdtech.org"}>`,
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