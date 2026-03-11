import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Baby,
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  MessageCircle,
  Heart,
  School,
  Music,
  Users,
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
  title: "Transport d'Enfants et Scolaire",
  description:
    "Transport scolaire et familial à Strasbourg. Taxi avec grand coffre pour poussettes et équipements. Siège auto fourni, école, collège, lycée. Réservez votre taxi enfant.",
};

const services = [
  {
    icon: School,
    title: "Transport scolaire",
    description:
      "Transport quotidien vers l'école, le collège ou le lycée. Horaires fixes et réguliers, prise en charge sécurisée.",
  },
  {
    icon: Music,
    title: "Activités extra-scolaires",
    description:
      "Sport, musique, cours particuliers... Nous accompagnons vos enfants à leurs activités.",
  },
  {
    icon: Users,
    title: "Garde alternée",
    description:
      "Transport entre les domiciles des deux parents en toute sérénité.",
  },
  {
    icon: Luggage,
    title: "Grand coffre familles",
    description:
      "Véhicule grand coffre adapté aux familles : poussettes, sièges auto, bagages enfants.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Chauffeur de confiance",
    description:
      "Chauffeur expérimenté, patient et habitué au transport d'enfants.",
  },
  {
    icon: Baby,
    title: "Siège auto adapté",
    description:
      "Siège bébé ou rehausseur fourni gratuitement selon l'âge de l'enfant.",
  },
  {
    icon: MessageCircle,
    title: "Communication parents",
    description:
      "SMS de confirmation au départ et à l'arrivée. Tranquillité assurée.",
  },
  {
    icon: Clock,
    title: "Ponctualité",
    description:
      "Horaires respectés à la minute. Jamais de retard pour l'école.",
  },
];

const faqs = [
  {
    question: "Fournissez-vous des sièges auto pour les enfants ?",
    answer:
      "Oui, nous fournissons gratuitement des sièges auto et rehausseurs adaptés à l'âge et au poids de votre enfant. Précisez l'âge de votre enfant lors de la réservation pour que le véhicule soit équipé.",
  },
  {
    question: "Comment êtes-vous informé du départ et de l'arrivée de mon enfant ?",
    answer:
      "Vous recevez un SMS automatique lorsque votre enfant monte dans le véhicule et un autre à son arrivée à destination. Vous pouvez également nous contacter à tout moment pendant le trajet.",
  },
  {
    question: "Proposez-vous des forfaits pour les trajets scolaires réguliers ?",
    answer:
      "Oui, nous proposons des forfaits mensuels avantageux pour les trajets scolaires quotidiens. Le tarif dépend de la distance et de la fréquence. Contactez-nous pour un devis personnalisé.",
  },
  {
    question: "Mon enfant peut-il voyager seul dans le taxi ?",
    answer:
      "Oui, les enfants peuvent voyager seuls à partir de 6 ans (en accord avec les parents). Le chauffeur veille à ce que l'enfant soit bien remis à l'adulte responsable à destination.",
  },
];

export default function TransportEnfantsPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Transport Scolaire et Familial Strasbourg",
          description: "Transport scolaire et familial sécurisé à Strasbourg. École, collège, lycée, activités. Véhicule grand coffre pour poussettes. Siège auto fourni gratuitement. Toutes distances.",
          serviceType: "Child Transport",
          areaServed: "Strasbourg, Eurométropole, Alsace, toutes distances",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Transport d'Enfants", url: "/services/transport-enfants" },
        ]}
      />
      {/* Hero with background image */}
      <div className="relative mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/vehicule/vehicule-gare.png"
            alt="Taxi Strasbourg gare centrale — transfert rapide"
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
              <Baby className="w-4 h-4" />
              Transport Enfants
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Transport d&apos;<span className="text-gold-400">enfants</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Transport scolaire et familial sécurisé. École, collège, lycée, activités,
              garde alternée. Véhicule grand coffre pour poussettes, siège auto fourni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservation" className="btn-gold inline-flex items-center justify-center gap-2">
                Réserver un transport
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneLink}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-semibold transition-all duration-300 hover:bg-white hover:text-gold-400 active:scale-[0.98] min-h-12"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Nos services
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

        {/* Garanties */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Nos garanties
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee) => (
              <div key={guarantee.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
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
                "Contactez-nous pour définir les trajets et horaires",
                "Nous mettons en place un planning adapté à vos besoins",
                "Votre enfant est pris en charge en toute sécurité",
                "Vous recevez un SMS à chaque étape du trajet",
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

        {/* Tarifs */}
        <section className="mb-16">
          <div className="card-premium max-w-3xl mx-auto bg-gold-400/5 border-gold-400/30">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Tarification
            </h2>
            <p className="text-gray-600 mb-4">
              Pour les trajets réguliers (école, activités), nous proposons des
              forfaits avantageux. Contactez-nous pour un devis personnalisé.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                Siège auto / rehausseur fourni gratuitement
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                Véhicule grand coffre pour poussettes et équipements
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                Forfaits mensuels pour trajets scolaires réguliers
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                Tarifs dégressifs selon le nombre de trajets
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
            <Baby className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Besoin d&apos;un transport pour votre enfant ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Contactez-nous pour discuter de vos besoins. Service fiable et
              sécurisé.
            </p>
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver un transport
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
