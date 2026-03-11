import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Luggage,
  Users,
  Car,
  Train,
  CalendarDays,
  Snowflake,
  Sun,
  Droplets,
  CheckCircle,
  Globe,
  Baby,
  CreditCard,
  Ticket,
  CircleParking,
  Star,
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
  title:
    "Taxi Strasbourg Europa-Park — Transfert direct 45 min | Taxi 02 Strasbourg",
  description:
    "Transfert taxi Strasbourg Europa-Park en 45 min. Vehicule grand coffre ideal pour les familles. Depose devant l'entree, aller-retour possible. Taxi 02 Strasbourg.",
};

const infos = [
  {
    icon: MapPin,
    title: "Distance & Duree",
    description: "~50 km, environ 45 min par l'autoroute A35 puis A5 (Allemagne).",
  },
  {
    icon: Ticket,
    title: "Devis gratuit",
    description:
      "Simulez votre trajet en ligne via notre module de reservation pour obtenir un prix instantane.",
  },
  {
    icon: Luggage,
    title: "Grand coffre",
    description:
      "Vehicule spacieux : bagages, poussettes, sieges enfants, glacieres — tout rentre.",
  },
];

const avantages = [
  {
    icon: Car,
    title: "Chauffeur qui connait la route",
    description:
      "Trajet direct par l'A35 puis A5 cote allemand, sans stress ni GPS.",
  },
  {
    icon: MapPin,
    title: "Depose devant l'entree",
    description:
      "On vous depose directement devant l'entree du parc, pas de navette ni de marche.",
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description:
      "Depart tot le matin pour l'ouverture, retour tard le soir apres la fermeture.",
  },
  {
    icon: Luggage,
    title: "Grand coffre familles",
    description:
      "Poussettes, sacs, glacieres, souvenirs au retour — tout rentre dans le coffre.",
  },
  {
    icon: Baby,
    title: "Siege auto enfant",
    description:
      "Siege auto disponible sur demande. Precisez l'age de votre enfant a la reservation.",
  },
  {
    icon: CircleParking,
    title: "Zero stress parking",
    description:
      "Pas de parking a chercher ni a payer (le parking Europa-Park coute 8 euros/jour).",
  },
  {
    icon: ArrowRight,
    title: "Service aller-retour",
    description:
      "On revient vous chercher a l'heure convenue. Profitez du parc sans contrainte.",
  },
  {
    icon: Droplets,
    title: "Transfert Rulantica",
    description:
      "Le parc aquatique Rulantica est juste a cote. Meme transfert, meme service.",
  },
];

const saisons = [
  {
    icon: Sun,
    title: "Printemps / Ete",
    period: "Mars - Septembre",
    description:
      "Saison principale, toutes les attractions ouvertes. Reservez tot le matin pour eviter la foule.",
  },
  {
    icon: CalendarDays,
    title: "Halloween",
    period: "Septembre - Novembre",
    description:
      "Decors speciaux, attractions nocturnes. On vous ramene meme tard le soir.",
  },
  {
    icon: Snowflake,
    title: "Noel",
    period: "Novembre - Janvier",
    description:
      "Marches de Noel, patinoire, magie hivernale. Ideal en famille.",
  },
  {
    icon: Droplets,
    title: "Rulantica",
    period: "Toute l'annee",
    description:
      "Parc aquatique couvert, ouvert meme en hiver. Transfert inclus.",
  },
];

const destinations = [
  { name: "Europa-Park", detail: "Parc d'attractions (Rust, Allemagne)" },
  { name: "Rulantica", detail: "Parc aquatique" },
  { name: "Europa-Park Hotel Resort", detail: "Hotels du parc" },
  { name: "Gare de Ringsheim", detail: "Gare la plus proche" },
  { name: "Yullbe", detail: "Experience VR a Europa-Park" },
];

const checklist = [
  "Reservez la veille pour garantir la disponibilite",
  "Trajet international : aucune formalite, carte d'identite suffit (espace Schengen)",
  "Nous acceptons les poussettes et sieges enfants",
  "Paiement CB accepte",
  "Simulez votre prix en ligne via notre module de reservation",
  "Possibilite aller simple ou aller-retour",
  "Conseil : partagez le taxi a 3 ou 4, c'est tres avantageux !",
];

const faqs = [
  {
    question:
      "Combien coute un taxi de Strasbourg a Europa-Park ?",
    answer:
      "Le prix depend de votre adresse de depart exacte. Utilisez notre module de reservation en ligne pour obtenir un devis instantane, ou appelez-nous pour un devis gratuit.",
  },
  {
    question:
      "Combien de temps dure le trajet Strasbourg — Europa-Park en taxi ?",
    answer:
      "Environ 45 minutes par l'autoroute A35 puis A5 cote allemand. Le trajet est direct, sans correspondance ni attente.",
  },
  {
    question: "Pouvez-vous faire un aller-retour dans la journee ?",
    answer:
      "Oui, nous vous deposons le matin a l'ouverture et revenons vous chercher a l'heure de votre choix. Contactez-nous pour organiser votre journee.",
  },
  {
    question: "Faut-il un passeport pour aller a Europa-Park ?",
    answer:
      "Non, une carte d'identite suffit. Europa-Park est en Allemagne dans l'espace Schengen, il n'y a pas de controle aux frontieres.",
  },
  {
    question: "Acceptez-vous les sieges auto pour enfants ?",
    answer:
      "Oui, nous fournissons un siege auto sur demande. Precisez l'age de votre enfant lors de la reservation.",
  },
  {
    question: "Faites-vous aussi le transfert vers Rulantica ?",
    answer:
      "Oui, Rulantica est situe juste a cote d'Europa-Park a Rust. Le transfert est au meme tarif.",
  },
  {
    question:
      "Le taxi est-il plus avantageux que le train pour Europa-Park ?",
    answer:
      "En famille ou en groupe (3-4 personnes), le taxi revient souvent au meme prix par personne que le train, avec l'avantage du porte-a-porte, du grand coffre pour les poussettes et bagages, et de la flexibilite horaire.",
  },
];

