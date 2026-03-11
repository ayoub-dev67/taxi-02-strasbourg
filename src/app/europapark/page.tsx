import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Luggage,
  Baby,
  Car,
  CheckCircle,
  Sun,
  Snowflake,
  CalendarDays,
  Droplets,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Taxi Strasbourg — Europa-Park Rust | Transfert direct 45 min | Taxi 02 Strasbourg",
  description:
    "Transfert taxi Strasbourg Europa-Park en 45 min. Véhicule spacieux idéal familles, dépose devant l'entrée, aller-retour possible. Taxi 02 Strasbourg, réservez maintenant.",
};

const avantages = [
  {
    icon: Car,
    title: "Chauffeur qui connaît la route",
    description:
      "Trajet direct par l'A35 puis A5 côté allemand, sans stress ni GPS. 45 min porte à porte.",
  },
  {
    icon: MapPin,
    title: "Dépose devant l'entrée",
    description:
      "On vous dépose directement devant l'entrée du parc, pas de navette ni de marche à pied.",
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description:
      "Départ tôt le matin pour l'ouverture, retour tard le soir après la fermeture. Vous choisissez.",
  },
  {
    icon: Luggage,
    title: "Grand coffre familles",
    description:
      "Poussettes, sacs, glacières, souvenirs au retour — tout rentre dans le coffre.",
  },
  {
    icon: Baby,
    title: "Siège auto enfant",
    description:
      "Siège auto disponible sur demande. Précisez l'âge de votre enfant à la réservation.",
  },
  {
    icon: ArrowRight,
    title: "Service aller-retour",
    description:
      "On revient vous chercher à l'heure convenue. Profitez du parc sans aucune contrainte.",
  },
];

const saisons = [
  {
    icon: Sun,
    title: "Printemps / Été",
    period: "Mars — Septembre",
    description:
      "Saison principale, toutes les attractions ouvertes. Réservez tôt le matin pour éviter la foule.",
  },
  {
    icon: CalendarDays,
    title: "Halloween",
    period: "Septembre — Novembre",
    description:
      "Décors spéciaux, attractions nocturnes. On vous ramène même tard le soir.",
  },
  {
    icon: Snowflake,
    title: "Noël",
    period: "Novembre — Janvier",
    description:
      "Marchés de Noël, patinoire, magie hivernale. Idéal en famille.",
  },
  {
    icon: Droplets,
    title: "Rulantica",
    period: "Toute l'année",
    description:
      "Parc aquatique couvert, ouvert même en hiver. Même transfert, même service.",
  },
];

const checklist = [
  "Réservez la veille pour garantir la disponibilité",
  "Trajet international : aucune formalité, carte d'identité suffit (espace Schengen)",
  "Siège auto et rehausseur disponibles sur demande",
  "Paiement CB accepté",
  "Possibilité aller simple ou aller-retour",
  "À 3 ou 4, le taxi est souvent plus avantageux que le train par personne",
  "Transfert Rulantica au même tarif",
];

const faqs = [
  {
    question: "Combien coûte un taxi de Strasbourg à Europa-Park ?",
    answer:
      "Le prix dépend de votre adresse de départ exacte. Utilisez notre formulaire de réservation en ligne pour obtenir un devis instantané, ou appelez-nous pour un devis gratuit.",
  },
  {
    question:
      "Combien de temps dure le trajet Strasbourg — Europa-Park en taxi ?",
    answer:
      "Environ 45 minutes par l'autoroute A35 puis A5 côté allemand. Le trajet est direct, sans correspondance ni attente.",
  },
  {
    question: "Pouvez-vous faire un aller-retour dans la journée ?",
    answer:
      "Oui, nous vous déposons le matin à l'ouverture et revenons vous chercher à l'heure de votre choix. Contactez-nous pour organiser votre journée.",
  },
  {
    question: "Faut-il un passeport pour aller à Europa-Park ?",
    answer:
      "Non, une carte d'identité suffit. Europa-Park est en Allemagne dans l'espace Schengen, il n'y a pas de contrôle aux frontières.",
  },
  {
    question: "Le taxi est-il plus avantageux que le train pour Europa-Park ?",
    answer:
      "En famille ou en groupe (3-4 personnes), le taxi revient souvent au même prix par personne que le train, avec l'avantage du porte-à-porte, du grand coffre pour les poussettes et de la flexibilité horaire.",
  },
];

export default function EuropaParkPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Transfert Taxi Strasbourg Europa-Park",
          description:
            "Transfert taxi direct Strasbourg vers Europa-Park (Rust, Allemagne) en 45 min. Véhicule spacieux idéal familles. Aller-retour possible.",
          serviceType: "Theme Park Transfer",
          areaServed: "Strasbourg, Europa-Park Rust",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Europa-Park", url: "/europapark" },
        ]}
      />

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Transfert Europa-Park
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Taxi Strasbourg —{" "}
            <span className="text-gold-gradient">Europa-Park</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Taxi 02 Strasbourg vous emmène directement à Europa-Park, le plus
            grand parc d&apos;attractions d&apos;Europe, en seulement 45 minutes.
            Situé à Rust en Allemagne, à une cinquantaine de kilomètres de
            Strasbourg, Europa-Park accueille chaque année des millions de
            visiteurs. Plutôt que de gérer les correspondances en train ou le
            stress du stationnement, optez pour le confort d&apos;un transfert
            taxi porte-à-porte. Notre véhicule spacieux est idéal pour les
            familles : poussettes, sacs, glacières, tout rentre dans le coffre.
            Siège auto enfant disponible sur demande. Nous vous déposons devant
            l&apos;entrée du parc et revenons vous chercher à l&apos;heure
            convenue.
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Infos pratiques */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-premium text-center">
              <MapPin className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Distance</h3>
              <p className="text-gray-600 text-sm">
                ~50 km, environ 45 min par l&apos;autoroute A35 puis A5
              </p>
            </div>
            <div className="card-premium text-center">
              <Luggage className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">
                Grand coffre
              </h3>
              <p className="text-gray-600 text-sm">
                Poussettes, bagages, sièges enfants, glacières — tout rentre
              </p>
            </div>
            <div className="card-premium text-center">
              <CheckCircle className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">
                Devis gratuit
              </h3>
              <p className="text-gray-600 text-sm">
                Simulez votre trajet en ligne ou appelez pour un prix instantané
              </p>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Pourquoi choisir le taxi pour Europa-Park ?
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((a) => (
              <div key={a.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                    <a.icon className="w-6 h-6 text-gold-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {a.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Saisons */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Europa-Park toute l&apos;année
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saisons.map((s) => (
              <div key={s.title} className="card-premium text-center">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="text-gold-400 text-sm font-medium mb-3">
                  {s.period}
                </p>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bon à savoir */}
        <section className="mb-16">
          <div className="card-premium max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Bon à savoir
            </h2>
            <ul className="space-y-3">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
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
            <Globe className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Prêt pour Europa-Park ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Réservez votre transfert avec Taxi 02 Strasbourg et profitez du
              parc sans stress.
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
