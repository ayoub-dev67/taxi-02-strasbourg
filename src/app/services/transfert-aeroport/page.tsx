import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Luggage,
  Briefcase,
  Shield,
  Eye,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title: "Transfert Aéroport",
  description:
    "Transfert aéroport Strasbourg-Entzheim, Bâle-Mulhouse, Francfort. Taxi grand coffre pour tous vos bagages et poussettes. Ponctualité garantie, suivi des vols.",
};

const airports = [
  {
    name: "Strasbourg-Entzheim",
    code: "SXB",
    distance: "15 km",
    duration: "20 min",
    description: "Aéroport international de Strasbourg",
  },
  {
    name: "Bâle-Mulhouse-Fribourg",
    code: "BSL/MLH/EAP",
    distance: "130 km",
    duration: "1h30",
    description: "EuroAirport binational France-Suisse",
  },
  {
    name: "Francfort",
    code: "FRA",
    distance: "220 km",
    duration: "2h30",
    description: "Hub international allemand",
  },
];

const advantages = [
  {
    icon: Clock,
    title: "Ponctualité garantie",
    description: "Nous arrivons toujours à l'heure. Votre vol n'attend pas.",
  },
  {
    icon: Eye,
    title: "Suivi des vols",
    description: "Nous suivons votre vol en temps réel et adaptons notre arrivée.",
  },
  {
    icon: Briefcase,
    title: "Aide aux bagages",
    description: "Nous vous aidons avec vos bagages du véhicule au terminal.",
  },
  {
    icon: Luggage,
    title: "Grand coffre",
    description: "Véhicule grand coffre pour tous vos bagages, poussettes et équipements.",
  },
  {
    icon: Shield,
    title: "Prix fixe",
    description: "Tarif convenu à l'avance, pas de surprise.",
  },
  {
    icon: MapPin,
    title: "Prise en charge porte",
    description: "Nous venons vous chercher directement chez vous.",
  },
];

const faqs = [
  {
    question: "Combien coûte un taxi vers l'aéroport de Strasbourg ?",
    answer:
      "Le transfert vers l'aéroport de Strasbourg-Entzheim coûte entre 25€ et 35€ depuis le centre-ville. Le prix exact dépend de votre adresse de départ. Le tarif est fixé à l'avance, sans surprise.",
  },
  {
    question: "Comment réserver un taxi pour l'aéroport ?",
    answer:
      "Vous pouvez réserver par téléphone, via WhatsApp, ou sur notre site web. Indiquez votre numéro de vol pour que nous puissions le suivre et adapter notre arrivée en cas de retard.",
  },
  {
    question: "Que se passe-t-il si mon vol est en retard ?",
    answer:
      "Nous suivons votre vol en temps réel. Si votre avion a du retard, nous adaptons automatiquement notre heure d'arrivée. Vous n'avez rien à faire, nous serons là quand vous atterrirez.",
  },
  {
    question: "Combien de temps avant mon vol dois-je réserver ?",
    answer:
      "Nous recommandons de réserver au moins 24h à l'avance pour garantir la disponibilité. Pour les vols très tôt le matin (avant 6h), la réservation la veille est indispensable.",
  },
];

export default function TransfertAeroportPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Transfert Taxi Aéroport Strasbourg",
          description: "Transfert taxi grand coffre vers les aéroports de Strasbourg-Entzheim, Bâle-Mulhouse et Francfort. Place pour tous vos bagages et poussettes. Ponctualité garantie.",
          serviceType: "Airport Transfer",
          areaServed: "Strasbourg, Alsace, toutes distances",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Transfert Aéroport", url: "/services/transfert-aeroport" },
        ]}
      />
        {/* Hero with background image */}
      <div className="relative mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/photos/vehicule-1.jpg"
            alt="Transfert taxi aéroport Strasbourg — Taxi 02 Strasbourg"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-gold-light mb-4 inline-flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Transfert Aéroport
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Transfert vers les <span className="text-gold-400">aéroports</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Navette taxi grand coffre vers tous les aéroports de la région.
              Place pour tous vos bagages et poussettes. Ponctualité garantie, suivi de vol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservation" className="btn-gold inline-flex items-center justify-center gap-2">
                Réserver un transfert
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-semibold transition-all duration-300 hover:bg-white hover:text-gold-400 active:scale-[0.98] min-h-12"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Aéroports desservis */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Aéroports desservis
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {airports.map((airport) => (
              <div key={airport.code} className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {airport.name}
                    </h3>
                    <p className="text-gold-400 text-sm font-mono">{airport.code}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{airport.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    {airport.distance}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-gold-400" />
                    {airport.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nos avantages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Pourquoi nous choisir ?
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
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="mb-16">
          <div className="card-premium max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Comment réserver votre transfert ?
            </h2>
            <ul className="space-y-4">
              {[
                "Réservez en ligne ou par téléphone en indiquant votre vol",
                "Nous vous confirmons l'heure de prise en charge",
                "Nous suivons votre vol le jour J (avance ou retard)",
                "Nous vous attendons à l'arrivée ou vous déposons au départ",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-400 text-black text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
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

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gold-400/20 rounded-lg bg-surface-50 px-6 data-[state=open]:border-gold-400/40"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-gold-400 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Europa-Park encart */}
        <section className="mb-16">
          <Link href="/services/transfert-europapark" className="block group">
            <div className="card-premium flex flex-col sm:flex-row items-center gap-4 border-gold-400/30">
              <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-gold-400" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-gold-400 transition-colors">
                  Vous cherchez Europa-Park ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Transfert direct Strasbourg — Europa-Park en 45 min. Grand coffre, ideal familles.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="card-premium inline-block bg-gradient-to-br from-gold-400/10 to-transparent border-gold-400/40 py-8 px-8 sm:px-12">
            <Plane className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Prochain vol à prendre ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Réservez votre transfert aéroport et voyagez l&apos;esprit tranquille.
              Ponctualité et confort garantis.
            </p>
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver un transfert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