export default function TransfertEuropaParkPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Transfert Taxi Strasbourg Europa-Park",
          description:
            "Transfert taxi direct Strasbourg vers Europa-Park (Rust, Allemagne) en 45 min. Vehicule grand coffre ideal pour les familles. Aller-retour possible.",
          serviceType: "Theme Park Transfer",
          areaServed: "Strasbourg, Europa-Park Rust",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          {
            name: "Transfert Europa-Park",
            url: "/services/transfert-europapark",
          },
        ]}
      />

      {/* Hero */}
      <div className="relative mb-16">
        <div className="absolute inset-0">
          <Image
            src="/images/europapark.jpg"
            alt="Transfert taxi Strasbourg Europa-Park — Taxi 02 Strasbourg"
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
              <Globe className="w-4 h-4" />
              Transfert International
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Taxi Strasbourg —{" "}
              <span className="text-white">Europa-Park</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Transfert direct vers le plus grand parc d&apos;attractions
              d&apos;Europe. Vehicule grand coffre, ideal pour les familles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                Reserver un transfert
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
        {/* Section 1 — Infos pratiques */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Infos pratiques
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infos.map((info) => (
              <div key={info.title} className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {info.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 — Pourquoi choisir un taxi */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Pourquoi choisir un taxi pour Europa-Park ?
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Section 3 — Comparatif Taxi vs Train vs Voiture */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Comment aller a Europa-Park depuis Strasbourg ?
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Taxi */}
            <div className="card-premium border-gold-400/40 relative">
              <div className="absolute -top-3 left-4">
                <span className="bg-gold-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Recommande
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                  <Car className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Taxi (Taxi 02)
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>45 min</strong> porte a porte
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Confort <strong>5/5</strong> — depose devant l&apos;entree
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Luggage className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Grand coffre, poussettes, tout rentre
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Baby className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Siege auto fourni sur demande
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Zero stress</strong> — on s&apos;occupe de tout
                  </span>
                </li>
              </ul>
              <Link
                href="/reservation"
                className="btn-gold w-full inline-flex items-center justify-center gap-2 mt-6"
              >
                Simuler le prix
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Train + Bus */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Train className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Train + Bus
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>1h30-2h</strong> (TER Offenburg + bus 7277)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Confort 3/5 — correspondances, attentes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Luggage className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Limite, difficile avec poussette
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Baby className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Pas de siege auto
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Horaires a respecter, derniere connexion tot
                  </span>
                </li>
              </ul>
            </div>

            {/* Voiture */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Car className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Voiture personnelle
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>45 min</strong> de conduite
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Confort 4/5 — mais il faut conduire
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Luggage className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Selon votre vehicule
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Baby className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Votre propre siege auto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleParking className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Parking 8 euros/jour + autoroute Allemagne
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 — Saisons Europa-Park */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Europa-Park toute l&apos;annee
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

        {/* Section 5 — Destinations couvertes */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Destinations couvertes
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {destinations.map((d) => (
              <div
                key={d.name}
                className="card-premium flex items-center gap-3 py-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {d.name}
                  </p>
                  <p className="text-gray-500 text-xs">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — Bon a savoir */}
        <section className="mb-16">
          <div className="card-premium max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Bon a savoir
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

        {/* Section 7 — FAQ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Questions frequentes
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

        {/* Section 8 — CTA final */}
        <section className="mb-16 text-center">
          <div className="card-premium inline-block bg-gradient-to-br from-gold-400/10 to-transparent border-gold-400/40 py-8 px-8 sm:px-12">
            <Globe className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Pret pour Europa-Park ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Reservez votre transfert et profitez du parc sans stress.
              Vehicule grand coffre, siege enfant, aller-retour possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                Simuler le prix
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="btn-gold-outline inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler
              </a>
            </div>
          </div>
        </section>

        {/* Section 9 — Liens internes */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Autres services
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/services/transfert-aeroport",
                title: "Transfert Aeroport",
                desc: "Navette vers Strasbourg-Entzheim, Bale-Mulhouse, Francfort.",
              },
              {
                href: "/services/transfert-gare",
                title: "Transfert Gare",
                desc: "Transport confortable vers et depuis la gare de Strasbourg.",
              },
              {
                href: "/services/transport-enfants",
                title: "Transport Enfants",
                desc: "Transport securise avec siege auto. Ideal pour les familles.",
              },
              {
                href: "/trajets/taxi-strasbourg-europapark",
                title: "Trajet Strasbourg — Europa-Park",
                desc: "Details du trajet, itineraire et infos pratiques.",
              },
              {
                href: "/zones/strasbourg",
                title: "Zone Strasbourg",
                desc: "Tous nos services taxi au depart de Strasbourg.",
              },
              {
                href: "/reservation",
                title: "Reserver en ligne",
                desc: "Simulez votre prix et reservez votre transfert en 2 min.",
              },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="block group">
                <div className="card-premium py-4">
                  <h3 className="font-semibold text-foreground group-hover:text-gold-400 transition-colors mb-1">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.desc}</p>
                  <span className="text-gold-400 text-sm font-medium flex items-center gap-1 mt-2">
                    En savoir plus
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
