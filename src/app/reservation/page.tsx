import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking";
import { UrgencyBadges } from "@/components/shared/UrgencyBadges";
import { TrustBadgesCompact } from "@/components/shared/TrustBadges";

export const metadata: Metadata = {
  title: "Réserver un Taxi à Strasbourg — Taxi 02 Strasbourg | Réponse en 5 min",
  description:
    "Réservez votre taxi à Strasbourg en quelques clics. Transport médical, transfert aéroport, courses toutes distances. Disponible 24h/24. Réponse en 5 minutes.",
};

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="badge-gold mb-4 inline-block">Réservation</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Réserver votre <span className="text-gold-gradient">taxi</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Remplissez le formulaire ci-dessous pour réserver votre course.
            Nous vous confirmerons votre réservation rapidement.
          </p>

          {/* Urgency Badges */}
          <UrgencyBadges />
        </div>
      </div>

      {/* Booking Wizard */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Wizard */}
          <div className="lg:col-span-2">
            <BookingWizard />
          </div>

          {/* Sidebar - Trust Badges */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="card-premium">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <TrustBadgesCompact />
              </div>

              {/* Contact rapide */}
              <div className="card-premium mt-4 bg-gradient-to-br from-gold-400/10 to-transparent border-gold-400/30">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Besoin d&apos;aide ?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Appelez-nous pour une réservation immédiate
                </p>
                <a
                  href="tel:+33XXXXXXXXX"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  📞 +33 X XX XX XX XX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
