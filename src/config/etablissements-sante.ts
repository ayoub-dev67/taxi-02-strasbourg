// Configuration des établissements de santé pour transport médical CPAM

export interface EtablissementSante {
  slug: string;
  name: string;
  shortName: string;
  type: "CHU" | "Clinique" | "Institut";
  address: string;
  city: string;
  postalCode: string;
  description: string;
  metaDescription: string;
  services: string[];
  keywords: string[];
  distanceFromStrasbourg: {
    km: number;
    duration: string;
  };
  parkingInfo?: string;
  accessInfo?: string;
  specialites?: string[];
  image?: string;
}

export const etablissementsSante: EtablissementSante[] = [
  {
    slug: "hopital-hautepierre",
    name: "Hôpital de Hautepierre (HUS)",
    shortName: "CHU Hautepierre",
    type: "CHU",
    address: "1 Avenue Molière",
    city: "Strasbourg",
    postalCode: "67200",
    description: "Transport médical conventionné CPAM vers l'Hôpital de Hautepierre, principal établissement des Hôpitaux Universitaires de Strasbourg. Service taxi pour consultations, urgences, hospitalisations et soins ambulatoires. Prise en charge sur prescription médicale avec tiers payant CPAM.",
    metaDescription: "Taxi conventionné CPAM Hôpital Hautepierre Strasbourg. Transport médical HUS, urgences, consultations. Tiers payant. Disponible 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Urgences 24h/24",
      "Chirurgie générale et spécialisée",
      "Oncologie et radiothérapie",
      "Cardiologie",
      "Maternité niveau 3",
      "Pédiatrie et néonatologie",
      "Neurologie",
      "Réanimation",
    ],
    keywords: [
      "taxi hôpital Hautepierre",
      "taxi conventionné Hautepierre",
      "transport médical Hautepierre",
      "taxi CHU Strasbourg",
      "taxi urgences Hautepierre",
    ],
    distanceFromStrasbourg: {
      km: 8,
      duration: "15 min",
    },
    parkingInfo: "Parking visiteurs disponible, dépose-minute devant l'entrée principale",
    accessInfo: "Entrée principale Avenue Molière, accès urgences fléché",
    specialites: [
      "Centre de traumatologie",
      "Centre de cancérologie",
      "Maternité niveau 3",
      "Service des grands brûlés",
    ],
    image: "/images/photos/hopital-hautepierre.jpg",
  },
  {
    slug: "nouvel-hopital-civil",
    name: "Nouvel Hôpital Civil (NHC)",
    shortName: "NHC",
    type: "CHU",
    address: "1 Place de l'Hôpital",
    city: "Strasbourg",
    postalCode: "67091",
    description: "Service de taxi conventionné CPAM vers le Nouvel Hôpital Civil, situé au cœur de Strasbourg. Transport médical pour consultations spécialisées, hospitalisations et examens médicaux. Prise en charge CPAM sur prescription avec tiers payant.",
    metaDescription: "Taxi conventionné CPAM Nouvel Hôpital Civil Strasbourg. Transport médical NHC, consultations. Tiers payant. Disponible 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Urgences médicales",
      "Médecine interne",
      "Neurologie",
      "Rhumatologie",
      "Pneumologie",
      "Néphrologie et dialyse",
      "Endocrinologie",
      "Hématologie",
    ],
    keywords: [
      "taxi Nouvel Hôpital Civil",
      "taxi NHC Strasbourg",
      "transport médical NHC",
      "taxi hôpital centre Strasbourg",
    ],
    distanceFromStrasbourg: {
      km: 6,
      duration: "12 min",
    },
    parkingInfo: "Parking souterrain payant, dépose-minute Place de l'Hôpital",
    accessInfo: "Centre-ville Strasbourg, proche cathédrale, accès piétonnier",
    image: "/images/photos/hopital-nhc.jpg",
  },
  {
    slug: "icans-cancerologie",
    name: "ICANS — Institut de Cancérologie Strasbourg Europe",
    shortName: "ICANS",
    type: "Institut",
    address: "17 Rue Albert Calmette",
    city: "Strasbourg",
    postalCode: "67200",
    description: "Transport médical conventionné CPAM vers l'ICANS, Institut de Cancérologie de référence. Taxi pour chimiothérapie, radiothérapie, consultations oncologiques et soins de support. Service adapté aux patients en traitement anticancéreux, prise en charge CPAM à 100%.",
    metaDescription: "Taxi conventionné ICANS Strasbourg. Transport chimiothérapie, radiothérapie, oncologie. Prise en charge CPAM 100%. Disponible 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Chimiothérapie ambulatoire",
      "Radiothérapie",
      "Consultations oncologiques",
      "Soins de support",
      "Hôpital de jour",
      "Imagerie médicale spécialisée",
    ],
    keywords: [
      "taxi ICANS",
      "transport chimiothérapie Strasbourg",
      "taxi cancérologie Strasbourg",
      "taxi Institut Cancérologie",
      "transport radiothérapie",
    ],
    distanceFromStrasbourg: {
      km: 8,
      duration: "15 min",
    },
    parkingInfo: "Parking visiteurs gratuit, dépose-minute devant l'entrée",
    accessInfo: "Proche CHU Hautepierre, accès bien fléché",
    specialites: [
      "Centre de lutte contre le cancer",
      "Chimiothérapie de jour",
      "Radiothérapie externe",
      "Soins palliatifs",
    ],
    image: "/images/photos/icans.jpg",
  },
  {
    slug: "clinique-rhena",
    name: "Clinique Rhéna",
    shortName: "Clinique Rhéna",
    type: "Clinique",
    address: "10 Rue François Epailly",
    city: "Strasbourg",
    postalCode: "67200",
    description: "Taxi conventionné CPAM vers la Clinique Rhéna, établissement privé au sud de Strasbourg. Transport médical pour chirurgie programmée, maternité, rééducation et consultations. Prise en charge CPAM sur prescription médicale.",
    metaDescription: "Taxi conventionné Clinique Rhéna Strasbourg. Transport médical chirurgie, maternité, consultations. Tiers payant CPAM. Dispo 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Chirurgie orthopédique",
      "Chirurgie digestive",
      "Maternité",
      "Rééducation fonctionnelle",
      "Médecine polyvalente",
      "Consultations spécialisées",
    ],
    keywords: [
      "taxi Clinique Rhéna",
      "transport médical Rhéna",
      "taxi maternité Strasbourg",
      "taxi clinique Strasbourg sud",
    ],
    distanceFromStrasbourg: {
      km: 10,
      duration: "18 min",
    },
    parkingInfo: "Parking gratuit pour patients, accès facile",
    accessInfo: "Zone Meinau sud, bien desservie, proche A35",
    image: "/images/photos/clinique-rhena.jpg",
  },
  {
    slug: "clinique-sainte-anne",
    name: "Clinique Sainte-Anne",
    shortName: "Sainte-Anne",
    type: "Clinique",
    address: "182 Route de la Wantzenau",
    city: "Strasbourg",
    postalCode: "67200",
    description: "Service de taxi conventionné CPAM vers la Clinique Sainte-Anne au nord de Strasbourg. Transport médical pour chirurgie, maternité, dialyse et oncologie. Prise en charge CPAM avec tiers payant sur prescription médicale.",
    metaDescription: "Taxi conventionné Clinique Sainte-Anne Strasbourg. Transport médical chirurgie, dialyse, maternité. Tiers payant CPAM. 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Chirurgie ambulatoire",
      "Maternité",
      "Centre de dialyse",
      "Oncologie médicale",
      "Cardiologie interventionnelle",
      "Imagerie médicale",
    ],
    keywords: [
      "taxi Clinique Sainte-Anne",
      "transport médical Sainte-Anne",
      "taxi dialyse Strasbourg",
      "taxi maternité Strasbourg nord",
    ],
    distanceFromStrasbourg: {
      km: 5,
      duration: "10 min",
    },
    parkingInfo: "Grand parking gratuit, accès aisé",
    accessInfo: "Route de la Wantzenau, proche Robertsau",
    image: "/images/photos/hopital-civil.jpg",
  },
  {
    slug: "clinique-sainte-barbe",
    name: "Clinique Sainte-Barbe (GHSV)",
    shortName: "Sainte-Barbe",
    type: "Clinique",
    address: "29 Rue du Faubourg National",
    city: "Strasbourg",
    postalCode: "67200",
    description: "Taxi conventionné CPAM vers la Clinique Sainte-Barbe, membre du Groupe Hospitalier Saint-Vincent. Transport médical pour gériatrie, chirurgie et soins de suite. Service adapté aux personnes âgées avec prise en charge CPAM.",
    metaDescription: "Taxi conventionné Clinique Sainte-Barbe Strasbourg. Transport médical gériatrie, chirurgie, soins. Tiers payant CPAM. 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Gériatrie",
      "Chirurgie générale",
      "Endoscopie digestive",
      "Soins de suite et réadaptation",
      "Médecine polyvalente",
    ],
    keywords: [
      "taxi Clinique Sainte-Barbe",
      "transport médical Sainte-Barbe",
      "taxi gériatrie Strasbourg",
      "taxi personnes âgées",
    ],
    distanceFromStrasbourg: {
      km: 6,
      duration: "13 min",
    },
    parkingInfo: "Parking limité, dépose-minute possible",
    accessInfo: "Centre-ville Strasbourg, proche gare, accès piéton",
    image: "/images/photos/hopital-civil.jpg",
  },
  {
    slug: "cmco-schiltigheim",
    name: "CMCO Schiltigheim",
    shortName: "CMCO",
    type: "Clinique",
    address: "19 Rue Louis Pasteur",
    city: "Schiltigheim",
    postalCode: "67303",
    description: "Transport médical conventionné CPAM vers le CMCO de Schiltigheim, Centre Médico-Chirurgical et Obstétrical réputé. Taxi pour maternité, gynécologie, chirurgie ambulatoire et consultations. Prise en charge CPAM sur prescription.",
    metaDescription: "Taxi conventionné CMCO Schiltigheim. Transport maternité, gynécologie, chirurgie. Tiers payant CPAM. Disponible 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Maternité niveau 2",
      "Gynécologie-obstétrique",
      "Chirurgie ambulatoire",
      "Pédiatrie",
      "Consultations spécialisées",
      "Échographies",
    ],
    keywords: [
      "taxi CMCO Schiltigheim",
      "transport maternité Schiltigheim",
      "taxi maternité CMCO",
      "taxi gynécologie Strasbourg",
    ],
    distanceFromStrasbourg: {
      km: 3,
      duration: "8 min",
    },
    parkingInfo: "Parking gratuit devant l'établissement",
    accessInfo: "Centre de Schiltigheim, facilement accessible",
    specialites: [
      "Maternité de référence",
      "Service de néonatologie",
      "Chirurgie gynécologique",
    ],
    image: "/images/photos/cmco-schiltigheim.jpg",
  },
  {
    slug: "clinique-orangerie",
    name: "Clinique de l'Orangerie",
    shortName: "Clinique Orangerie",
    type: "Clinique",
    address: "29 Allée de la Robertsau",
    city: "Strasbourg",
    postalCode: "67200",
    description: "Taxi conventionné CPAM vers la Clinique de l'Orangerie, établissement privé dans le quartier de l'Orangerie. Transport médical pour chirurgie, rééducation, cancérologie et consultations. Prise en charge CPAM avec tiers payant.",
    metaDescription: "Taxi conventionné Clinique Orangerie Strasbourg. Transport médical chirurgie, rééducation, cancérologie. Tiers payant CPAM. 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Chirurgie orthopédique",
      "Chirurgie digestive",
      "Rééducation fonctionnelle",
      "Oncologie médicale",
      "Médecine physique",
      "Consultations",
    ],
    keywords: [
      "taxi Clinique Orangerie",
      "transport médical Orangerie Strasbourg",
      "taxi rééducation Strasbourg",
      "taxi chirurgie Orangerie",
    ],
    distanceFromStrasbourg: {
      km: 7,
      duration: "14 min",
    },
    parkingInfo: "Parking visiteurs disponible",
    accessInfo: "Quartier Orangerie, proche Parlement Européen",
    image: "/images/photos/clinique-orangerie.jpg",
  },
  {
    slug: "centre-paul-strauss",
    name: "Centre Paul Strauss",
    shortName: "Centre Paul Strauss",
    type: "Institut",
    address: "3 Rue de la Porte de l'Hôpital",
    city: "Strasbourg",
    postalCode: "67200",
    description: "Transport médical conventionné CPAM vers le Centre Paul Strauss, centre historique de lutte contre le cancer. Taxi pour consultations oncologiques, radiothérapie et soins de support. Prise en charge CPAM à 100% pour patients en ALD.",
    metaDescription: "Taxi conventionné Centre Paul Strauss Strasbourg. Transport oncologie, radiothérapie. Prise en charge CPAM 100%. Disponible 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Consultations oncologiques",
      "Radiothérapie",
      "Soins de support",
      "Suivi post-cancer",
      "Imagerie spécialisée",
    ],
    keywords: [
      "taxi Centre Paul Strauss",
      "transport cancérologie Strasbourg",
      "taxi oncologie Strasbourg",
      "taxi radiothérapie",
    ],
    distanceFromStrasbourg: {
      km: 6,
      duration: "12 min",
    },
    parkingInfo: "Parking difficile en centre-ville, dépose recommandée",
    accessInfo: "Centre historique Strasbourg, proche NHC",
    specialites: [
      "Centre de lutte contre le cancer",
      "Radiothérapie",
      "Consultations pluridisciplinaires",
    ],
    image: "/images/photos/centre-paul-strauss.jpg",
  },
  {
    slug: "hopital-robertsau",
    name: "Hôpital de la Robertsau",
    shortName: "Hôpital Robertsau",
    type: "CHU",
    address: "83 Rue Himmerich",
    city: "Strasbourg",
    postalCode: "67200",
    description: "Taxi conventionné CPAM vers l'Hôpital de la Robertsau, établissement spécialisé en gériatrie et soins de suite. Transport médical pour personnes âgées, rééducation et soins de longue durée. Service adapté aux seniors avec prise en charge CPAM.",
    metaDescription: "Taxi conventionné Hôpital Robertsau Strasbourg. Transport gériatrie, rééducation, soins. Adapté seniors. Tiers payant CPAM. 24h/24. ☎ 07 53 14 53 71",
    services: [
      "Gériatrie aiguë",
      "Soins de suite et réadaptation",
      "Rééducation fonctionnelle",
      "Soins de longue durée",
      "Médecine gériatrique",
      "EHPAD",
    ],
    keywords: [
      "taxi Hôpital Robertsau",
      "transport gériatrie Strasbourg",
      "taxi personnes âgées Robertsau",
      "taxi soins de suite",
    ],
    distanceFromStrasbourg: {
      km: 7,
      duration: "14 min",
    },
    parkingInfo: "Parking visiteurs disponible",
    accessInfo: "Quartier Robertsau, calme et verdoyant",
    specialites: [
      "Gériatrie de référence",
      "Rééducation post-opératoire",
      "Soins palliatifs",
    ],
    image: "/images/photos/centre-reeducation.jpg",
  },
];

export function getEtablissementBySlug(slug: string): EtablissementSante | undefined {
  return etablissementsSante.find((etab) => etab.slug === slug);
}

export function getEtablissementsByType(type: "CHU" | "Clinique" | "Institut"): EtablissementSante[] {
  return etablissementsSante.filter((etab) => etab.type === type);
}

export function getEtablissementsByCity(city: string): EtablissementSante[] {
  return etablissementsSante.filter((etab) => etab.city.toLowerCase() === city.toLowerCase());
}

// Suggestions d'établissements proches pour maillage SEO
export function getRelatedEtablissements(currentSlug: string, limit: number = 4): EtablissementSante[] {
  const currentEtab = getEtablissementBySlug(currentSlug);
  if (!currentEtab) return [];

  // Suggérer des établissements du même type
  const sameType = etablissementsSante.filter(
    (etab) => etab.type === currentEtab.type && etab.slug !== currentSlug
  );

  if (sameType.length >= limit) {
    return sameType.slice(0, limit);
  }

  // Si pas assez, ajouter des établissements d'autres types
  const others = etablissementsSante.filter(
    (etab) => etab.type !== currentEtab.type && etab.slug !== currentSlug
  );

  return [...sameType, ...others].slice(0, limit);
}
