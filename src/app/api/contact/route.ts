import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialiser Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const TAXI_EMAIL = "contact@taxi-02-strasbourg.fr";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validation
    if (!data.nom || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: "Email invalide" },
        { status: 400 }
      );
    }

    console.log("=== NOUVEAU MESSAGE CONTACT ===");
    console.log(`De: ${data.nom} (${data.email})`);
    console.log(`Sujet: ${data.sujet || "Non spécifié"}`);
    console.log("===============================");

    if (resend) {
      try {
        await resend.emails.send({
          from: "Taxi 02 Strasbourg <contact@taxi-02-strasbourg.fr>",
          to: "taxi02strasbourg@gmail.com",
          replyTo: "contact@taxi-02-strasbourg.fr",
          subject: `Nouveau message contact — ${data.nom}`,
          html: generateContactEmailTemplate(data),
        });
        console.log("✅ Email contact envoyé à", TAXI_EMAIL);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
        console.error("❌ Erreur envoi email contact:", errorMessage);
        // On renvoie quand même 200 pour ne pas bloquer l'UX
      }
    } else {
      console.warn("⚠️ Resend non configuré (RESEND_API_KEY manquant) - Email non envoyé");
    }

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

interface ContactData {
  nom: string;
  email: string;
  telephone?: string;
  sujet?: string;
  message: string;
}

function generateContactEmailTemplate(data: ContactData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouveau message contact - Taxi 02 Strasbourg</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FFF9F5; font-family: 'Segoe UI', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF;">

    <!-- Header -->
    <tr>
      <td style="padding: 30px; text-align: center; background: linear-gradient(135deg, #7A3345 0%, #5C1A2A 100%);">
        <h1 style="color: #FFFFFF; margin: 0; font-size: 24px; font-weight: bold;">📧 NOUVEAU MESSAGE CONTACT</h1>
        <p style="color: #E8AEBE; margin: 10px 0 0; font-size: 14px;">Via le site web Taxi 02 Strasbourg</p>
      </td>
    </tr>

    <!-- Infos expéditeur -->
    <tr>
      <td style="padding: 25px 30px; border-bottom: 2px solid #7A3345;">
        <h2 style="color: #7A3345; margin: 0 0 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">👤 Expéditeur</h2>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 8px 0;">
              <span style="color: #888888; font-size: 13px;">Nom :</span>
              <span style="color: #2D1F24; font-size: 16px; font-weight: bold; margin-left: 10px;">${data.nom}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0;">
              <span style="color: #888888; font-size: 13px;">Email :</span>
              <a href="mailto:${data.email}" style="color: #7A3345; font-size: 14px; margin-left: 10px; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0;">
              <span style="color: #888888; font-size: 13px;">Téléphone :</span>
              ${data.telephone
                ? `<a href="tel:${data.telephone}" style="color: #7A3345; font-size: 16px; font-weight: bold; margin-left: 10px; text-decoration: none;">${data.telephone}</a>`
                : '<span style="color: #888888; font-size: 14px; margin-left: 10px;">Non renseigné</span>'
              }
            </td>
          </tr>
          ${data.sujet ? `
          <tr>
            <td style="padding: 8px 0;">
              <span style="color: #888888; font-size: 13px;">Sujet :</span>
              <span style="color: #2D1F24; font-size: 14px; font-weight: 500; margin-left: 10px;">${data.sujet}</span>
            </td>
          </tr>
          ` : ""}
        </table>
      </td>
    </tr>

    <!-- Message -->
    <tr>
      <td style="padding: 25px 30px;">
        <h2 style="color: #7A3345; margin: 0 0 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">💬 Message</h2>
        <div style="background-color: #F5EEEA; padding: 20px; border-radius: 8px; border-left: 4px solid #7A3345;">
          <p style="color: #2D1F24; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
      </td>
    </tr>

    <!-- Bouton répondre -->
    <tr>
      <td style="padding: 10px 30px 40px; text-align: center;">
        <a href="mailto:${data.email}?subject=Re: ${data.sujet || "Votre message"} - Taxi 02 Strasbourg" style="display: inline-block; background: linear-gradient(135deg, #7A3345 0%, #5C1A2A 100%); color: #FFFFFF; text-decoration: none; font-size: 16px; font-weight: bold; padding: 15px 40px; border-radius: 8px;">
          ✉️ Répondre au client
        </a>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px; text-align: center; background-color: #FFF9F5; border-top: 1px solid #E8DDD8;">
        <p style="color: #888888; margin: 0; font-size: 12px;">
          Email automatique - Taxi 02 Strasbourg Formulaire de contact
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
