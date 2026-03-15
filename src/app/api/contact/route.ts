import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.nom || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants" },
        { status: 400 }
      );
    }

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
      // Email chauffeur (notification) — toujours envoyé
      const chauffeurPromise = resend.emails.send({
        from: "Taxi 02 Strasbourg <contact@taxi-02-strasbourg.fr>",
        to: "taxi02strasbourg@gmail.com",
        replyTo: "contact@taxi-02-strasbourg.fr",
        subject: `🚖 Nouvelle réservation — ${data.nom}`,
        html: generateNotificationEmail(data),
      });

      // Email client (confirmation) — envoyé en parallèle
      const clientPromise = resend.emails.send({
        from: "Taxi 02 Strasbourg <contact@taxi-02-strasbourg.fr>",
        to: data.email,
        replyTo: "contact@taxi-02-strasbourg.fr",
        subject: "✅ Réservation confirmée — Taxi 02 Strasbourg",
        html: generateConfirmationEmail(data),
      });

      const results = await Promise.allSettled([chauffeurPromise, clientPromise]);

      if (results[0].status === "fulfilled") {
        console.log("✅ Email chauffeur envoyé");
      } else {
        console.error("❌ Erreur email chauffeur:", results[0].reason);
      }
      if (results[1].status === "fulfilled") {
        console.log("✅ Email confirmation client envoyé");
      } else {
        console.error("❌ Erreur email client:", results[1].reason);
      }
    } else {
      console.warn("⚠️ Resend non configuré (RESEND_API_KEY manquant)");
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

function generateNotificationEmail(data: ContactData): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#F4F6FA;margin:0;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#0A1628;padding:30px;text-align:center;">
      <h1 style="color:#FFB800;margin:0;font-size:24px;">TAXI <span style="color:#ffffff">02</span></h1>
      <p style="color:#ffffff;margin:8px 0 0;font-size:14px;">Strasbourg — Nouvelle réservation reçue</p>
    </div>
    <div style="padding:30px;">
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Client</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.nom}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Téléphone</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.telephone || "Non renseigné"}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Email</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.email}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Type de demande</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.sujet || "Contact général"}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Départ</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">Non renseigné</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Destination</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">Non renseigné</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Date &amp; Heure</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">Non renseigné</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Message</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;white-space:pre-wrap;">${data.message}</div>
      </div>
      <a href="tel:${data.telephone || "+33753145371"}" style="background:#FFB800;color:#0A1628;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block;margin-top:20px;">Appeler le client</a>
    </div>
    <div style="background:#0A1628;padding:20px;text-align:center;color:#6B7A99;font-size:12px;">
      Taxi 02 Strasbourg • contact@taxi-02-strasbourg.fr • 07 53 14 53 71
    </div>
  </div>
</body></html>`;
}

function generateConfirmationEmail(data: ContactData): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#F4F6FA;margin:0;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#0A1628;padding:30px;text-align:center;">
      <h1 style="color:#FFB800;margin:0;font-size:24px;">TAXI <span style="color:#ffffff">02</span></h1>
      <p style="color:#ffffff;margin:8px 0 0;font-size:14px;">Strasbourg — Confirmation de votre réservation</p>
    </div>
    <div style="padding:30px;">
      <div style="background:#F4F6FA;border-left:4px solid #FFB800;padding:16px 20px;border-radius:0 8px 8px 0;margin-bottom:24px;">
        <p style="margin:0;color:#0A1628;font-size:15px;line-height:1.6;">
          Bonjour <strong>${data.nom}</strong>,<br><br>
          Nous avons bien reçu votre demande et nous vous recontacterons
          dans les plus brefs délais pour confirmer votre course.<br><br>
          En cas d'urgence, n'hésitez pas à nous appeler directement.
        </p>
      </div>
      <div style="margin-bottom:24px;">
        <div style="font-size:13px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:12px;">Récapitulatif de votre demande</div>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;color:#6B7A99;">Type de demande</div>
          <div style="font-size:15px;color:#0A1628;font-weight:500;">${data.sujet || "Contact général"}</div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;color:#6B7A99;">Départ</div>
          <div style="font-size:15px;color:#0A1628;font-weight:500;">Non renseigné</div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;color:#6B7A99;">Destination</div>
          <div style="font-size:15px;color:#0A1628;font-weight:500;">Non renseigné</div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;color:#6B7A99;">Date &amp; Heure</div>
          <div style="font-size:15px;color:#0A1628;font-weight:500;">Non renseigné</div>
        </div>
      </div>
      <div style="background:#0A1628;border-radius:10px;padding:20px;text-align:center;margin-top:24px;">
        <p style="color:#ffffff;margin:0 0 12px;font-size:14px;">Besoin d'une réponse immédiate ?</p>
        <a href="tel:+33753145371" style="color:#FFB800;font-size:22px;font-weight:bold;text-decoration:none;">07 53 14 53 71</a>
      </div>
    </div>
    <div style="background:#0A1628;padding:20px;text-align:center;color:#6B7A99;font-size:12px;">
      Taxi 02 Strasbourg • contact@taxi-02-strasbourg.fr<br>
      Disponible 24h/24 — 7j/7 • Conventionné CPAM
    </div>
  </div>
</body></html>`;
}
