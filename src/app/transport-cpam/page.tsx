import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Phone,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Heart,
  Activity,
  Pill,
  Building2,
  FileText,
  Calendar,
  Car,
  CreditCard,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Transport CPAM Strasbourg — Taxi Conventionné Sécurité Sociale | Taxi 02 Strasbourg",
  description:
    "Transport médical conventionné CPAM à Strasbourg. Taxi VSL agréé Sécurité Sociale : dialyse, chimiothérapie, radiothérapie, consultations. Prise en charge directe, rien à avancer. Taxi 02 Strasbourg, disponible 24h/24.",
};

const transportTypes = [
  {
    icon: Activity,
    title: "Dialyse",
    description:
      "Transport régulier vers les centres de dialyse de Strasbourg et du Bas-Rhin. Planning adapté à vos séances.",
  },
  {
    icon: Pill,
    title: "Chimiothérapie",
    description:
      "Accompagnement bienveillant pour vos séances de chimio aux Hôpitaux Universitaires de Strasbourg.",
  },
  {
    icon: Heart,
    title: "Radiothérapie",
    description:
      "Transport quotidien pendant votre traitement. Ponctualité et régularité assurées.",
  },
  {
    icon: Stethoscope,
    title: "Consultations spécialisées",
    description:
      "Rendez-vous chez spécialistes, médecins, examens médicaux dans toute l'Eurométropole.",
  },
  {
    icon: Building2,
    title: "Hospitalisations",
    description:
      "Entrées et sorties d'hôpital, transferts inter-établissements. Aide au déplacement incluse.",
  },
  {
    icon: FileText,
    title: "Rééducation & Kinésithérapie",
    description:
      "Transport vers les centres de rééducation et cabinets de kinésithérapie de la région.",
  },
];

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Prescription médicale",
    description:
      "Votre médecin vous délivre un bon de transport (Cerfa) indiquant le mode de transport prescrit (taxi/VSL).",
  },
  {
    number: 2,
    icon: Phone,
    title: "Réservation",
    description:
      "Contactez Taxi 02 Strasbourg par téléphone ou en ligne. Nous organisons votre transport selon vos besoins et horaires.",
  },
  {
    number: 3,
    icon: Car,
    title: "Transport sécurisé",
    description:
      "Notre chauffeur vous accompagne à votre rendez-vous médical en toute sécurité, confort et ponctualité.",
  },
  {
    number: 4,
    icon: CreditCard,
    title: "Facturation directe CPAM",
    description:
      "Nous facturons directement la Sécurité Sociale. Vous n'avez rien à avancer ni aucun formulaire à remplir.",
  },
];

const advantages = [
  "Taxi conventionné agréé par la CPAM du Bas-Rhin",
  "Prise en charge à 65% par la Sécurité Sociale (100% en ALD)",
  "Facturation directe : vous n'avancez rien",
  "Véhicule adapté aux personnes à mobilité réduite (PMR)",
  "Ponctualité garantie pour tous vos rendez-vous médicaux",
  "Disponible 24h/24 et 7j/7, y compris jours fériés",
  "Chauffeur formé au transport sanitaire",
  "Prise en charge à domicile et accompagnement personnalisé",
];

const faqs = [
  {
    question: "Qu'est-ce qu'un taxi conventionné CPAM ?",
    answer:
      "Un taxi conventionné est un véhicule agréé par la Caisse Primaire d'Assurance Maladie (CPAM) pour le transport sanitaire de patients. Taxi 02 Strasbourg dispose de cet agrément, ce qui signifie que vos frais de transport médical peuvent être pris en charge par la Sécurité Sociale sur présentation d'une prescription médicale.",
  },
  {
    question: "Comment obtenir un bon de transport ?",
    answer:
      "La prescription médicale de transport (bon de transport Cerfa) est délivrée par votre médecin traitant ou le médecin hospitalier. Elle doit mentionner le mode de transport adapté à votre état de santé. Demandez-la lors de votre consultation ou à votre sortie d'hospitalisation.",
  },
  {
    question: "Quels transports sont pris en charge à 100% ?",
    answer:
      "Les transports liés à une ALD (Affection Longue Durée), les hospitalisations, les transports d'urgence et ceux liés à un accident du travail sont généralement pris en charge à 100%. Pour les autres cas, la Sécurité Sociale rembourse 65% et votre mutuelle peut couvrir le reste.",
  },
  {
    question: "Puis-je choisir mon taxi conventionné ?",
    answer:
      "Oui, vous êtes libre de choisir le taxi conventionné de votre choix. Taxi 02 Strasbourg assure tous les transports médicaux conventionnés dans l'Eurométropole de Strasbourg et dans tout le Bas-Rhin.",
  },
];

export default function TransportCPAMPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Transport Médical Conventionné CPAM Strasbourg",
          description:
            "Taxi conventionné CPAM pour transports médicaux à Strasbourg : dialyse, chimiothérapie, consultations, hospitalisations. Prise en charge Sécurité Sociale.",
          serviceType: "Medical Transport",
          areaServed: "Strasbourg, Eurométropole, Bas-Rhin, Alsace",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Transport CPAM", url: "/transport-cpam" },
        ]}
      />

      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Conventionné CPAM
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Transport médical{" "}
            <span className="text-gold-gradient">conventionné CPAM</span> à
            Strasbourg
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Taxi 02 Strasbourg est votre taxi conventionné par la Sécurité
            Sociale pour tous vos déplacements médicaux dans l&apos;Eurométropole de
            Strasbourg et le Bas-Rhin. Grâce à notre agrément CPAM, vos frais
            de transport sont pris en charge directement par l&apos;Assurance Maladie
            sur prescription médicale. Dialyse, chimiothérapie, radiothérapie,
            consultations spécialisées, hospitalisations : nous assurons chaque
            trajet avec ponctualité, confort et bienveillance. Vous n&apos;avez rien
            à avancer, nous nous occupons de toutes les formalités
            administratives avec votre caisse d&apos;assurance maladie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver un transport médical
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="btn-gold-outline inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mt-12 mx-auto max-w-3xl rounded-2xl overflow-hidden aspect-video">
          <Image
            src="/images/vehicule/vehicule-urgences.jpg"
            alt="Taxi conventionné CPAM Strasbourg — transport médical VSL"
            fill
            style={{ objectFit: 'cover' }}
            priority={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Avantages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Pourquoi choisir Taxi 02 Strasbourg pour vos transports CPAM ?
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3 p-4">
                <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Types de transports */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Transports médicaux pris en charge
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportTypes.map((type) => (
              <div key={type.title} className="card-premium text-center">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Comment fonctionne le remboursement Sécurité Sociale ?
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="card-premium relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-400 text-black font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                  <step.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Questions fréquentes sur le transport CPAM
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="card-premium inline-block bg-gradient-to-br from-gold-400/10 to-transparent border-gold-400/40 py-8 px-8 sm:px-12">
            <Calendar className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Besoin d&apos;un transport médical conventionné ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Appelez Taxi 02 Strasbourg dès maintenant. Nous nous occupons de
              toutes les formalités avec la CPAM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
              <Link
                href="/reservation"
                className="btn-gold-outline inline-flex items-center justify-center gap-2"
              >
                Réserver en ligne
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
