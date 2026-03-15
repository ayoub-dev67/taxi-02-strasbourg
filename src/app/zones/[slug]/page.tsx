import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Train,
  Plane,
  Building2,
  CheckCircle,
} from "lucide-react";
import { zones, getZoneBySlug, getRelatedZones } from "@/config/zones";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Générer les pages statiques pour toutes les zones
export async function generateStaticParams() {
  return zones.map((zone) => ({
    slug: zone.slug,
  }));
}

// Générer les métadonnées dynamiques
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);

  if (!zone) {
    return {
      title: "Zone non trouvée",
    };
  }

  return {
    title: `Taxi ${zone.name}`,
    description: zone.metaDescription,
    openGraph: {
      title: `Taxi ${zone.name} | ${siteConfig.name}`,
      description: zone.metaDescription,
    },
  };
}

export default async function ZonePage({ params }: PageProps) {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);

  if (!zone) {
    notFound();
  }

  // Récupérer les zones proches pour le maillage SEO
  const relatedZones = getRelatedZones(slug, 6);

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
        "name": "Zones desservies",
        "item": `${baseUrl}/zones`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Taxi ${zone.name}`,
        "item": `${baseUrl}/zones/${zone.slug}`,
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
        "name": `Comment réserver un taxi à ${zone.name} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pour réserver un taxi à ${zone.name}, vous pouvez appeler directement au ${siteConfig.contact.phone} ou réserver en ligne 24h/24 via notre formulaire. Prise en charge rapide garantie.`,
        },
      },
      {
        "@type": "Question",
        "name": `Quel est le tarif d'un taxi depuis ${zone.name} vers la gare de Strasbourg ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Le trajet depuis ${zone.name} vers la gare de Strasbourg prend environ ${zone.distances.gare.duration} (${zone.distances.gare.km} km). Le tarif est calculé au compteur selon le tarif réglementé. Contactez-nous pour un devis précis.`,
        },
      },
      {
        "@type": "Question",
        "name": `Proposez-vous du transport médical conventionné CPAM depuis ${zone.name} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Oui, nous sommes taxi conventionné CPAM. Nous assurons les transports médicaux depuis ${zone.name} vers tous les établissements de santé avec tiers payant. Aucune avance de frais sur prescription médicale.`,
        },
      },
      {
        "@type": "Question",
        "name": `Desservez-vous l'aéroport de Strasbourg depuis ${zone.name} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Oui, nous assurons les transferts vers l'aéroport Strasbourg-Entzheim depuis ${zone.name}. Le trajet dure environ ${zone.distances.aeroport.duration} (${zone.distances.aeroport.km} km). Réservation recommandée pour garantir votre ponctualité.`,
        },
      },
      {
        "@type": "Question",
        "name": `Êtes-vous disponible 24h/24 à ${zone.name} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Oui, Taxi 02 Strasbourg est disponible 24h/24 et 7j/7 à ${zone.name}, y compris les week-ends et jours fériés. Service d'urgence et transport de nuit assurés.`,
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
            <Link href="/zones" className="hover:text-gold-400">
              Zones desservies
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold-400">{zone.name}</span>
          </nav>
        </div>

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Zone desservie
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Taxi <span className="text-gold-gradient">{zone.name}</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">{zone.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver un taxi
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
        {/* Distances */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Temps de trajet depuis {zone.name}
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Centre-ville */}
            <div className="card-premium text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Centre-ville
              </h3>
              <div className="flex items-center justify-center gap-2 text-gold-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="font-medium">
                  {zone.distances.centreville.duration}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                {zone.distances.centreville.km} km
              </p>
            </div>

            {/* Gare */}
            <div className="card-premium text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center">
                <Train className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Gare de Strasbourg
              </h3>
              <div className="flex items-center justify-center gap-2 text-gold-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="font-medium">
                  {zone.distances.gare.duration}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{zone.distances.gare.km} km</p>
            </div>

            {/* Aéroport */}
            <div className="card-premium text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center">
                <Plane className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Aéroport Entzheim
              </h3>
              <div className="flex items-center justify-center gap-2 text-gold-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="font-medium">
                  {zone.distances.aeroport.duration}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                {zone.distances.aeroport.km} km
              </p>
            </div>
          </div>
        </section>

        {/* Points forts */}
        <section className="mb-12">
          <div className="card-premium max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Pourquoi choisir Taxi 02 Strasbourg à {zone.name} ?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {zone.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quartiers desservis */}
        {zone.neighborhoods && zone.neighborhoods.length > 0 && (
          <section className="mb-12">
            <div className="card-premium max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Secteurs desservis à {zone.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {zone.neighborhoods.map((neighborhood, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gold-400/10 border border-gold-400/20 rounded-full text-gold-400 text-sm"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Photo section - Véhicule */}
        <section className="mb-12">
          <div className="card-premium max-w-4xl mx-auto overflow-hidden p-0">
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src="/images/hero-bg.jpg"
                alt={`Taxi 02 Strasbourg — service taxi ${zone.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">
                  Véhicule grand coffre
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  Grand coffre, transport scolaire, toutes distances — Vos trajets à {zone.name}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Nos services à {zone.name}
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Véhicule grand coffre", href: "/reservation" },
              { label: "Transport médical CPAM", href: "/services/transport-medical" },
              { label: "Transfert aéroport", href: "/services/transfert-aeroport" },
              { label: "Transport scolaire", href: "/services/transport-enfants" },
              { label: "Toutes distances", href: "/reservation" },
              { label: "Transport de colis", href: "/services/transport-colis" },
            ].map((service) => (
              <Link
                key={service.label}
                href={service.href}
                className="card-premium text-center py-4 hover:border-gold-400/50 transition-colors"
              >
                <span className="text-gray-700 text-sm">{service.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Zones proches */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Zones proches desservies
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {getRelatedZones(zone.slug, 6).map((relatedZone) => (
              <Link
                key={relatedZone.slug}
                href={`/zones/${relatedZone.slug}`}
                className="card-premium group hover:border-gold-400/50 transition-all text-center"
              >
                <MapPin className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-gold-400 transition-colors">
                  {relatedZone.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {relatedZone.distances.centreville.duration} du centre
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Zones proches - Maillage interne SEO */}
        {relatedZones.length > 0 && (
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Autres zones desservies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez nos services de taxi dans les communes et quartiers proches de {zone.name}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {relatedZones.map((relatedZone) => (
                <Link
                  key={relatedZone.slug}
                  href={`/zones/${relatedZone.slug}`}
                  className="card-premium group hover:border-gold-400/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-gold-400 transition-colors">
                      {relatedZone.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {relatedZone.postalCode && (
                    <p className="text-gray-600 text-sm mb-2">
                      {relatedZone.postalCode}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedZone.description.substring(0, 120)}...
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center">
          <div className="card-premium inline-block bg-gradient-to-br from-gold-50 to-transparent border-gold-300 py-8 px-8 sm:px-12">
            <MapPin className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Besoin d&apos;un taxi à {zone.name} ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Réservez en ligne ou appelez-nous pour une prise en charge rapide.
            </p>
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
