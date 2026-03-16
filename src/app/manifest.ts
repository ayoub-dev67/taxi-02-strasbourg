import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taxi 02 Strasbourg",
    short_name: "Taxi 02",
    description:
      "Taxi conventionné CPAM à Strasbourg. Transport médical, transferts aéroport et gare, longue distance. Disponible 24h/24.",
    start_url: "/",
    display: "standalone",
    background_color: "#1B3A6B",
    theme_color: "#1B3A6B",
    orientation: "portrait",
    scope: "/",
    lang: "fr",
    categories: ["transportation", "travel", "business"],
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
      { src: '/icons/icon-192x192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { src: '/icons/icon-512x512.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    shortcuts: [
      {
        name: "Réserver un taxi",
        short_name: "Réserver",
        description: "Réserver un taxi maintenant",
        url: "/reservation",
        icons: [{ src: "/icons/icon-192x192.svg", sizes: "96x96" }],
      },
      {
        name: "Appeler",
        short_name: "Appeler",
        description: "Appeler Taxi 02 Strasbourg",
        url: "tel:+33753145371",
        icons: [{ src: "/icons/icon-192x192.svg", sizes: "96x96" }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
