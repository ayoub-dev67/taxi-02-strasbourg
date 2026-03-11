import type { Metadata } from "next";
import Link from "next/link";
import {
  Route,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Shield,
  CheckCircle,
  Car,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Taxi Longue Distance Strasbourg — Alsace, France entière | Taxi 02 Strasbourg",
  description:
    "Taxi longue distance au départ de Strasbourg. Trajets vers toute l'Alsace, la France entière et l'international. Tarif convenu à l'avance, confort garanti. Taxi 02 Strasbourg, disponible 24h/24.",
};

const popularRoutes = [
  {
    destination: "Colmar",
    distance: "75 km",
    duration: "50 min",
    description: "Capitale des vins d'Alsace, marché de Noël réputé.",
  },
  {
    destination: "Mulhouse",
    distance: "120 km",
    duration: "1h15",
    description: "Cité de l'automobile, centre industriel du Haut-Rhin.",
  },
  {
    destination: "Paris",
    distance: "490 km",
    duration: "4h30",
    description:
      "Capitale française, transferts professionnels et personnels.",
  },
  {
    destination: "Lyon",
    distance: "490 km",
    duration: "4h30",
    description: "Capitale des Gaules, hub économique du sud-est.",
  },
  {
    destination: "Metz",
    distance: "165 km",
    duration: "1h45",
    description: "Capitale de la Lorraine, centre Pompidou-Metz.",
  },
  {
    destination: "Nancy",
    distance: "155 km",
    duration: "1h40",
    description: "Place Stanislas, patrimoine UNESCO.",
  },
  {
    destination: "Fribourg-en-Brisgau",
    distance: "85 km",
    duration: "1h",
    description: "Ville universitaire allemande, Forêt-Noire.",
  },
  {
    destination: "Luxembourg",
    distance: "230 km",
    duration: "2h30",
    description: "Grand-Duché, institutions européennes.",
  },
];

const advantages = [
  {
    icon: Shield,
    title: "Tarif fixé à l'avance",
    description:
      "Pas de compteur, pas de surprise. Le prix est convenu avant le départ et ne change pas, quelle que soit la circulation.",
  },
  {
    icon: Car,
    title: "Véhicule confortable",
    description:
      "Berline spacieuse et climatisée pour un trajet longue distance tout confort. Idéal pour se reposer ou travailler.",
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description:
      "Départ à l'heure de votre choix, tôt le matin ou tard le soir. Nous nous adaptons entièrement à votre planning.",
  },
  {
    icon: Route,
    title: "Toutes destinations",
    description:
      "Alsace, Grand Est, France entière et pays limitrophes (Allemagne, Suisse, Luxembourg). Aucune limite de distance.",
  },
  {
    icon: MapPin,
    title: "Porte à porte",
    description:
      "Prise en charge à votre domicile ou bureau, dépose directement à votre destination finale. Zéro correspondance.",
  },
  {
    icon: CheckCircle,
    title: "Chauffeur professionnel",
    description:
      "Chauffeur expérimenté, connaissance parfaite des itinéraires. Conduite sûre et détendue sur autoroute.",
  },
];

const faqs = [
  {
    question: "Comment est calculé le prix d'un trajet longue distance ?",
    answer:
      "Le prix est calculé en fonction de la distance et fixé à l'avance lors de la réservation. Contactez-nous pour obtenir un devis gratuit et sans engagement. Pas de supplément en cas d'embouteillage ou de déviation.",
  },
  {
    question: "Peut-on faire un aller-retour dans la journée ?",
    answer:
      "Oui, nous proposons des formules aller-retour pour vos déplacements professionnels ou personnels. Le chauffeur vous attend sur place le temps nécessaire et vous ramène à Strasbourg.",
  },
  {
    question: "Le taxi longue distance est-il plus avantageux que le train ?",
    answer:
      "Pour 2 à 4 personnes, le taxi revient souvent au même prix par personne que le train, avec l'avantage du porte-à-porte, de la flexibilité horaire et de l'espace pour les bagages. Idéal quand les horaires de train ne correspondent pas.",
  },
  {
    question: "Faites-vous des trajets vers l'étranger ?",
    answer:
      "Oui, nous assurons les transferts vers l'Allemagne (Fribourg, Francfort, Stuttgart...), la Suisse (Bâle, Zurich...) et le Luxembourg. Espace Schengen, pas de formalités douanières.",
  },
];

export default function LongueDistancePage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Taxi Longue Distance Strasbourg",
          description:
            "Taxi longue distance au départ de Strasbourg vers toute l'Alsace, la France entière et l'international. Tarif fixé à l'avance.",
          serviceType: "Long Distance Transport",
          areaServed:
            "Strasbourg, Alsace, Grand Est, France, Allemagne, Suisse, Luxembourg",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Longue Distance", url: "/longue-distance" },
        ]}
      />

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <Route className="w-4 h-4" />
            Longue Distance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Taxi{" "}
            <span className="text-gold-gradient">longue distance</span> au
            départ de Strasbourg
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Taxi 02 Strasbourg vous transporte partout en France et au-delà,
            directement depuis Strasbourg. Que ce soit pour un rendez-vous
            professionnel à Paris, une visite familiale à Colmar, un transfert
            médical vers un centre spécialisé ou un voyage vers l&apos;Allemagne
            et la Suisse, notre service de taxi longue distance vous offre un
            transport confortable, sans correspondance et à tarif fixe. Berline
            spacieuse, climatisation, départ à l&apos;heure de votre choix :
            profitez du trajet pour vous reposer ou travailler pendant que votre
            chauffeur professionnel s&apos;occupe de la route.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Demander un devis
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trajets populaires */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Destinations populaires au départ de Strasbourg
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route) => (
              <div key={route.destination} className="card-premium">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Strasbourg → {route.destination}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {route.description}
                </p>
                <div className="flex items-center justify-between text-sm border-t border-gold-400/10 pt-3">
                  <div className="flex items-center gap-1 text-gray-700">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    {route.distance}
                  </div>
                  <div className="flex items-center gap-1 text-gray-700">
                    <Clock className="w-4 h-4 text-gold-400" />
                    ~{route.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Avantages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Les avantages du taxi longue distance
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
            <Route className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Un trajet longue distance à planifier ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Obtenez un devis gratuit et réservez votre taxi longue distance
              avec Taxi 02 Strasbourg.
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
