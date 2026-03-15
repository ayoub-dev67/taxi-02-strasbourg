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
    default: "Taxi 02 Strasbourg | Taxi Conventionné CPAM & Transport 24h/24",
    template: "%s | Taxi 02 Strasbourg",
  },
  description: "Taxi 02 Strasbourg — Transport CPAM conventionné, transferts aéroport Entzheim & gare, longue distance, Europa-Park. Réservation 24h/24, 7j/7. Appelez le 07 53 14 53 71.",
  alternates: {
    canonical: "https://www.taxi-02-strasbourg.fr",
  },
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'Taxi 02 Strasbourg | Taxi & Transport CPAM',
    description: 'Taxi 02 Strasbourg — Transport CPAM conventionné, aéroport, gare, longue distance et EuropaPark. Réservation 24h/24.',
    url: 'https://www.taxi-02-strasbourg.fr',
    siteName: 'Taxi 02 Strasbourg',
    images: [
      {
        url: 'https://www.taxi-02-strasbourg.fr/images/vehicule/vehicule-parlement-europeen.png',
        width: 1200,
        height: 630,
        alt: 'Taxi 02 Strasbourg — Flotte de taxis devant le Parlement Européen',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi 02 Strasbourg | Taxi & Transport CPAM',
    description: 'Taxi 02 Strasbourg — Transport CPAM conventionné, aéroport, gare, longue distance et EuropaPark.',
    images: ['https://www.taxi-02-strasbourg.fr/images/vehicule/vehicule-parlement-europeen.png'],
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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
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
