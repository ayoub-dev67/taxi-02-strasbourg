import ConventionneSection from "@/components/sections/ConventionneSection";
import {
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  Testimonials,
  FAQSection,
  CTASection,
  StatsCounter,
} from "@/components/sections";
import { generateFAQSchema } from "@/components/shared/SchemaMarkup";

const homepageFaqItems = [
  { question: "Comment réserver un taxi ?", answer: "Appelez le 07 53 14 53 71, envoyez un WhatsApp ou utilisez notre formulaire en ligne 24h/24. Confirmation par SMS." },
  { question: "Êtes-vous conventionné par la CPAM ?", answer: "Oui, Taxi 02 Strasbourg est conventionné Sécurité Sociale. Vos transports médicaux sont pris en charge sur prescription médicale. Nous gérons les démarches administratives." },
  { question: "Quels sont vos tarifs ?", answer: "Tarifs réglementés par la Préfecture du Bas-Rhin. Prise en charge 3,02€, puis 1,00€ à 2,84€/km selon l'horaire. Devis gratuit avant réservation." },
  { question: "Proposez-vous des transferts aéroport ?", answer: "Oui : Strasbourg-Entzheim (20 min), Bâle-Mulhouse (1h15), Francfort (2h). Suivi de vol en temps réel, attente gratuite." },
  { question: "Comment fonctionne le transport médical ?", answer: "Munissez-vous d'une prescription médicale de transport. Nous prenons en charge toutes les démarches CPAM : consultations, dialyse, chimiothérapie, hospitalisations." },
  { question: "Quels modes de paiement acceptez-vous ?", answer: "CB (Visa, Mastercard), espèces, Apple Pay, Google Pay. Facturation mensuelle pour les entreprises. Transport CPAM : aucune avance de frais." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(homepageFaqItems)) }}
      />
      <HeroSection />
      <ConventionneSection />
      <ServicesSection />
      <StatsCounter />
      <WhyChooseUsSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
