import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Route,
  Euro,
  CheckCircle,
  Car,
} from "lucide-react";
import { trajets, getTrajetBySlug } from "@/config/trajets";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Générer les pages statiques pour tous les trajets
export async function generateStaticParams() {
  return trajets.map((trajet) => ({
    slug: trajet.slug,
  }));
}

// Générer les métadonnées dynamiques
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trajet = getTrajetBySlug(slug);

  if (!trajet) {
    return {
      title: "Trajet non trouvé",
    };
  }

  return {
    title: trajet.title,
    description: trajet.metaDescription,
    openGraph: {
      title: `${trajet.title} | ${siteConfig.name}`,
      description: trajet.metaDescription,
    },
  };
}

export default async function TrajetPage({ params }: PageProps) {
  const { slug } = await params;
  const trajet = getTrajetBySlug(slug);

  if (!trajet) {
    notFound();
  }

  const baseUrl = "https://www.taxi-02-strasbourg.fr";

  // Schema BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Trajets populaires",
        "item": `${baseUrl}/trajets`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": trajet.title,
        "item": `${baseUrl}/trajets/${trajet.slug}`,
      },
    ],
  };

  // Schema FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Quel est le prix d'un taxi ${trajet.from} vers ${trajet.to} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Le tarif indicatif pour un taxi ${trajet.from} vers ${trajet.to} est de ${trajet.priceRange.min}€ à ${trajet.priceRange.max}€. Le prix exact dépend de l'heure, du trafic et du point de prise en charge précis. Contactez-nous pour un devis personnalisé.`,
        },
      },
      {
        "@type": "Question",
        "name": `Combien de temps dure le trajet ${trajet.from} vers ${trajet.to} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Le trajet ${trajet.from} vers ${trajet.to} dure environ ${trajet.duration} pour une distance de ${trajet.distance} km. La durée peut varier selon les conditions de circulation.`,
        },
      },
      {
        "@type": "Question",
        "name": `Comment réserver un taxi pour ${trajet.to} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pour réserver un taxi vers ${trajet.to}, appelez-nous au ${siteConfig.contact.phone} ou réservez en ligne 24h/24. Nous confirmons immédiatement votre réservation et garantissons la ponctualité.`,
        },
      },
      {
        "@type": "Question",
        "name": `Les bagages sont-ils inclus dans le prix vers ${trajet.to} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Oui, le transport des bagages est inclus dans le tarif. Pour les bagages volumineux ou nombreux, signalez-le lors de la réservation pour que nous prévoyions un véhicule adapté.`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gold-400">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/trajets" className="hover:text-gold-400">
              Trajets populaires
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold-400">{trajet.to}</span>
          </nav>
        </div>

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <Route className="w-4 h-4" />
            Trajet populaire
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {trajet.title.replace("Taxi ", "Taxi ").split("→")[0]}
            <span className="text-gold-gradient">
              → {trajet.title.split("→")[1]}
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">{trajet.description}</p>

          {/* Stats rapides */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Route className="w-5 h-5 text-gold-400" />
              <span className="text-foreground font-medium">{trajet.distance} km</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold-400" />
              <span className="text-foreground font-medium">{trajet.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Euro className="w-5 h-5 text-gold-400" />
              <span className="text-foreground font-medium">
                {trajet.priceRange.min}€ - {trajet.priceRange.max}€
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver ce trajet
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="btn-gold-outline inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Détails du trajet */}
            <div className="card-premium">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                À propos de ce trajet
              </h2>
              <p className="text-gray-700 leading-relaxed">{trajet.details}</p>
            </div>

            {/* Itinéraire */}
            <div className="card-premium">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Itinéraire
              </h2>
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-0.5 h-16 bg-gold-400/30 my-2" />
                  <div className="w-10 h-10 rounded-full bg-gold-50 border-2 border-gold-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                </div>
                <div className="flex-1 space-y-12">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Départ</p>
                    <p className="text-foreground font-medium text-lg">{trajet.from}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Arrivée</p>
                    <p className="text-foreground font-medium text-lg">{trajet.to}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="card-premium">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Les avantages Taxi 02 Strasbourg
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trajet.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Prix */}
              <div className="card-premium bg-gradient-to-br from-gold-50 to-transparent border-gold-300">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Tarif indicatif
                </h3>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gold-400">
                    {trajet.priceRange.min}€
                    <span className="text-2xl text-gray-600"> - </span>
                    {trajet.priceRange.max}€
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Prix indicatif, tarif exact sur demande
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    Distance : {trajet.distance} km
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    Durée : {trajet.duration}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-400" />
                    Bagages inclus
                  </li>
                </ul>
                <Link
                  href="/reservation"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  Réserver
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Contact */}
              <div className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-6 h-6 text-gold-400" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Réservation immédiate
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Appelez-nous pour réserver ce trajet ou obtenir un devis précis.
                </p>
                <a
                  href={`tel:${siteConfig.contact.phoneLink}`}
                  className="btn-gold-outline w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
