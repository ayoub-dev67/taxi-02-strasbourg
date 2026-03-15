import { NextRequest, NextResponse } from "next/server";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Resend } from "resend";

interface TwilioMessage {
  body: string;
  from: string;
  to: string;
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.depart?.adresse || !data.arrivee?.adresse) {
      return NextResponse.json(
        { success: false, error: "Adresses manquantes" },
        { status: 400 }
      );
    }

    if (!data.client?.nom || !data.client?.telephone) {
      return NextResponse.json(
        { success: false, error: "Informations client incomplètes" },
        { status: 400 }
      );
    }

    const reservationId = `T02-${Date.now().toString(36).toUpperCase()}`;

    const dateFormatted = data.date
      ? format(new Date(data.date), "EEEE d MMMM yyyy", { locale: fr })
      : "Non spécifiée";

    const messageWhatsApp = `
🚕 NOUVELLE RÉSERVATION Taxi 02 Strasbourg

📍 TRAJET
Départ: ${data.depart.adresse}
Arrivée: ${data.arrivee.adresse}
Type: ${data.typeTrajet === "aller-retour" ? "Aller-retour" : "Aller simple"}

📅 DATE ET HEURE
${dateFormatted} à ${data.heure || "Non spécifiée"}

👥 DÉTAILS
Passagers: ${data.passagers || 1}
Bagages: ${data.bagages || 0}
Animaux: ${data.animaux || 0}
${data.options?.siegeBebe ? "✅ Siège bébé demandé" : ""}
${data.options?.fauteuilRoulant ? "✅ Fauteuil roulant" : ""}

👤 CLIENT
Nom: ${data.client.prenom} ${data.client.nom}
Téléphone: ${data.client.telephone}
Email: ${data.client.email || "Non renseigné"}
${data.client.commentaire ? `\n📝 Commentaire: ${data.client.commentaire}` : ""}

💰 Prix estimé: ${data.prixEstime ? `${data.prixEstime.toFixed(2)}€` : "À calculer"}

🔖 Réf: ${reservationId}
    `.trim();

    console.log("=== NOUVELLE RÉSERVATION ===");
    console.log(messageWhatsApp);
    console.log("============================");

    const results = {
      whatsapp: { sent: false, error: null as string | null },
      emailClient: { sent: false, error: null as string | null },
      emailTaxi: { sent: false, error: null as string | null },
    };

    // ═══════════════════════════════════════════════════════════════
    // ENVOI WHATSAPP VIA TWILIO
    // ═══════════════════════════════════════════════════════════════
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

    if (twilioAccountSid && twilioAuthToken) {
      try {
        const twilio = await import("twilio");
        const client = twilio.default(twilioAccountSid, twilioAuthToken);

        await client.messages.create({
          body: messageWhatsApp,
          from: "whatsapp:+14155238886",
          to: "whatsapp:+33753145371",
        } as TwilioMessage);

        results.whatsapp.sent = true;
        console.log("✅ WhatsApp envoyé avec succès");
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
        results.whatsapp.error = errorMessage;
        console.error("❌ Erreur WhatsApp:", errorMessage);
      }
    } else {
      results.whatsapp.error = "Twilio non configuré";
      console.warn("⚠️ Twilio non configuré - WhatsApp non envoyé");
    }

    // ═══════════════════════════════════════════════════════════════
    // ENVOI EMAILS VIA RESEND (en parallèle)
    // ═══════════════════════════════════════════════════════════════
    if (resend) {
      const emailData = {
        reservationId,
        clientName: `${data.client.prenom} ${data.client.nom}`,
        clientEmail: data.client.email,
        clientPhone: data.client.telephone,
        depart: data.depart.adresse,
        arrivee: data.arrivee.adresse,
        date: dateFormatted,
        heure: data.heure || "Non spécifiée",
        passagers: data.passagers || 1,
        bagages: data.bagages || 0,
        animaux: data.animaux || 0,
        typeTrajet: data.typeTrajet || "aller-simple",
        options: data.options || {},
        prixEstime: data.prixEstime,
        distance: data.distance,
        commentaire: data.client.commentaire,
      };

      // Email chauffeur (toujours envoyé)
      const chauffeurPromise = resend.emails.send({
        from: "Taxi 02 Strasbourg <contact@taxi-02-strasbourg.fr>",
        to: "taxi02strasbourg@gmail.com",
        replyTo: "contact@taxi-02-strasbourg.fr",
        subject: `🚖 Nouvelle réservation — ${data.client.prenom} ${data.client.nom}`,
        html: generateNotificationEmail(emailData),
      });

      // Email client (seulement si email renseigné)
      const clientPromise = data.client.email?.trim()
        ? resend.emails.send({
            from: "Taxi 02 Strasbourg <contact@taxi-02-strasbourg.fr>",
            to: data.client.email,
            replyTo: "contact@taxi-02-strasbourg.fr",
            subject: "✅ Réservation confirmée — Taxi 02 Strasbourg",
            html: generateConfirmationEmail(emailData),
          })
        : Promise.resolve(null);

      const [chauffeurResult, clientResult] = await Promise.allSettled([chauffeurPromise, clientPromise]);

      if (chauffeurResult.status === "fulfilled") {
        results.emailTaxi.sent = true;
        console.log("✅ Email chauffeur envoyé");
      } else {
        results.emailTaxi.error = String(chauffeurResult.reason);
        console.error("❌ Erreur email chauffeur:", chauffeurResult.reason);
      }

      if (data.client.email?.trim()) {
        if (clientResult.status === "fulfilled") {
          results.emailClient.sent = true;
          console.log("✅ Email confirmation client envoyé");
        } else {
          results.emailClient.error = String(clientResult.reason);
          console.error("❌ Erreur email client:", clientResult.reason);
        }
      }
    } else {
      const errorMsg = "Resend non configuré (RESEND_API_KEY manquant)";
      results.emailClient.error = errorMsg;
      results.emailTaxi.error = errorMsg;
      console.warn("⚠️ Resend non configuré - Emails non envoyés");
    }

    return NextResponse.json({
      success: true,
      message: "Réservation enregistrée avec succès",
      data: {
        id: reservationId,
        notifications: results,
        ...data,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la réservation:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

interface EmailData {
  reservationId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  depart: string;
  arrivee: string;
  date: string;
  heure: string;
  passagers: number;
  bagages: number;
  animaux: number;
  typeTrajet: string;
  options: { siegeBebe?: boolean; fauteuilRoulant?: boolean };
  prixEstime?: number;
  distance?: number;
  commentaire?: string;
}

function generateNotificationEmail(data: EmailData): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#F4F6FA;margin:0;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#0A1628;padding:30px;text-align:center;">
      <h1 style="color:#FFB800;margin:0;font-size:24px;">TAXI <span style="color:#ffffff">02</span></h1>
      <p style="color:#ffffff;margin:8px 0 0;font-size:14px;">Strasbourg — Nouvelle réservation reçue</p>
    </div>
    ${data.prixEstime ? `<div style="background:#FFB800;padding:20px;text-align:center;">
      <p style="margin:0;color:#0A1628;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Estimation du prix</p>
      <p style="margin:8px 0 0;color:#0A1628;font-size:42px;font-weight:900;line-height:1;">${data.prixEstime.toFixed(2)} €</p>
      <p style="margin:4px 0 0;color:#0A1628;font-size:12px;opacity:0.7;">Tarif préfectoral estimé${data.distance ? ` — ${data.distance} km` : ""}</p>
    </div>` : `<div style="background:#FFB800;padding:14px;text-align:center;">
      <p style="margin:0;color:#0A1628;font-size:14px;">Prix calculé au compteur officiel</p>
    </div>`}
    <div style="padding:30px;">
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Client</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.clientName}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Téléphone</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.clientPhone}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Email</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.clientEmail || "Non renseigné"}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Type de demande</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">Réservation ${data.typeTrajet === "aller-retour" ? "aller-retour" : "aller simple"}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Départ</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.depart}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Destination</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.arrivee}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Date &amp; Heure</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.date} à ${data.heure}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Passagers / Bagages / Animaux</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.passagers} passager(s) • ${data.bagages} bagage(s) • ${data.animaux} animal(aux)</div>
      </div>
      ${data.options.siegeBebe || data.options.fauteuilRoulant ? `
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Options</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;">${data.options.siegeBebe ? "✅ Siège bébé " : ""}${data.options.fauteuilRoulant ? "✅ Fauteuil roulant" : ""}</div>
      </div>` : ""}
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">💰 Prix estimé</div>
        <div style="font-size:20px;color:#FFB800;font-weight:900;">${data.prixEstime ? `${data.prixEstime.toFixed(2)} €` : "Au compteur officiel"}</div>
      </div>
      <div style="margin-bottom:16px;border-bottom:1px solid #F4F6FA;padding-bottom:16px;">
        <div style="font-size:12px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:4px;">Message</div>
        <div style="font-size:16px;color:#0A1628;font-weight:500;white-space:pre-wrap;">${data.commentaire || "Non renseigné"}</div>
      </div>
      <a href="tel:${data.clientPhone}" style="background:#FFB800;color:#0A1628;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block;margin-top:20px;">Appeler le client</a>
    </div>
    <div style="background:#0A1628;padding:20px;text-align:center;color:#6B7A99;font-size:12px;">
      Taxi 02 Strasbourg • contact@taxi-02-strasbourg.fr • 07 53 14 53 71<br>Réf: ${data.reservationId}
    </div>
  </div>
