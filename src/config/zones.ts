// Configuration des zones/quartiers desservis par Taxi 02 Strasbourg

export interface Zone {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  metaDescription: string;
  postalCode?: string;
  distances: {
    centreville: { km: number; duration: string };
    gare: { km: number; duration: string };
    aeroport: { km: number; duration: string };
  };
  highlights: string[];
  neighborhoods?: string[];
  tier?: 1 | 2 | 3; // 1=majeur, 2=moyen, 3=petit
}

export const zones: Zone[] = [
  // ========================================
  // COMMUNES EUROMÉTROPOLE - TIER 1 (Principales)
  // ========================================
  {
    slug: "strasbourg",
    name: "Strasbourg",
    fullName: "Strasbourg",
    postalCode: "67200",
    description: "Service de taxi à Strasbourg, capitale européenne et préfecture du Bas-Rhin. Desserte complète de tous les quartiers : Centre-Ville, Neudorf, Krutenau, Robertsau, Orangerie, Cronenbourg. Transferts vers les institutions européennes, la gare centrale et l'aéroport.",
    metaDescription: "Taxi Strasbourg. Réservation 24h/24 tous quartiers. Transport CPAM, aéroport, gare, institutions européennes. Conventionné CPAM. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 0, duration: "Variable selon quartier" },
      gare: { km: 1, duration: "5-15 min" },
      aeroport: { km: 12, duration: "15-20 min" },
    },
    highlights: [
      "Tous quartiers de Strasbourg",
      "Parlement Européen et Conseil de l'Europe",
      "Cathédrale et Petite France",
      "CHU Hautepierre et NHC",
      "Université et campus",
      "Gare centrale TGV/ICE",
    ],
    neighborhoods: [
      "Centre-Ville", "Neudorf", "Krutenau", "Robertsau", "Orangerie",
      "Cronenbourg", "Hautepierre", "Meinau", "Koenigshoffen", "Esplanade",
      "Montagne Verte", "Neuhof", "Elsau", "Petite France"
    ],
    tier: 1,
  },
  {
    slug: "hoenheim",
    name: "Hoenheim",
    fullName: "Hoenheim",
    postalCode: "67800",
    description: "Votre taxi à Hoenheim, à 5 minutes de Strasbourg. Service ultra-rapide pour les habitants de Hoenheim avec connaissance parfaite de la commune. Desserte optimale vers le centre de Strasbourg, la gare, l'aéroport et les établissements de santé.",
    metaDescription: "Taxi Hoenheim. Basé localement, réponse immédiate. Transport CPAM, courses quotidiennes, transferts. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 6, duration: "10 min" },
      gare: { km: 7, duration: "12 min" },
      aeroport: { km: 18, duration: "20 min" },
    },
    highlights: [
      "Taxi basé à Strasbourg - réactivité maximale",
      "Connaissance parfaite de la commune",
      "Proche Bischheim et Schiltigheim",
      "Accès direct A35 et A4",
      "Transport scolaire et médical",
    ],
    neighborhoods: ["Centre", "Souffel", "Route de Bischwiller"],
    tier: 1,
  },
  {
    slug: "schiltigheim",
    name: "Schiltigheim",
    fullName: "Schiltigheim",
    postalCode: "67300",
    description: "Service de taxi à Schiltigheim, la « Cité des Brasseurs », deuxième ville du Bas-Rhin. Transport vers CMCO (maternité), commerces du centre, et accès rapide à Strasbourg. Desserte complète des quartiers résidentiels et zones commerciales.",
    metaDescription: "Taxi Schiltigheim. CMCO maternité, centre-ville, commerces. Transport CPAM, courses quotidiennes. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 3, duration: "10 min" },
      gare: { km: 4, duration: "12 min" },
      aeroport: { km: 15, duration: "20 min" },
    },
    highlights: [
      "CMCO Schiltigheim (maternité)",
      "Cité des Brasseurs patrimoine",
      "Centre commercial Espace Européen",
      "Marché et commerces de proximité",
      "Accès A35 et A4 rapide",
    ],
    neighborhoods: ["Centre-ville", "Marais", "Liberté", "Fischer"],
    tier: 1,
  },
  {
    slug: "bischheim",
    name: "Bischheim",
    fullName: "Bischheim",
    postalCode: "67800",
    description: "Taxi à Bischheim, commune limitrophe de Strasbourg. Service rapide pour les zones résidentielles et commerciales. Proximité immédiate avec nos bases, temps de prise en charge minimal. Transport vers Strasbourg centre, hôpitaux et aéroport.",
    metaDescription: "Taxi Bischheim. Proche Strasbourg. Transport médical CPAM, courses quotidiennes. Réponse rapide 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 5, duration: "12 min" },
      gare: { km: 6, duration: "15 min" },
      aeroport: { km: 17, duration: "22 min" },
    },
    highlights: [
      "Proche Strasbourg - temps de prise en charge réduit",
      "Zone commerciale du Trèfle",
      "Accès A4 autoroute de l'Est",
      "Écoles et transport scolaire",
      "Transport médical vers CHU",
    ],
    tier: 1,
  },
  {
    slug: "illkirch-graffenstaden",
    name: "Illkirch-Graffenstaden",
    fullName: "Illkirch-Graffenstaden",
    postalCode: "67400",
    description: "Votre taxi à Illkirch-Graffenstaden, pôle universitaire et d'activités au sud de Strasbourg. Desserte du campus universitaire, Pôle API, zones commerciales et quartiers résidentiels. Proximité de l'aéroport Entzheim, transferts optimisés.",
    metaDescription: "Taxi Illkirch-Graffenstaden. Campus universitaire, Pôle API, aéroport. Transport étudiant et professionnel. Dispo 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 7, duration: "15 min" },
      gare: { km: 8, duration: "18 min" },
      aeroport: { km: 8, duration: "12 min" },
    },
    highlights: [
      "Campus universitaire d'Illkirch",
      "Pôle API et parc d'innovation",
      "Très proche aéroport Entzheim",
      "Centre commercial Leclerc",
      "Accès A35 direct",
    ],
    neighborhoods: ["Illkirch centre", "Graffenstaden", "Lixenbuhl", "Campus"],
    tier: 1,
  },
  {
    slug: "lingolsheim",
    name: "Lingolsheim",
    fullName: "Lingolsheim",
    postalCode: "67380",
    description: "Taxi à Lingolsheim, commune résidentielle au sud-ouest de Strasbourg. Service privilégié pour les quartiers calmes et familiaux. Proximité de l'aéroport Entzheim et accès rapide au centre de Strasbourg via A35. Transport scolaire et médical.",
    metaDescription: "Taxi Lingolsheim. Commune résidentielle, proche aéroport. Transport CPAM, scolaire, courses. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 6, duration: "12 min" },
      gare: { km: 7, duration: "15 min" },
      aeroport: { km: 10, duration: "15 min" },
    },
    highlights: [
      "Commune résidentielle calme",
      "Proche Ostwald et Illkirch",
      "Accès A35 et A351 rapide",
      "Transport scolaire disponible",
      "Quartiers pavillonnaires",
    ],
    neighborhoods: ["Centre", "Tiergaertel", "Alouettes"],
    tier: 1,
  },
  {
    slug: "ostwald",
    name: "Ostwald",
    fullName: "Ostwald",
    postalCode: "67540",
    description: "Service de taxi à Ostwald, commune au sud de Strasbourg bordée par l'Ill. Desserte des quartiers résidentiels, zones commerciales et zones d'activités. Accès privilégié vers l'aéroport, le centre de Strasbourg et les hôpitaux.",
    metaDescription: "Taxi Ostwald. Sud Strasbourg, proche aéroport et A35. Transport médical CPAM, transferts. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 8, duration: "15 min" },
      gare: { km: 9, duration: "18 min" },
      aeroport: { km: 7, duration: "12 min" },
    },
    highlights: [
      "Zone commerciale Ostwald",
      "Proche Clinique Rhéna",
      "Accès A35 immédiat",
      "Très proche aéroport (7 km)",
      "Bords de l'Ill",
    ],
    tier: 1,
  },
  {
    slug: "geispolsheim",
    name: "Geispolsheim",
    fullName: "Geispolsheim",
    postalCode: "67118",
    description: "Taxi à Geispolsheim, commune au sud de Strasbourg proche de l'aéroport. Service pour les zones résidentielles et commerciales. Transferts aéroport optimisés, transport vers Strasbourg centre et vers les établissements médicaux.",
    metaDescription: "Taxi Geispolsheim. Proche aéroport Entzheim. Transport CPAM, transferts aéroport, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 10, duration: "18 min" },
      gare: { km: 11, duration: "20 min" },
      aeroport: { km: 5, duration: "8 min" },
    },
    highlights: [
      "Très proche aéroport (5 km)",
      "Zone commerciale Leclerc",
      "Quartiers résidentiels calmes",
      "Accès A35 direct",
      "Transport vers hôpitaux de Strasbourg",
    ],
    tier: 1,
  },

  // ========================================
  // COMMUNES EUROMÉTROPOLE - TIER 2 (Moyennes)
  // ========================================
  {
    slug: "souffelweyersheim",
    name: "Souffelweyersheim",
    fullName: "Souffelweyersheim",
    postalCode: "67460",
    description: "Service de taxi à Souffelweyersheim, commune au nord de Strasbourg. Desserte des quartiers résidentiels et zones d'activités. Transport vers Strasbourg, Haguenau et établissements médicaux du secteur nord.",
    metaDescription: "Taxi Souffelweyersheim. Nord Strasbourg, transport CPAM, courses quotidiennes. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 9, duration: "18 min" },
      gare: { km: 10, duration: "20 min" },
      aeroport: { km: 21, duration: "28 min" },
    },
    highlights: [
      "Zone commerciale Souffel 2000",
      "Accès A4 et RD1004",
      "Proche La Wantzenau",
      "Transport vers CHU Hautepierre",
    ],
    tier: 2,
  },
  {
    slug: "mundolsheim",
    name: "Mundolsheim",
    fullName: "Mundolsheim",
    postalCode: "67450",
    description: "Taxi à Mundolsheim, commune résidentielle au nord de Strasbourg. Service rapide vers Schiltigheim et Strasbourg centre. Transport médical, scolaire et courses quotidiennes. Accès direct aux axes routiers principaux.",
    metaDescription: "Taxi Mundolsheim. Commune résidentielle nord. Transport CPAM, scolaire, transferts. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 7, duration: "15 min" },
      gare: { km: 8, duration: "17 min" },
      aeroport: { km: 19, duration: "25 min" },
    },
    highlights: [
      "Commune résidentielle calme",
      "Proche Schiltigheim et Lampertheim",
      "Écoles et transport scolaire",
      "Accès A4 rapide",
    ],
    tier: 2,
  },
  {
    slug: "reichstett",
    name: "Reichstett",
    fullName: "Reichstett",
    postalCode: "67116",
    description: "Service de taxi à Reichstett, commune au nord de Strasbourg proche de la Robertsau. Desserte des quartiers résidentiels et zones d'activités. Transport vers les institutions européennes et le centre de Strasbourg.",
    metaDescription: "Taxi Reichstett. Nord Strasbourg, proche Robertsau. Transport CPAM, courses, transferts. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 8, duration: "16 min" },
      gare: { km: 9, duration: "18 min" },
      aeroport: { km: 20, duration: "26 min" },
    },
    highlights: [
      "Proche Robertsau et Parlement Européen",
      "Quartiers résidentiels",
      "Forêt de la Robertsau à proximité",
      "Transport vers institutions européennes",
    ],
    tier: 2,
  },
  {
    slug: "la-wantzenau",
    name: "La Wantzenau",
    fullName: "La Wantzenau",
    postalCode: "67610",
    description: "Taxi à La Wantzenau, commune au bord du Rhin réputée pour ses restaurants. Service pour les quartiers résidentiels, restaurants et équipements sportifs. Transport vers Strasbourg, l'Allemagne (Kehl) et l'aéroport.",
    metaDescription: "Taxi La Wantzenau. Bords du Rhin, restaurants. Transport CPAM, transferts vers Allemagne. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 12, duration: "20 min" },
      gare: { km: 13, duration: "22 min" },
      aeroport: { km: 24, duration: "30 min" },
    },
    highlights: [
      "Restaurants réputés du bord du Rhin",
      "Proche de l'Allemagne (Kehl)",
      "Complexe sportif Wanty",
      "Quartiers calmes et verdoyants",
    ],
    tier: 2,
  },
  {
    slug: "vendenheim",
    name: "Vendenheim",
    fullName: "Vendenheim",
    postalCode: "67550",
    description: "Service de taxi à Vendenheim, commune au nord-ouest de Strasbourg. Desserte des zones résidentielles et commerciales. Accès rapide vers Strasbourg, Haguenau et l'aéroport via les axes autoroutiers.",
    metaDescription: "Taxi Vendenheim. Nord-ouest Strasbourg. Transport CPAM, courses, transferts. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 11, duration: "18 min" },
      gare: { km: 12, duration: "20 min" },
      aeroport: { km: 18, duration: "24 min" },
    },
    highlights: [
      "Zone commerciale Family Village",
      "Accès A4 et A340",
      "Proche Haguenau et Brumath",
      "Transport vers CHU Hautepierre",
    ],
    tier: 2,
  },
  {
    slug: "eckbolsheim",
    name: "Eckbolsheim",
    fullName: "Eckbolsheim",
    postalCode: "67201",
    description: "Taxi à Eckbolsheim, commune à l'ouest de Strasbourg proche de Wolfisheim. Service pour quartiers résidentiels et zones d'activités. Transport vers Strasbourg centre, hôpital Hautepierre et aéroport.",
    metaDescription: "Taxi Eckbolsheim. Ouest Strasbourg. Transport CPAM, courses quotidiennes, transferts. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 8, duration: "15 min" },
      gare: { km: 9, duration: "17 min" },
      aeroport: { km: 14, duration: "20 min" },
    },
    highlights: [
      "Commune résidentielle calme",
      "Proche Wolfisheim et Lingolsheim",
      "Accès A35 et RN4",
      "Transport médical vers Hautepierre",
    ],
    tier: 2,
  },
  {
    slug: "wolfisheim",
    name: "Wolfisheim",
    fullName: "Wolfisheim",
    postalCode: "67202",
    description: "Service de taxi à Wolfisheim, commune à l'ouest de Strasbourg. Desserte complète des quartiers résidentiels et zones commerciales. Accès privilégié vers l'aéroport et Strasbourg centre via A35.",
    metaDescription: "Taxi Wolfisheim. Ouest Strasbourg, proche aéroport. Transport CPAM, courses, transferts. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 9, duration: "16 min" },
      gare: { km: 10, duration: "18 min" },
      aeroport: { km: 12, duration: "17 min" },
    },
    highlights: [
      "Zone commerciale Leclerc",
      "Proche aéroport Entzheim",
      "Accès A35 direct",
      "Quartiers résidentiels développés",
    ],
    tier: 2,
  },
  {
    slug: "holtzheim",
    name: "Holtzheim",
    fullName: "Holtzheim",
    postalCode: "67810",
    description: "Taxi à Holtzheim, commune proche de l'aéroport Strasbourg-Entzheim. Service privilégié pour transferts aéroport avec temps de trajet minimal. Desserte vers Strasbourg, Molsheim et établissements médicaux.",
    metaDescription: "Taxi Holtzheim. Très proche aéroport. Transferts aéroport optimisés, transport CPAM. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 12, duration: "18 min" },
      gare: { km: 13, duration: "20 min" },
      aeroport: { km: 4, duration: "7 min" },
    },
    highlights: [
      "Très proche aéroport (4 km)",
      "Transferts aéroport express",
      "Accès A35 direct",
      "Transport vers Molsheim et Obernai",
    ],
    tier: 2,
  },
  {
    slug: "entzheim",
    name: "Entzheim",
    fullName: "Entzheim",
    postalCode: "67960",
    description: "Service de taxi à Entzheim, commune abritant l'aéroport de Strasbourg. Transferts aéroport avec prise en charge optimale. Desserte des zones résidentielles et transport vers Strasbourg et les communes voisines.",
    metaDescription: "Taxi Entzheim. Aéroport de Strasbourg. Transferts aéroport, transport CPAM, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 13, duration: "18 min" },
      gare: { km: 14, duration: "20 min" },
      aeroport: { km: 1, duration: "3 min" },
    },
    highlights: [
      "Aéroport Strasbourg-Entzheim",
      "Transferts aéroport immédiats",
      "Zone commerciale aéroportuaire",
      "Transport vers route des vins",
    ],
    tier: 2,
  },
  {
    slug: "eschau",
    name: "Eschau",
    fullName: "Eschau",
    postalCode: "67114",
    description: "Taxi à Eschau, commune au sud-est de Strasbourg. Service pour quartiers résidentiels et zones d'activités. Transport vers Strasbourg centre, Illkirch et les établissements de santé.",
    metaDescription: "Taxi Eschau. Sud-est Strasbourg. Transport CPAM, courses quotidiennes, transferts. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 11, duration: "18 min" },
      gare: { km: 12, duration: "20 min" },
      aeroport: { km: 10, duration: "15 min" },
    },
    highlights: [
      "Commune résidentielle",
      "Proche Illkirch et Plobsheim",
      "Accès A35 rapide",
      "Transport vers campus universitaire",
    ],
    tier: 2,
  },
  {
    slug: "fegersheim",
    name: "Fegersheim",
    fullName: "Fegersheim",
    postalCode: "67640",
    description: "Service de taxi à Fegersheim, commune au sud de Strasbourg. Desserte des quartiers résidentiels et zones commerciales. Proximité de l'aéroport et d'Illkirch. Transport médical et courses quotidiennes.",
    metaDescription: "Taxi Fegersheim. Sud Strasbourg, proche aéroport. Transport CPAM, courses, transferts. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 12, duration: "19 min" },
      gare: { km: 13, duration: "21 min" },
      aeroport: { km: 8, duration: "12 min" },
    },
    highlights: [
      "Zone commerciale Géant Casino",
      "Proche aéroport et Illkirch",
      "Accès A35 direct",
      "Quartiers résidentiels en développement",
    ],
    tier: 2,
  },
  {
    slug: "lampertheim",
    name: "Lampertheim",
    fullName: "Lampertheim",
    postalCode: "67450",
    description: "Taxi à Lampertheim, commune au nord-ouest de Strasbourg. Service pour zones résidentielles et commerciales. Transport vers Strasbourg, Mundolsheim et Brumath. Accès rapide aux axes autoroutiers.",
    metaDescription: "Taxi Lampertheim. Nord-ouest Strasbourg. Transport CPAM, courses quotidiennes. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 9, duration: "17 min" },
      gare: { km: 10, duration: "19 min" },
      aeroport: { km: 21, duration: "27 min" },
    },
    highlights: [
      "Commune résidentielle",
      "Proche Mundolsheim et Oberhausbergen",
      "Accès A4 et A35",
      "Transport vers CHU Hautepierre",
    ],
    tier: 2,
  },
  {
    slug: "oberhausbergen",
    name: "Oberhausbergen",
    fullName: "Oberhausbergen",
    postalCode: "67205",
    description: "Service de taxi à Oberhausbergen, commune à l'ouest de Strasbourg proche de Cronenbourg. Desserte des quartiers résidentiels et zones commerciales. Transport vers CHU Hautepierre, Strasbourg centre et aéroport.",
    metaDescription: "Taxi Oberhausbergen. Ouest Strasbourg, proche Hautepierre. Transport CPAM, CHU, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 7, duration: "14 min" },
      gare: { km: 8, duration: "16 min" },
      aeroport: { km: 19, duration: "24 min" },
    },
    highlights: [
      "Très proche CHU Hautepierre",
      "Zone commerciale Place des Halles",
      "Accès A351 direct",
      "Transport médical optimisé",
    ],
    tier: 2,
  },

  // ========================================
  // COMMUNES EUROMÉTROPOLE - TIER 3 (Petites)
  // ========================================
  {
    slug: "mittelhausbergen",
    name: "Mittelhausbergen",
    fullName: "Mittelhausbergen",
    postalCode: "67206",
    description: "Taxi à Mittelhausbergen, petite commune à l'ouest de Strasbourg. Service pour quartiers résidentiels. Transport vers Strasbourg, CHU Hautepierre et zones commerciales voisines.",
    metaDescription: "Taxi Mittelhausbergen. Petite commune ouest Strasbourg. Transport CPAM, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 8, duration: "15 min" },
      gare: { km: 9, duration: "17 min" },
      aeroport: { km: 20, duration: "25 min" },
    },
    highlights: [
      "Commune résidentielle calme",
      "Proche Oberhausbergen et Niederhausbergen",
      "Accès A351",
      "Transport médical vers Hautepierre",
    ],
    tier: 3,
  },
  {
    slug: "niederhausbergen",
    name: "Niederhausbergen",
    fullName: "Niederhausbergen",
    postalCode: "67207",
    description: "Service de taxi à Niederhausbergen, commune à l'ouest de Strasbourg. Desserte des quartiers résidentiels. Transport vers Strasbourg centre, CHU Hautepierre et aéroport.",
    metaDescription: "Taxi Niederhausbergen. Ouest Strasbourg. Transport CPAM, courses quotidiennes. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 7, duration: "14 min" },
      gare: { km: 8, duration: "16 min" },
      aeroport: { km: 19, duration: "24 min" },
    },
    highlights: [
      "Commune résidentielle",
      "Très proche CHU Hautepierre",
      "Voisine de Oberhausbergen",
      "Accès A351 direct",
    ],
    tier: 3,
  },
  {
    slug: "oberschaeffolsheim",
    name: "Oberschaeffolsheim",
    fullName: "Oberschaeffolsheim",
    postalCode: "67203",
    description: "Taxi à Oberschaeffolsheim, commune à l'ouest de Strasbourg. Service pour zones résidentielles. Transport vers Strasbourg, aéroport et communes de la route des vins.",
    metaDescription: "Taxi Oberschaeffolsheim. Ouest Strasbourg. Transport CPAM, courses, transferts. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 10, duration: "17 min" },
      gare: { km: 11, duration: "19 min" },
      aeroport: { km: 14, duration: "19 min" },
    },
    highlights: [
      "Commune viticole",
      "Proche route des vins",
      "Accès A35",
      "Transport vers aéroport et Molsheim",
    ],
    tier: 3,
  },
  {
    slug: "plobsheim",
    name: "Plobsheim",
    fullName: "Plobsheim",
    postalCode: "67115",
    description: "Service de taxi à Plobsheim, commune au sud-est de Strasbourg au bord du Rhin. Desserte des quartiers résidentiels et zones de loisirs. Transport vers Strasbourg, Illkirch et l'Allemagne.",
    metaDescription: "Taxi Plobsheim. Sud-est Strasbourg, bord du Rhin. Transport CPAM, courses. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 14, duration: "21 min" },
      gare: { km: 15, duration: "23 min" },
      aeroport: { km: 12, duration: "17 min" },
    },
    highlights: [
      "Base nautique du Rhin",
      "Proche de l'Allemagne",
      "Quartiers résidentiels au calme",
      "Transport vers Kehl et Offenburg",
    ],
    tier: 3,
  },
  {
    slug: "lipsheim",
    name: "Lipsheim",
    fullName: "Lipsheim",
    postalCode: "67640",
    description: "Taxi à Lipsheim, commune au sud de Strasbourg proche de l'aéroport. Service pour zones résidentielles et commerciales. Transferts aéroport optimisés et transport vers Strasbourg.",
    metaDescription: "Taxi Lipsheim. Sud Strasbourg, proche aéroport. Transport CPAM, transferts aéroport. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 14, duration: "20 min" },
      gare: { km: 15, duration: "22 min" },
      aeroport: { km: 6, duration: "10 min" },
    },
    highlights: [
      "Proche aéroport (6 km)",
      "Zone commerciale",
      "Accès A35 direct",
      "Commune résidentielle",
    ],
    tier: 3,
  },
  {
    slug: "blaesheim",
    name: "Blaesheim",
    fullName: "Blaesheim",
    postalCode: "67113",
    description: "Service de taxi à Blaesheim, commune au sud de Strasbourg. Desserte des quartiers résidentiels. Transport vers Geispolsheim, aéroport et Strasbourg centre.",
    metaDescription: "Taxi Blaesheim. Sud Strasbourg. Transport CPAM, courses quotidiennes. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 13, duration: "20 min" },
      gare: { km: 14, duration: "22 min" },
      aeroport: { km: 7, duration: "11 min" },
    },
    highlights: [
      "Commune résidentielle calme",
      "Proche aéroport et Geispolsheim",
      "Accès A35",
      "Transport vers Obernai",
    ],
    tier: 3,
  },
  {
    slug: "hangenbieten",
    name: "Hangenbieten",
    fullName: "Hangenbieten",
    postalCode: "67980",
    description: "Taxi à Hangenbieten, commune viticole à l'ouest de Strasbourg. Service pour zones résidentielles. Transport vers Strasbourg, aéroport et route des vins d'Alsace.",
    metaDescription: "Taxi Hangenbieten. Commune viticole ouest. Transport CPAM, route des vins. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 11, duration: "18 min" },
      gare: { km: 12, duration: "20 min" },
      aeroport: { km: 13, duration: "18 min" },
    },
    highlights: [
      "Commune viticole",
      "Route des vins d'Alsace",
      "Proche Molsheim",
      "Transport vers caves et vignobles",
    ],
    tier: 3,
  },
  {
    slug: "kolbsheim",
    name: "Kolbsheim",
    fullName: "Kolbsheim",
    postalCode: "67120",
    description: "Service de taxi à Kolbsheim, commune à l'ouest de Strasbourg. Desserte des quartiers résidentiels. Transport vers Strasbourg, aéroport et Molsheim.",
    metaDescription: "Taxi Kolbsheim. Ouest Strasbourg. Transport CPAM, courses, transferts. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 13, duration: "19 min" },
      gare: { km: 14, duration: "21 min" },
      aeroport: { km: 11, duration: "16 min" },
    },
    highlights: [
      "Commune résidentielle",
      "Château de Kolbsheim",
      "Proche Molsheim et route des vins",
      "Accès A352",
    ],
    tier: 3,
  },
  {
    slug: "breuschwickersheim",
    name: "Breuschwickersheim",
    fullName: "Breuschwickersheim",
    postalCode: "67112",
    description: "Taxi à Breuschwickersheim, commune à l'ouest de Strasbourg. Service pour zones résidentielles. Transport vers Strasbourg, aéroport et Molsheim.",
    metaDescription: "Taxi Breuschwickersheim. Ouest Strasbourg. Transport CPAM, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 12, duration: "19 min" },
      gare: { km: 13, duration: "21 min" },
      aeroport: { km: 12, duration: "17 min" },
    },
    highlights: [
      "Commune résidentielle",
      "Proche Osthoffen et Achenheim",
      "Transport vers aéroport",
      "Accès A352",
    ],
    tier: 3,
  },
  {
    slug: "achenheim",
    name: "Achenheim",
    fullName: "Achenheim",
    postalCode: "67204",
    description: "Service de taxi à Achenheim, commune à l'ouest de Strasbourg. Desserte des quartiers résidentiels et zones d'activités. Transport vers Strasbourg, CHU Hautepierre et aéroport.",
    metaDescription: "Taxi Achenheim. Ouest Strasbourg. Transport CPAM, courses quotidiennes. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 10, duration: "17 min" },
      gare: { km: 11, duration: "19 min" },
      aeroport: { km: 16, duration: "21 min" },
    },
    highlights: [
      "Zones d'activités",
      "Commune résidentielle",
      "Proche CHU Hautepierre",
      "Accès A35 et A352",
    ],
    tier: 3,
  },
  {
    slug: "osthoffen",
    name: "Osthoffen",
    fullName: "Osthoffen",
    postalCode: "67990",
    description: "Taxi à Osthoffen, commune viticole à l'ouest de Strasbourg. Service pour quartiers résidentiels. Transport vers Strasbourg, route des vins et Molsheim.",
    metaDescription: "Taxi Osthoffen. Commune viticole ouest. Transport CPAM, route des vins. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 14, duration: "21 min" },
      gare: { km: 15, duration: "23 min" },
      aeroport: { km: 16, duration: "22 min" },
    },
    highlights: [
      "Commune viticole",
      "Route des vins d'Alsace",
      "Proche Molsheim et Marlenheim",
      "Transport vers caves",
    ],
    tier: 3,
  },
  {
    slug: "eckwersheim",
    name: "Eckwersheim",
    fullName: "Eckwersheim",
    postalCode: "67550",
    description: "Service de taxi à Eckwersheim, commune au nord-ouest de Strasbourg. Desserte des quartiers résidentiels. Transport vers Strasbourg, Vendenheim et Haguenau.",
    metaDescription: "Taxi Eckwersheim. Nord-ouest Strasbourg. Transport CPAM, courses. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 13, duration: "20 min" },
      gare: { km: 14, duration: "22 min" },
      aeroport: { km: 20, duration: "26 min" },
    },
    highlights: [
      "Commune résidentielle",
      "Proche Vendenheim et Brumath",
      "Accès A4",
      "Transport vers Haguenau",
    ],
    tier: 3,
  },

  // ========================================
  // QUARTIERS DE STRASBOURG
  // ========================================
  {
    slug: "strasbourg-centre-ville",
    name: "Centre-Ville",
    fullName: "Strasbourg Centre-Ville",
    description: "Votre taxi au cœur de Strasbourg, disponible 24h/24. Prise en charge rapide dans tout le centre historique : Cathédrale, Petite France, Grande Île, quais de l'Ill. Accès immédiat à la gare centrale et toutes destinations.",
    metaDescription: "Taxi Strasbourg Centre-Ville. Réservation 24h/24, prise en charge immédiate. Cathédrale, Petite France, Gare. Tarifs officiels. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 0, duration: "Sur place" },
      gare: { km: 1, duration: "5 min" },
      aeroport: { km: 12, duration: "15 min" },
    },
    highlights: [
      "Cathédrale Notre-Dame et Grande Île UNESCO",
      "Petite France et ponts couverts",
      "Place Kléber et commerces",
      "Gare centrale TGV/ICE à 5 min",
      "Hôtels et restaurants du centre",
    ],
    neighborhoods: ["Grande Île", "Petite France", "Place Kléber", "Ancienne Douane"],
    tier: 1,
  },
  {
    slug: "strasbourg-neudorf",
    name: "Neudorf",
    fullName: "Strasbourg Neudorf",
    description: "Service de taxi à Neudorf, le plus grand quartier de Strasbourg. Desserte rapide vers le centre-ville, la gare et l'aéroport. Transport médical vers les cliniques, courses quotidiennes et transferts professionnels.",
    metaDescription: "Taxi Neudorf Strasbourg. Réservation 24h/24, quartier résidentiel et commercial. Transport médical, courses quotidiennes. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 3, duration: "10 min" },
      gare: { km: 4, duration: "12 min" },
      aeroport: { km: 10, duration: "15 min" },
    },
    highlights: [
      "Plus grand quartier de Strasbourg",
      "Cliniques et établissements médicaux",
      "Centre commercial et commerces",
      "Campus universitaire proche",
      "Desserte Neuhof et Port du Rhin",
    ],
    neighborhoods: ["Neudorf Nord", "Neudorf Sud", "Musau", "Port du Rhin"],
    tier: 1,
  },
  {
    slug: "strasbourg-krutenau",
    name: "Krutenau",
    fullName: "Strasbourg Krutenau",
    description: "Taxi à la Krutenau, quartier étudiant et bohème de Strasbourg. Service vers le campus universitaire, les facultés et les résidences étudiantes. Transport nocturne disponible pour les sorties.",
    metaDescription: "Taxi Krutenau Strasbourg. Quartier étudiant, campus universitaire. Transport nocturne, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 2, duration: "7 min" },
      gare: { km: 2, duration: "8 min" },
      aeroport: { km: 13, duration: "17 min" },
    },
    highlights: [
      "Quartier étudiant et bohème",
      "Campus universitaire historique",
      "Résidences étudiantes Esplanade",
      "Bars et restaurants animés",
      "Proche centre-ville et gare",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-robertsau",
    name: "Robertsau",
    fullName: "Strasbourg Robertsau",
    description: "Taxi à la Robertsau, quartier résidentiel proche des institutions européennes. Service premium pour le Parlement Européen, Conseil de l'Europe et Cour Européenne des Droits de l'Homme. Transport professionnel et diplomatique.",
    metaDescription: "Taxi Robertsau Strasbourg. Quartier européen, Parlement, Conseil de l'Europe. Service premium 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 5, duration: "15 min" },
      gare: { km: 6, duration: "18 min" },
      aeroport: { km: 17, duration: "25 min" },
    },
    highlights: [
      "Parlement Européen",
      "Conseil de l'Europe et CEDH",
      "Quartier résidentiel haut standing",
      "Forêt de la Robertsau",
      "Transport diplomatique et professionnel",
    ],
    neighborhoods: ["Robertsau village", "Wacken", "Quartier Européen"],
    tier: 1,
  },
  {
    slug: "strasbourg-orangerie",
    name: "Orangerie",
    fullName: "Strasbourg Orangerie",
    description: "Service de taxi au quartier de l'Orangerie, zone résidentielle prestigieuse de Strasbourg. Desserte du parc de l'Orangerie, institutions européennes et quartiers résidentiels. Service haut de gamme disponible.",
    metaDescription: "Taxi Orangerie Strasbourg. Quartier résidentiel prestigieux, parc. Transport haut de gamme 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 3, duration: "10 min" },
      gare: { km: 4, duration: "12 min" },
      aeroport: { km: 15, duration: "20 min" },
    },
    highlights: [
      "Parc de l'Orangerie",
      "Quartier résidentiel prestigieux",
      "Proche institutions européennes",
      "Clinique de l'Orangerie",
      "Consulats et ambassades",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-cronenbourg",
    name: "Cronenbourg",
    fullName: "Strasbourg Cronenbourg",
    description: "Service de taxi à Cronenbourg, quartier historique et populaire de Strasbourg. Transport vers le centre-ville, les zones commerciales et CHU Hautepierre. Desserte optimale des quartiers résidentiels.",
    metaDescription: "Taxi Cronenbourg Strasbourg. Réservation 24h/24, tarifs préfecture. Transport médical, courses quotidiennes. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 4, duration: "12 min" },
      gare: { km: 5, duration: "15 min" },
      aeroport: { km: 15, duration: "20 min" },
    },
    highlights: [
      "Quartier historique brassicole",
      "Accès A35 et A4 facilité",
      "Zone commerciale Cronenbourg",
      "Transport médical vers Hautepierre",
      "Quartiers résidentiels développés",
    ],
    neighborhoods: ["Cronenbourg bas", "Cronenbourg cité", "Stephansfeld"],
    tier: 1,
  },
  {
    slug: "strasbourg-hautepierre",
    name: "Hautepierre",
    fullName: "Strasbourg Hautepierre",
    description: "Taxi à Hautepierre, proche du CHU et du centre commercial. Service spécialisé transport médical conventionné CPAM vers l'hôpital de Hautepierre. Prise en charge rapide pour consultations, urgences et hospitalisations.",
    metaDescription: "Taxi Hautepierre Strasbourg. CHU Hautepierre, transport médical conventionné CPAM. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 5, duration: "15 min" },
      gare: { km: 6, duration: "18 min" },
      aeroport: { km: 18, duration: "25 min" },
    },
    highlights: [
      "CHU Hautepierre - Hôpitaux Universitaires",
      "Transport médical CPAM conventionné",
      "Centre commercial Hautepierre",
      "Accès autoroute A351",
      "Quartiers Hautepierre et Poteries",
    ],
    neighborhoods: ["Hautepierre", "Poteries", "Hohberg"],
    tier: 1,
  },
  {
    slug: "strasbourg-meinau",
    name: "Meinau",
    fullName: "Strasbourg Meinau",
    description: "Service de taxi à la Meinau, quartier résidentiel au sud de Strasbourg. Desserte du stade de la Meinau, zones résidentielles et commerces. Transport vers le centre, la gare et l'aéroport.",
    metaDescription: "Taxi Meinau Strasbourg. Stade de la Meinau, quartier résidentiel. Transport CPAM, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 4, duration: "12 min" },
      gare: { km: 5, duration: "14 min" },
      aeroport: { km: 11, duration: "16 min" },
    },
    highlights: [
      "Stade de la Meinau (RC Strasbourg)",
      "Quartier résidentiel populaire",
      "Centre commercial Leclerc",
      "Proche campus Illkirch",
      "Transport matchs et événements sportifs",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-koenigshoffen",
    name: "Koenigshoffen",
    fullName: "Strasbourg Koenigshoffen",
    description: "Taxi à Koenigshoffen, quartier occidental de Strasbourg. Service pour zones résidentielles, commerciales et administratives. Transport vers le centre, CHU Hautepierre et zones d'activités.",
    metaDescription: "Taxi Koenigshoffen Strasbourg. Quartier résidentiel ouest. Transport CPAM, courses quotidiennes. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 3, duration: "10 min" },
      gare: { km: 4, duration: "12 min" },
      aeroport: { km: 15, duration: "20 min" },
    },
    highlights: [
      "Quartier historique et résidentiel",
      "Proche CHU Civil et Hautepierre",
      "Centre administratif",
      "Accès A35 rapide",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-esplanade",
    name: "Esplanade",
    fullName: "Strasbourg Esplanade",
    description: "Service de taxi au quartier de l'Esplanade, cœur du campus universitaire de Strasbourg. Transport étudiant vers les facultés, bibliothèques universitaires et résidences. Service nocturne pour les sorties.",
    metaDescription: "Taxi Esplanade Strasbourg. Campus universitaire, facultés. Transport étudiant 24h/24, tarifs étudiants. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 2, duration: "8 min" },
      gare: { km: 3, duration: "10 min" },
      aeroport: { km: 14, duration: "18 min" },
    },
    highlights: [
      "Campus universitaire Esplanade",
      "Bibliothèque universitaire",
      "Résidences étudiantes Crous",
      "Proche Parlement Européen",
      "Transport nocturne étudiant",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-montagne-verte",
    name: "Montagne Verte",
    fullName: "Strasbourg Montagne Verte",
    description: "Taxi à la Montagne Verte, quartier résidentiel à l'ouest de Strasbourg. Service pour zones résidentielles et commerces de proximité. Transport vers le centre, CHU Hautepierre et gare.",
    metaDescription: "Taxi Montagne Verte Strasbourg. Quartier résidentiel ouest. Transport CPAM, courses. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 4, duration: "12 min" },
      gare: { km: 5, duration: "14 min" },
      aeroport: { km: 16, duration: "21 min" },
    },
    highlights: [
      "Quartier résidentiel calme",
      "Proche Cronenbourg et Koenigshoffen",
      "Transport vers CHU Hautepierre",
      "Commerces de proximité",
    ],
    tier: 2,
  },
  {
    slug: "strasbourg-neuhof",
    name: "Neuhof",
    fullName: "Strasbourg Neuhof",
    description: "Service de taxi au Neuhof, quartier au sud de Strasbourg. Desserte des zones résidentielles et équipements publics. Transport vers le centre, Neudorf et l'aéroport.",
    metaDescription: "Taxi Neuhof Strasbourg. Quartier sud, transport CPAM, courses quotidiennes. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 5, duration: "14 min" },
      gare: { km: 6, duration: "16 min" },
      aeroport: { km: 10, duration: "15 min" },
    },
    highlights: [
      "Quartier résidentiel sud",
      "Proche Neudorf et Meinau",
      "Transport vers établissements médicaux",
      "Accès A35",
    ],
    tier: 2,
  },
  {
    slug: "strasbourg-elsau",
    name: "Elsau",
    fullName: "Strasbourg Elsau",
    description: "Taxi à l'Elsau, quartier résidentiel au nord de Strasbourg. Service pour zones d'habitation et commerces. Transport vers le centre, la gare et les hôpitaux.",
    metaDescription: "Taxi Elsau Strasbourg. Quartier résidentiel nord. Transport CPAM, courses. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 4, duration: "12 min" },
      gare: { km: 5, duration: "14 min" },
      aeroport: { km: 16, duration: "21 min" },
    },
    highlights: [
      "Quartier résidentiel",
      "Proche Schiltigheim",
      "Commerces de proximité",
      "Transport scolaire disponible",
    ],
    tier: 2,
  },
  {
    slug: "strasbourg-petite-france",
    name: "Petite France",
    fullName: "Strasbourg Petite France",
    description: "Service de taxi à la Petite France, quartier touristique emblématique de Strasbourg. Prise en charge pour hôtels, restaurants et visites touristiques. Service premium pour touristes et visiteurs.",
    metaDescription: "Taxi Petite France Strasbourg. Quartier touristique UNESCO. Hôtels, restaurants, visites. Service premium 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 0.5, duration: "3 min" },
      gare: { km: 1.5, duration: "6 min" },
      aeroport: { km: 12, duration: "16 min" },
    },
    highlights: [
      "Quartier UNESCO maisons à colombages",
      "Ponts couverts et barrages Vauban",
      "Hôtels et restaurants gastronomiques",
      "Transferts touristiques",
      "Proche cathédrale",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-bourse",
    name: "Bourse",
    fullName: "Strasbourg Bourse",
    description: "Taxi au quartier de la Bourse, cœur administratif et commercial de Strasbourg. Desserte de la Place Broglie, de l'Opéra National du Rhin et des institutions. Transport professionnel vers la mairie, la préfecture et les administrations.",
    metaDescription: "Taxi Bourse Strasbourg. Place Broglie, Opéra, administrations. Transport professionnel 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 0.3, duration: "2 min" },
      gare: { km: 0.8, duration: "4 min" },
      aeroport: { km: 12, duration: "15 min" },
    },
    highlights: [
      "Place Broglie et Opéra National du Rhin",
      "Hôtel de Ville et Chambre de Commerce",
      "Quartier administratif central",
      "Commerces et restaurants haut de gamme",
      "Proche Place Kléber",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-republique",
    name: "République",
    fullName: "Strasbourg République",
    description: "Service de taxi au quartier de la République, zone institutionnelle prestigieuse. Desserte de la Place de la République, du Théâtre National, de la Préfecture et de la Bibliothèque Nationale. Transport professionnel et culturel.",
    metaDescription: "Taxi République Strasbourg. Place République, TNS, Préfecture. Service premium 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 1.5, duration: "6 min" },
      gare: { km: 1, duration: "5 min" },
      aeroport: { km: 13, duration: "16 min" },
    },
    highlights: [
      "Place de la République et jardins",
      "Théâtre National de Strasbourg (TNS)",
      "Préfecture du Bas-Rhin",
      "Bibliothèque Nationale et Universitaire",
      "Architecture wilhelmienne",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-gare",
    name: "Gare",
    fullName: "Strasbourg Quartier Gare",
    description: "Taxi au quartier de la Gare, pôle de transport central de Strasbourg. Prise en charge immédiate à la gare TGV/TER/ICE. Transferts vers hôtels, centre-ville et aéroport. Service bagages et assistance.",
    metaDescription: "Taxi Gare Strasbourg. Prise en charge TGV/TER/ICE immédiate. Transferts hôtels, aéroport. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 1, duration: "5 min" },
      gare: { km: 0, duration: "Sur place" },
      aeroport: { km: 13, duration: "16 min" },
    },
    highlights: [
      "Gare centrale TGV/TER/ICE",
      "Transferts immédiats",
      "Hôtels du quartier gare",
      "Service bagages volumineux",
      "Connexions internationales (Allemagne, Suisse)",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-wacken",
    name: "Wacken",
    fullName: "Strasbourg Wacken",
    description: "Service de taxi au Wacken, quartier des institutions européennes et du Parc des Expositions. Transport professionnel pour salons, congrès et événements. Desserte Parlement Européen et Palais de la Musique et des Congrès.",
    metaDescription: "Taxi Wacken Strasbourg. Parc Expo, PMC, institutions européennes. Transport professionnel congrès. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 4, duration: "11 min" },
      gare: { km: 5, duration: "13 min" },
      aeroport: { km: 16, duration: "21 min" },
    },
    highlights: [
      "Parc des Expositions Strasbourg",
      "Palais de la Musique et des Congrès (PMC)",
      "Parlement Européen",
      "Transport salons et congrès",
      "Service professionnel",
    ],
    tier: 1,
  },
  {
    slug: "strasbourg-contades",
    name: "Contades",
    fullName: "Strasbourg Contades",
    description: "Taxi au quartier des Contades, zone résidentielle élégante proche du centre. Desserte du parc des Contades, commerces et services. Transport vers le centre, gare et institutions.",
    metaDescription: "Taxi Contades Strasbourg. Quartier résidentiel élégant. Transport CPAM, courses. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 2, duration: "8 min" },
      gare: { km: 2, duration: "9 min" },
      aeroport: { km: 14, duration: "18 min" },
    },
    highlights: [
      "Parc des Contades",
      "Quartier résidentiel bourgeois",
      "Proche université et préfecture",
      "Commerces de standing",
    ],
    tier: 2,
  },
  {
    slug: "strasbourg-port-du-rhin",
    name: "Port du Rhin",
    fullName: "Strasbourg Port du Rhin",
    description: "Service de taxi au Port du Rhin, quartier en développement à la frontière allemande. Desserte du port autonome, zones d'activités et nouveaux quartiers résidentiels. Transport vers l'Allemagne (Kehl).",
    metaDescription: "Taxi Port du Rhin Strasbourg. Frontière allemande, port autonome. Transport vers Kehl, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 5, duration: "13 min" },
      gare: { km: 6, duration: "15 min" },
      aeroport: { km: 13, duration: "18 min" },
    },
    highlights: [
      "Port autonome de Strasbourg",
      "Frontière avec l'Allemagne (Kehl)",
      "Quartiers neufs en développement",
      "Transport transfrontalier",
    ],
    tier: 2,
  },
  {
    slug: "strasbourg-poteries",
    name: "Poteries",
    fullName: "Strasbourg Poteries",
    description: "Taxi aux Poteries, quartier résidentiel à l'ouest de Strasbourg proche du CHU Hautepierre. Service pour zones d'habitation et transport médical vers l'hôpital. Accès rapide au centre et à l'autoroute.",
    metaDescription: "Taxi Poteries Strasbourg. Proche CHU Hautepierre. Transport médical CPAM, courses. Disponible 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 5, duration: "14 min" },
      gare: { km: 6, duration: "16 min" },
      aeroport: { km: 17, duration: "23 min" },
    },
    highlights: [
      "Très proche CHU Hautepierre",
      "Quartier résidentiel",
      "Transport médical conventionné",
      "Accès A351",
    ],
    tier: 2,
  },
  {
    slug: "strasbourg-musau",
    name: "Musau",
    fullName: "Strasbourg Musau",
    description: "Service de taxi au Musau, quartier résidentiel entre Neudorf et Meinau. Desserte des zones d'habitation et commerces de proximité. Transport vers le centre, la gare et les établissements médicaux.",
    metaDescription: "Taxi Musau Strasbourg. Quartier résidentiel sud. Transport CPAM, courses quotidiennes. Réservation 24h/24. ☎ 07 53 14 53 71",
    distances: {
      centreville: { km: 4, duration: "12 min" },
      gare: { km: 5, duration: "14 min" },
      aeroport: { km: 11, duration: "16 min" },
    },
    highlights: [
      "Quartier résidentiel calme",
      "Entre Neudorf et Meinau",
      "Commerces de proximité",
      "Transport scolaire disponible",
    ],
    tier: 2,
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((zone) => zone.slug === slug);
}

