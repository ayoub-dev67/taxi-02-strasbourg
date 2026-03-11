import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Train,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Luggage,
  Shield,
  Eye,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Transfert Aéroport & Gare Strasbourg — EuroAirport, Entzheim | Taxi 02 Strasbourg",
  description:
    "Transfert taxi vers EuroAirport Bâle-Mulhouse, aéroport Strasbourg-Entzheim et Gare de Strasbourg. Ponctualité garantie, suivi des vols, aide aux bagages. Taxi 02 Strasbourg, disponible 24h/24.",
};

const destinations = [
  {
    icon: Plane,
    name: "Aéroport Strasbourg-Entzheim",
    code: "SXB",
    distance: "15 km",
    duration: "20 min",
    description:
      "Aéroport international de Strasbourg, liaisons nationales et européennes.",
  },
  {
    icon: Plane,
    name: "EuroAirport Bâle-Mulhouse-Fribourg",
    code: "BSL/MLH/EAP",
    distance: "130 km",
    duration: "1h30",
    description:
      "Le plus grand aéroport de la région, hub international trinational France-Suisse-Allemagne.",
  },
  {
    icon: Plane,
    name: "Aéroport de Francfort",
    code: "FRA",
    distance: "220 km",
    duration: "2h30",
    description:
      "Hub international allemand, idéal pour les vols long-courriers.",
  },
  {
    icon: Train,
    name: "Gare de Strasbourg",
    code: "TGV/TER/ICE",
    distance: "Centre-ville",
    duration: "10-20 min",
    description:
      "Gare centrale avec TGV vers Paris (1h50), liaisons TER et ICE vers l'Allemagne.",
  },
  {
    icon: Train,
    name: "Gare de Kehl",
    code: "RE/S-Bahn",
    distance: "8 km",
    duration: "15 min",
    description:
      "Connexion vers le réseau ferroviaire allemand, S-Bahn Ortenau.",
  },
];

const advantages = [
  {
    icon: Clock,
    title: "Ponctualité garantie",
    description:
      "Nous arrivons toujours à l'heure. Votre vol ou votre train n'attend pas, nous non plus.",
  },
  {
    icon: Eye,
    title: "Suivi des vols en temps réel",
    description:
      "Nous surveillons votre vol et adaptons notre arrivée en cas de retard. Aucun stress.",
  },
  {
    icon: Luggage,
    title: "Aide aux bagages",
    description:
      "Notre chauffeur vous aide à charger et décharger vos bagages, du domicile au terminal.",
  },
  {
    icon: Shield,
    title: "Tarif convenu à l'avance",
    description:
      "Le prix est fixé avant votre trajet. Pas de compteur, pas de surprise, pas de supplément caché.",
  },
  {
    icon: MapPin,
    title: "Prise en charge porte à porte",
    description:
      "Nous venons vous chercher à votre domicile et vous déposons directement au terminal.",
  },
  {
    icon: CheckCircle,
    title: "Disponible 24h/24",
    description:
      "Vols tôt le matin ou tard le soir ? Nous sommes disponibles à toute heure, 7j/7.",
  },
];

const faqs = [
  {
    question:
      "Combien coûte un transfert vers EuroAirport Bâle-Mulhouse depuis Strasbourg ?",
    answer:
      "Le prix dépend de votre adresse de départ exacte à Strasbourg. Contactez Taxi 02 Strasbourg pour obtenir un devis précis et gratuit. Le tarif est fixé à l'avance, sans surprise.",
  },
  {
    question:
      "Que se passe-t-il si mon vol a du retard ?",
    answer:
      "Nous suivons votre vol en temps réel. Si votre avion a du retard, nous adaptons automatiquement notre heure d'arrivée à l'aéroport. Vous n'avez rien à faire, nous serons là quand vous atterrirez.",
  },
  {
    question: "Pouvez-vous m'aider avec mes bagages à la gare ?",
    answer:
      "Oui, notre chauffeur vous aide à charger et décharger vos bagages. Ce service est inclus dans le prix de la course, sans supplément. Nous vous déposons directement devant l'entrée de la gare.",
  },
  {
    question:
      "Faites-vous des transferts vers la Gare de Strasbourg pour les TGV tôt le matin ?",
    answer:
      "Absolument. Nous assurons les transferts à toute heure, y compris pour les premiers TGV du matin (dès 5h). Réservez la veille pour garantir votre créneau.",
  },
];

export default function AeroportGarePage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Transfert Aéroport et Gare Strasbourg",
          description:
            "Transfert taxi vers EuroAirport Bâle-Mulhouse, Strasbourg-Entzheim, Francfort et Gare de Strasbourg. Ponctualité garantie, suivi des vols.",
          serviceType: "Airport and Train Station Transfer",
          areaServed: "Strasbourg, Alsace, EuroAirport, Francfort",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Aéroport & Gare", url: "/aeroport-gare" },
        ]}
      />

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <Plane className="w-4 h-4" />
            Transferts Aéroport & Gare
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Transferts{" "}
            <span className="text-gold-gradient">aéroport et gare</span> au
            départ de Strasbourg
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Taxi 02 Strasbourg assure vos transferts vers tous les aéroports et
            gares de la région. Que vous preniez un vol depuis
            l&apos;EuroAirport Bâle-Mulhouse, l&apos;aéroport de
            Strasbourg-Entzheim ou même Francfort, notre service de navette taxi
            vous garantit une arrivée à l&apos;heure, sans stress. Nous
            desservons également la Gare de Strasbourg pour tous vos voyages en
            TGV, TER ou ICE. Suivi des vols en temps réel, aide aux bagages,
            véhicule confortable : concentrez-vous sur votre voyage, nous nous
            occupons du reste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver un transfert
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="btn-gold-outline inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mt-12 mx-auto max-w-3xl rounded-2xl overflow-hidden aspect-video">
          <Image
            src="/images/vehicule/vehicule-parlement-europeen.jpg"
            alt="Taxi Strasbourg aéroport — transfert depuis le Parlement Européen"
            fill
            style={{ objectFit: 'cover' }}
            priority={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Destinations */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Aéroports et gares desservis
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <div key={dest.code} className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                    <dest.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {dest.name}
                    </h3>
                    <p className="text-gold-400 text-sm font-mono">
                      {dest.code}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    {dest.distance}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-gold-400" />
                    {dest.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gare image */}
        <div className="relative mb-16 mx-auto max-w-3xl rounded-2xl overflow-hidden aspect-video">
          <Image
            src="/images/vehicule/vehicule-gare.jpg"
            alt="Taxi Strasbourg gare — transfert vers la Gare de Strasbourg"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Avantages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Pourquoi choisir Taxi 02 Strasbourg ?
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                    <advantage.icon className="w-6 h-6 text-gold-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="card-premium inline-block bg-gradient-to-br from-gold-400/10 to-transparent border-gold-400/40 py-8 px-8 sm:px-12">
            <Plane className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Un vol ou un train à prendre ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Réservez votre transfert avec Taxi 02 Strasbourg et voyagez
              l&apos;esprit tranquille.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
              <Link
                href="/reservation"
                className="btn-gold-outline inline-flex items-center justify-center gap-2"
              >
                Réserver en ligne
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