</body></html>`;
}

function generateConfirmationEmail(data: EmailData): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#F4F6FA;margin:0;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#0A1628;padding:30px;text-align:center;">
      <h1 style="color:#FFB800;margin:0;font-size:24px;">TAXI <span style="color:#ffffff">02</span></h1>
      <p style="color:#ffffff;margin:8px 0 0;font-size:14px;">Strasbourg — Confirmation de votre réservation</p>
    </div>
    <div style="padding:30px;">
      ${data.prixEstime ? `<div style="background:#FFB800;border-radius:10px;padding:20px;text-align:center;margin-bottom:24px;">
        <p style="margin:0;color:#0A1628;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Votre estimation de prix</p>
        <p style="margin:8px 0 0;color:#0A1628;font-size:48px;font-weight:900;line-height:1;">${data.prixEstime.toFixed(2)} €</p>
        <p style="margin:4px 0 0;color:#0A1628;font-size:12px;">Tarif réglementé Préfecture du Bas-Rhin</p>
      </div>` : `<div style="background:#FFB800;border-radius:10px;padding:14px;text-align:center;margin-bottom:24px;">
        <p style="margin:0;color:#0A1628;font-size:14px;">Prix calculé au compteur officiel</p>
      </div>`}
      <div style="background:#F4F6FA;border-left:4px solid #FFB800;padding:16px 20px;border-radius:0 8px 8px 0;margin-bottom:24px;">
        <p style="margin:0;color:#0A1628;font-size:15px;line-height:1.6;">
          Bonjour <strong>${data.clientName}</strong>,<br><br>
          Nous avons bien reçu votre demande et nous vous recontacterons
          dans les plus brefs délais pour confirmer votre course.<br><br>
          En cas d'urgence, n'hésitez pas à nous appeler directement.
        </p>
      </div>
      <div style="margin-bottom:24px;">
        <div style="font-size:13px;color:#6B7A99;text-transform:uppercase;font-weight:bold;margin-bottom:12px;">Récapitulatif de votre demande</div>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;color:#6B7A99;">Type de demande</div>
          <div style="font-size:15px;color:#0A1628;font-weight:500;">Réservation ${data.typeTrajet === "aller-retour" ? "aller-retour" : "aller simple"}</div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;color:#6B7A99;">Départ</div>
          <div style="font-size:15px;color:#0A1628;font-weight:500;">${data.depart}</div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;color:#6B7A99;">Destination</div>
          <div style="font-size:15px;color:#0A1628;font-weight:500;">${data.arrivee}</div>
        </div>
        <div style="margin-bottom:10px;">
          <div style="font-size:12px;color:#6B7A99;">Date &amp; Heure</div>
          <div style="font-size:15px;color:#0A1628;font-weight:500;">${data.date} à ${data.heure}</div>
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
