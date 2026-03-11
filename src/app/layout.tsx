import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header, Footer, MobileNavigation, FloatingButtons } from "@/components/layout";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { PromoBanner } from "@/components/shared/PromoBanner";
import { ExitIntentPopup } from "@/components/shared/ExitIntentPopup";
import { ServiceWorkerRegistration } from "@/components/shared/ServiceWorkerRegistration";
import { Analytics } from "@/components/shared/Analytics";
import { InitialLoader, CustomCursor } from "@/components/animations";
import { siteConfig } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Taxi 02 Strasbourg — Taxi Conventionné CPAM Strasbourg 24h/24",
    template: "%s",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: "Taxi 02 Strasbourg — Taxi Conventionné CPAM Strasbourg",
    description: "Taxi conventionné CPAM Strasbourg. Transport médical, transferts aéroport et gare, longue distance. Disponible 24h/24.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/photos/vehicule-1.jpg",
        width: 1200,
        height: 630,
        alt: "Taxi 02 Strasbourg — Taxi conventionné CPAM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi 02 Strasbourg — Taxi Conventionné CPAM Strasbourg",
    description: "Taxi conventionné CPAM Strasbourg. Transport médical, transferts aéroport et gare, longue distance. Disponible 24h/24.",
    images: ["/images/photos/vehicule-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/icon-192x192.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/icon.svg", color: "#7A3345" },
    ],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "buNnT55I-w1yWpxoFi57IEXB6yGMlPBwyGANCQv6750",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF9F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="FR-67" />
        <meta name="geo.placename" content="Strasbourg" />
        <meta name="geo.position" content="48.5734;7.7521" />
        <meta name="ICBM" content="48.5734, 7.7521" />

        {/* Schema.org structured data */}
        <SchemaMarkup />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="skip-to-main"
        >
          Aller au contenu principal
        </a>
        <PromoBanner />
        <Header />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>{children}</main>
        <Footer />
        <MobileNavigation />
        <FloatingButtons />
        <ExitIntentPopup />
        <Toaster position="top-center" richColors />
        <ServiceWorkerRegistration />
        <Analytics />
        <InitialLoader />
        <CustomCursor />
      </body>
    </html>
  );
}
