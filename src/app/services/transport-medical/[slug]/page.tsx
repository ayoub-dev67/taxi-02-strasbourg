import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Building2,
  CheckCircle,
  AlertCircle,
  Navigation,
  Stethoscope,
} from "lucide-react";
import {
  etablissementsSante,
  getEtablissementBySlug,
  getRelatedEtablissements,
} from "@/config/etablissements-sante";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Générer les pages statiques pour tous les établissements
export async function generateStaticParams() {
  return etablissementsSante.map((etab) => ({
    slug: etab.slug,
  }));
}

// Générer les métadonnées dynamiques
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const etablissement = getEtablissementBySlug(slug);

  if (!etablissement) {
    return {
      title: "Établissement non trouvé",
    };
  }

  return {
    title: `Taxi Conventionné ${etablissement.shortName}`,
    description: etablissement.metaDescription,
    openGraph: {
      title: `Taxi Conventionné ${etablissement.shortName} | ${siteConfig.name}`,
      description: etablissement.metaDescription,
    },
  };
}

export default async function EtablissementPage({ params }: PageProps) {
  const { slug } = await params;
  const etablissement = getEtablissementBySlug(slug);

  if (!etablissement) {
    notFound();
  }

  // Récupérer les établissements proches pour le maillage SEO
  const relatedEtablissements = getRelatedEtablissements(slug, 4);

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
        "name": "Services",
        "item": `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Taxi Conventionné",
        "item": `${baseUrl}/taxi-conventionne`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `${etablissement.shortName}`,
        "item": `${baseUrl}/services/transport-medical/${etablissement.slug}`,
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
        "name": `Comment réserver un taxi conventionné vers ${etablissement.shortName} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pour réserver un transport médical vers ${etablissement.shortName}, appelez-nous au ${siteConfig.contact.phone} ou réservez en ligne. Nous sommes conventionnés CPAM avec tiers payant, aucune avance de frais nécessaire sur prescription médicale.`,
        },
      },
      {
        "@type": "Question",
        "name": `Quel est le temps de trajet depuis Strasbourg vers ${etablissement.shortName} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Le trajet depuis Strasbourg vers ${etablissement.shortName} prend environ ${etablissement.distanceFromStrasbourg.duration} pour ${etablissement.distanceFromStrasbourg.km} km. Nous garantissons votre ponctualité pour vos rendez-vous médicaux.`,
        },
      },
      {
        "@type": "Question",
        "name": `Le transport médical vers ${etablissement.shortName} est-il remboursé par la CPAM ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Oui, sur prescription médicale, le transport vers ${etablissement.shortName} est pris en charge à 65% par l'Assurance Maladie (100% en ALD). Le reste est couvert par votre mutuelle. Nous pratiquons le tiers payant : aucune avance de frais.`,
        },
      },
      {
        "@type": "Question",
        "name": `Proposez-vous le tiers payant pour ${etablissement.shortName} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Oui, en tant que taxi conventionné CPAM, nous pratiquons le tiers payant intégral pour les transports vers ${etablissement.shortName}. Vous n'avez aucun frais à avancer, tout est directement facturé à votre caisse d'assurance maladie et votre mutuelle.`,
        },
      },
      {
        "@type": "Question",
        "name": `Quels documents faut-il pour un transport CPAM vers ${etablissement.shortName} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pour un transport conventionné vers ${etablissement.shortName}, vous devez présenter : votre prescription médicale de transport, votre carte Vitale, et votre attestation de mutuelle. Le chauffeur s'occupe de toutes les formalités administratives.`,
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
            <Link href="/services" className="hover:text-gold-400">
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link href="/taxi-conventionne" className="hover:text-gold-400">
              Taxi Conventionné
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold-400">{etablissement.shortName}</span>
          </nav>
        </div>

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <Stethoscope className="w-4 h-4" />
            Transport Médical CPAM
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Taxi Conventionné{" "}
            <span className="text-gold-gradient">{etablissement.shortName}</span>
          </h1>
          <p className="text-gray-600 text-lg mb-4">{etablissement.description}</p>
          <div className="inline-flex items-center gap-2 text-gray-600 mb-8">
            <MapPin className="w-4 h-4" />
            <span>
              {etablissement.address}, {etablissement.postalCode}{" "}
              {etablissement.city}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver un transport
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
        {/* Photo de l'établissement */}
        {etablissement.image && (
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={etablissement.image}
                  alt={`${etablissement.name} — transport médical CPAM`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-white text-2xl font-heading font-bold mb-2">
                    {etablissement.name}
                  </h2>
                  <p className="text-white/90 text-sm">
                    {etablissement.address}, {etablissement.city}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Info pratiques */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Distance */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Distance depuis Strasbourg
                  </h3>
                  <div className="flex items-center gap-2 text-gold-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">
                      {etablissement.distanceFromStrasbourg.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {etablissement.distanceFromStrasbourg.km} km
                  </p>
                </div>
              </div>
            </div>

            {/* Type */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Type d'établissement
                  </h3>
                  <p className="text-gray-700">{etablissement.type}</p>
                  <p className="text-gray-600 text-sm mt-1">
                    {etablissement.city} ({etablissement.postalCode})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prise en charge CPAM */}
        <section className="mb-12">
          <div className="card-premium max-w-3xl mx-auto bg-gold-50/50 border-gold-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Prise en charge CPAM — Transport médical conventionné
                </h2>
                <p className="text-gray-700 mb-4">
                  Transport conventionné vers {etablissement.shortName} avec prise
                  en charge par la Sécurité Sociale sur prescription médicale.
                  <strong> Pas d'avance de frais</strong> grâce au tiers payant.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Prise en charge à 65% par l'Assurance Maladie (100% en ALD)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Reste à charge pris en charge par votre mutuelle
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Tiers payant : aucune avance de frais</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Réservation simple par téléphone ou en ligne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services de l'établissement */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Services disponibles à {etablissement.shortName}
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {etablissement.services.map((service, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spécialités (si disponibles) */}
        {etablissement.specialites && etablissement.specialites.length > 0 && (
          <section className="mb-12">
            <div className="card-premium max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Spécialités et pôles d'excellence
              </h2>
              <ul className="space-y-2">
                {etablissement.specialites.map((specialite, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{specialite}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Comment ça marche */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Comment ça marche ?
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                number: "1",
                title: "Prescription médicale",
                description:
                  "Votre médecin vous prescrit un transport médical (bon de transport)",
              },
              {
                number: "2",
                title: "Réservation",
                description:
                  "Contactez-nous par téléphone ou en ligne pour réserver votre trajet",
              },
              {
                number: "3",
                title: "Prise en charge",
                description:
                  "Nous vous prenons en charge à l'heure convenue et vous déposons à l'établissement",
              },
              {
                number: "4",
                title: "Remboursement",
                description:
                  "La CPAM rembourse directement via tiers payant — aucune avance de frais",
              },
            ].map((step) => (
              <div key={step.number} className="card-premium text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-400 text-white flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Infos pratiques accès */}
        {(etablissement.parkingInfo || etablissement.accessInfo) && (
          <section className="mb-12">
            <div className="card-premium max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Informations pratiques
              </h2>
              <div className="space-y-4">
                {etablissement.accessInfo && (
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Accès</p>
                      <p className="text-gray-700 text-sm">
                        {etablissement.accessInfo}
                      </p>
                    </div>
                  </div>
                )}
                {etablissement.parkingInfo && (
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        Parking et dépose
                      </p>
                      <p className="text-gray-700 text-sm">
                        {etablissement.parkingInfo}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Adresse</p>
                    <p className="text-gray-700 text-sm">
                      {etablissement.address}
                      <br />
                      {etablissement.postalCode} {etablissement.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Autres établissements - Maillage interne SEO */}
        {relatedEtablissements.length > 0 && (
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Autres établissements de santé desservis
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous assurons également le transport médical CPAM vers ces établissements
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {relatedEtablissements.map((etab) => (
                <Link
                  key={etab.slug}
                  href={`/services/transport-medical/${etab.slug}`}
                  className="card-premium group hover:border-gold-400/50 transition-all text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-gold-400 transition-colors mb-2">
                    {etab.shortName}
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs bg-gold-400/10 text-gold-400 rounded-full mb-2">
                    {etab.type}
                  </span>
                  <p className="text-gray-600 text-sm">
                    {etab.city}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center">
          <div className="card-premium inline-block bg-gradient-to-br from-gold-50 to-transparent border-gold-300 py-8 px-8 sm:px-12">
            <Stethoscope className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Besoin d'un transport vers {etablissement.shortName} ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Réservez votre transport médical conventionné CPAM dès maintenant.
              Réponse rapide garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                Réserver en ligne
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="btn-gold-outline inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appelez-nous
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