export function getZonesByTier(tier: 1 | 2 | 3): Zone[] {
  return zones.filter((zone) => zone.tier === tier);
}

export function getAllCommunes(): Zone[] {
  return zones.filter((zone) => zone.postalCode && !zone.slug.startsWith("strasbourg-"));
}

export function getAllQuartiersStrasbourg(): Zone[] {
  return zones.filter((zone) => zone.slug.startsWith("strasbourg-"));
}

// Suggestions de zones proches pour maillage SEO
export function getRelatedZones(currentSlug: string, limit: number = 5): Zone[] {
  const currentZone = getZoneBySlug(currentSlug);
  if (!currentZone) return [];

  // Si c'est un quartier de Strasbourg, suggérer d'autres quartiers
  if (currentSlug.startsWith("strasbourg-")) {
    return getAllQuartiersStrasbourg()
      .filter((z) => z.slug !== currentSlug)
      .slice(0, limit);
  }

  // Si c'est Strasbourg ville, suggérer des communes proches
  if (currentSlug === "strasbourg") {
    return zones
      .filter((z) => z.tier === 1 && z.slug !== "strasbourg")
      .slice(0, limit);
  }

  // Pour les communes, suggérer des communes de tier similaire ou adjacent
  const sameTier = zones.filter(
    (z) => z.tier === currentZone.tier && z.slug !== currentSlug && z.postalCode
  );

  if (sameTier.length >= limit) {
    return sameTier.slice(0, limit);
  }

  // Si pas assez de zones du même tier, ajouter tier adjacent
  const adjacentTier = currentZone.tier === 1 ? 2 : currentZone.tier === 3 ? 2 : 1;
  const adjacentZones = zones.filter(
    (z) => z.tier === adjacentTier && z.slug !== currentSlug && z.postalCode
  );

  return [...sameTier, ...adjacentZones].slice(0, limit);
}
