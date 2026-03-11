import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  Phone,
  ArrowRight,
  Clock,
  Shield,
  CheckCircle,
  FileText,
  Zap,
  Lock,
  Eye,
  Luggage,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
  title: "Transport de Colis Express",
  description:
    "Livraison express de plis et colis à Strasbourg. Véhicule grand coffre pour colis volumineux. Documents urgents, livraison en main propre. Toutes distances.",
};

const services = [
  {
    icon: FileText,
    title: "Documents urgents",
    description:
      "Contrats, actes notariés, documents juridiques livrés en main propre.",
  },
  {
    icon: Lock,
    title: "Plis confidentiels",
    description:
      "Documents sensibles transportés en toute discrétion et sécurité.",
  },
  {
    icon: Luggage,
    title: "Colis volumineux",
    description:
      "Véhicule grand coffre pour vos colis volumineux et marchandises encombrantes.",
  },
  {
    icon: Zap,
    title: "Livraison express",
    description: "Enlèvement et livraison dans l'heure sur Strasbourg.",
  },
];

const advantages = [
  {
    icon: Eye,
    title: "Remise en main propre",
    description: "Vos documents sont remis directement au destinataire.",
  },
  {
    icon: Clock,
    title: "Rapidité",
    description: "Livraison express dans l'heure ou le jour même.",
  },
  {
    icon: Shield,
    title: "Confidentialité",
    description: "Discrétion totale pour vos envois sensibles.",
  },
  {
    icon: CheckCircle,
    title: "Confirmation",
    description: "Accusé de réception par SMS ou email.",
  },
];

const faqs = [
  {
    question: "Quels types de colis transportez-vous ?",
    answer:
      "Nous transportons tous types de documents (contrats, actes notariés, plis confidentiels) et colis jusqu'à 20kg. Pour les colis fragiles ou de valeur, nous assurons une prise en charge délicate et sécurisée.",
  },
  {
    question: "Quel est le délai de livraison express ?",
    answer:
      "Sur Strasbourg intra-muros, nous pouvons livrer dans l'heure suivant l'enlèvement. Pour l'Eurométropole, comptez 1h30 à 2h. Les délais exacts dépendent de l'adresse et du trafic.",
  },
  {
    question: "Comment savoir si mon colis a été livré ?",
    answer:
      "Vous recevez un SMS et/ou email de confirmation dès que votre colis est remis au destinataire. Nous pouvons également vous envoyer une photo de la signature si nécessaire.",
  },
  {
    question: "Proposez-vous la livraison en dehors de Strasbourg ?",
    answer:
      "Oui, nous livrons dans tout le Bas-Rhin et au-delà sur demande. Contactez-nous pour un devis personnalisé en fonction de la destination.",
  },
];

export default function TransportColisPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Transport de Colis Express Strasbourg",
          description: "Livraison express de plis et colis à Strasbourg. Véhicule grand coffre pour colis volumineux. Documents urgents, livraison en main propre. Toutes distances.",
          serviceType: "Courier Service",
          areaServed: "Strasbourg, Bas-Rhin, Alsace, toutes distances",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Transport de Colis", url: "/services/transport-colis" },
        ]}
      />
      {/* Hero with background image */}
      <div className="relative mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/vehicule/vehicule-urgences.png"
            alt="Taxi conventionné CPAM Strasbourg — transport médical"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-gold-light mb-4 inline-flex items-center gap-2">
              <Package className="w-4 h-4" />
              Livraison Express
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Transport de <span className="text-gold-400">colis express</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Livraison urgente pour vos documents et colis à
              Strasbourg et toutes distances. Véhicule grand coffre, rapidité, sécurité.
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-semibold transition-all duration-300 hover:bg-white hover:text-gold-400 active:scale-[0.98] min-h-12"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Types de transport */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Ce que nous transportons
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="card-premium">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nos avantages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Nos garanties
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="mb-16">
          <div className="card-premium max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Comment ça fonctionne ?
            </h2>
            <ul className="space-y-4">
              {[
                "Appelez-nous avec les détails de votre envoi",
                "Nous passons récupérer votre pli ou colis",
                "Livraison express au destinataire",
                "Confirmation de remise par SMS/email",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-400 text-black text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tarification */}
        <section className="mb-16">
          <div className="card-premium max-w-3xl mx-auto bg-gold-400/5 border-gold-400/30">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Tarification
            </h2>
            <p className="text-gray-600 mb-4">
              Le prix du transport de colis est calculé selon la distance et
              l&apos;urgence de la livraison. Contactez-nous pour un devis
              personnalisé.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                Devis gratuit et immédiat par téléphone
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                Tarif forfaitaire sur Strasbourg intra-muros
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                Facturation possible pour les entreprises
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gold-400/20 rounded-lg bg-surface-50 px-6 data-[state=open]:border-gold-400/40"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-gold-400 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="card-premium inline-block bg-gradient-to-br from-gold-400/10 to-transparent border-gold-400/40 py-8 px-8 sm:px-12">
            <Package className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Un envoi urgent ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Appelez-nous maintenant pour une livraison express.
            </p>
            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
