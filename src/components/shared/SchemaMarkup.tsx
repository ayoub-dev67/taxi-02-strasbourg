import { siteConfig } from "@/config/site";

const baseUrl = "https://www.taxi-02-strasbourg.fr";

// Schema LocalBusiness + TaxiService combiné avec PriceSpecification
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": `${baseUrl}/#business`,
  name: siteConfig.name,
  description: "Taxi conventionné CPAM à Strasbourg. Transport médical, transferts aéroport et gare, longue distance, Europa-Park. Disponible 24h/24, 7j/7.",
  url: baseUrl,
  telephone: "+33753145371",
  email: siteConfig.contact.email,
  image: `${baseUrl}/images/vehicule/vehicule-parlement-europeen.png`,
  logo: `${baseUrl}/images/logo.svg`,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strasbourg",
    addressLocality: siteConfig.location.city,
    postalCode: "67000",
    addressCountry: "FR",
    addressRegion: siteConfig.location.region,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.5734,
    longitude: 7.7521,
  },
  hasMap: "https://www.openstreetmap.org/?mlat=48.5734&mlon=7.7521#map=14/48.5734/7.7521",
  areaServed: [
    { "@type": "City", name: "Strasbourg" },
    { "@type": "City", name: "Schiltigheim" },
    { "@type": "City", name: "Bischheim" },
    { "@type": "City", name: "Illkirch-Graffenstaden" },
    { "@type": "City", name: "Hœnheim" },
    { "@type": "City", name: "Lingolsheim" },
    { "@type": "City", name: "Haguenau" },
    { "@type": "City", name: "Colmar" },
    { "@type": "AdministrativeArea", name: "Eurométropole de Strasbourg" },
    { "@type": "AdministrativeArea", name: "Bas-Rhin" },
    { "@type": "AdministrativeArea", name: "Alsace" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Coffre",
      value: "Grand coffre",
    },
    {
      "@type": "PropertyValue",
      name: "Transport scolaire",
      value: "Disponible",
    },
    {
      "@type": "PropertyValue",
      name: "Toutes distances",
      value: "France et international",
    },
    {
      "@type": "PropertyValue",
      name: "Poussettes",
      value: "Acceptées",
    },
  ],
  sameAs: [`https://wa.me/${siteConfig.contact.whatsapp.replace("+", "")}`],
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mohamed A." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Chauffeur ponctuel et très professionnel. Ma prise en charge CPAM s'est faite sans aucune démarche de ma part.",
      datePublished: "2025-01-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Nathalie R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Taxi 02 m'a accompagnée à l'aéroport de Bâle-Mulhouse à 4h du matin. Ponctuel, véhicule impeccable.",
      datePublished: "2025-02-10",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Karim B." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Excellent service, réponse rapide au téléphone et départ immédiat. Le véhicule est récent et très propre.",
      datePublished: "2025-03-05",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sophie L." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Accompagnement au CHU de Strasbourg. Le chauffeur était patient, aidant et très humain.",
      datePublished: "2025-01-22",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rachid M." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Trajet Strasbourg–Paris en toute sérénité. Prix correct, conduite douce, ponctuel à la minute.",
      datePublished: "2025-04-03",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Claire D." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Transfert aller-retour pour EuropaPark avec mes enfants. Super expérience, chauffeur sympa et à l'heure.",
      datePublished: "2025-02-18",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de taxi",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transport médical conventionné CPAM",
          description: "Transport VSL conventionné CPAM pour rendez-vous médicaux, dialyse, chimiothérapie",
          serviceType: "Medical Transport",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: "Prise en charge CPAM 65%, reste à charge selon mutuelle",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transfert Aéroport Strasbourg-Entzheim",
          description: "Navette taxi vers l'aéroport de Strasbourg (SXB)",
          serviceType: "Airport Transfer",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: "25",
          minPrice: "25",
          maxPrice: "35",
          description: "Prix forfaitaire depuis le centre-ville",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transfert EuroAirport Bâle-Mulhouse",
          description: "Navette taxi vers EuroAirport (BSL/MLH)",
          serviceType: "Airport Transfer",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: "180",
          minPrice: "180",
          maxPrice: "220",
          description: "Prix forfaitaire depuis Strasbourg",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transfert Gare de Strasbourg",
          description: "Transport vers la Gare de Strasbourg TGV/TER/ICE",
          serviceType: "Train Station Transfer",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transport scolaire et d'enfants",
          description: "Transport scolaire et familial sécurisé, véhicule grand coffre pour poussettes, siège auto fourni",
          serviceType: "Child Transport",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Service Entreprise",
          description: "Compte dédié avec facturation mensuelle pour professionnels",
          serviceType: "Corporate Transport",
        },
      },
    ],
  },
};

// Type for FAQ items
export interface FAQItem {
  question: string;
  answer: string;
}

// Helper function to generate FAQ schema from items
export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Schema FAQ pour la page FAQ
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment puis-je réserver un taxi à Strasbourg ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez réserver par téléphone, via WhatsApp, ou directement sur notre site web via le formulaire de réservation. Réponse garantie sous 5 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un taxi conventionné CPAM ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un taxi conventionné est agréé par la CPAM pour le transport de patients. Les frais sont pris en charge à 65% par l'Assurance Maladie, et le reste par votre mutuelle si vous en avez une. Une prescription médicale de transport est nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte un taxi vers l'aéroport de Strasbourg ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le trajet depuis le centre de Strasbourg vers l'aéroport Entzheim (SXB) dépend de votre adresse de départ. Contactez Taxi 02 Strasbourg pour un devis précis.",
      },
    },
    {
      "@type": "Question",
      name: "Quels moyens de paiement acceptez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous acceptons les espèces, les cartes bancaires (Visa, Mastercard), et les virements bancaires pour les clients entreprise avec facturation mensuelle.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des sièges enfants ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous fournissons gratuitement des sièges bébé et rehausseurs adaptés à l'âge de votre enfant. Précisez-le lors de votre réservation pour que le véhicule soit équipé.",
      },
    },
  ],
};

// Schema WebSite pour le site
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  url: baseUrl,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${baseUrl}/#business` },
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${baseUrl}/recherche?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// Schema BreadcrumbList helper
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// Schema Service helper pour les pages de service
export function generateServiceSchema(service: {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.serviceType,
    name: service.name,
    description: service.description,
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: service.areaServed || "Strasbourg, Eurométropole de Strasbourg, Alsace",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: baseUrl,
      servicePhone: siteConfig.contact.phone,
    },
  };
}

interface SchemaMarkupProps {
  includeFaq?: boolean;
  customFaq?: FAQItem[];
  breadcrumbs?: { name: string; url: string }[];
  service?: {
    name: string;
    description: string;
    serviceType: string;
    areaServed?: string;
  };
}

export function SchemaMarkup({ includeFaq = false, customFaq, breadcrumbs, service }: SchemaMarkupProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemas: Record<string, any>[] = [localBusinessSchema, websiteSchema];

  if (includeFaq) {
    schemas.push(faqSchema);
  }

  if (customFaq && customFaq.length > 0) {
    schemas.push(generateFAQSchema(customFaq));
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  if (service) {
    schemas.push(generateServiceSchema(service));
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default SchemaMarkup;
