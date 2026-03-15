// Configuration du site Taxi 02 Strasbourg

export const siteConfig = {
  name: "Taxi 02 Strasbourg",
  nameGoogle: "Taxi 02 Strasbourg",
  description: "Taxi conventionné CPAM à Strasbourg. Transport médical, transferts aéroport et gare, longue distance, Europa-Park. Disponible 24h/24, 7j/7.",
  url: "https://www.taxi-02-strasbourg.fr",

  // Coordonnées
  contact: {
    phone: "07 53 14 53 71",
    phoneLink: "+33753145371",
    email: "contact@taxi-02-strasbourg.fr",
    whatsapp: "33753145371",
    whatsappLink: "https://wa.me/33753145371",
  },

  // Localisation
  location: {
    city: "Strasbourg",
    region: "Grand Est",
    department: "Bas-Rhin (67)",
    country: "France",
    address: "Strasbourg, 67200",
    area: "Eurométropole de Strasbourg",
  },

  // Informations légales
  legal: {
    siret: "[À COMPLÉTER]",
    activity: "Transports de voyageurs par taxis",
  },

  // Horaires
  hours: {
    open: "24h/24",
    days: "7j/7",
    description: "Disponible tous les jours, à toute heure",
  },

  // Réseaux sociaux
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // SEO
  keywords: [
    "taxi strasbourg",
    "taxi conventionné strasbourg",
    "vsl strasbourg",
    "transport médical strasbourg",
    "taxi cpam strasbourg",
    "taxi aéroport strasbourg",
    "taxi gare strasbourg",
    "taxi longue distance strasbourg",
    "taxi europa park strasbourg",
    "navette europa park strasbourg",
    "taxi 67",
    "taxi bas-rhin",
    "taxi 02 strasbourg",
    "transport cpam strasbourg",
    "transfert euroairport strasbourg",
  ],

  // Images
  images: {
    logo: "/images/logo.svg",
    ogImage: "/images/vehicule/vehicule-parlement-europeen.png",
    hero: "/images/hero-bg.webp",
  },
};

export const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/reservation", label: "Réserver" },
  { href: "/services", label: "Services" },
  { href: "/transport-cpam", label: "Transport CPAM" },
  { href: "/aeroport-gare", label: "Aéroport & Gare" },
  { href: "/longue-distance", label: "Longue Distance" },
  { href: "/europapark", label: "Europa-Park" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export const servicesLinks = [
  { href: "/services/transport-medical", label: "Transport Médical VSL" },
  { href: "/services/transfert-aeroport", label: "Transfert Aéroport" },
  { href: "/services/transfert-gare", label: "Transfert Gare" },
  { href: "/services/transport-colis", label: "Transport Colis" },
  { href: "/services/entreprise", label: "Service Entreprise" },
  { href: "/services/transport-enfants", label: "Transport Enfants" },
  { href: "/services/transfert-europapark", label: "Transfert Europa-Park" },
];

export const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
  { href: "/cgv", label: "CGV" },
  { href: "/cookies", label: "Cookies" },
];
