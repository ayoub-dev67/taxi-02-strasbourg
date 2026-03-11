"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Phone,
  ArrowRight,
  CheckCircle,
  FileText,
  CreditCard,
  BarChart3,
  Users,
  Clock,
  Send,
  Loader2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const advantages = [
  {
    icon: FileText,
    title: "Facturation mensuelle",
    description:
      "Recevez une facture unique en fin de mois pour toutes vos courses. Simplifiez votre comptabilité.",
  },
  {
    icon: CreditCard,
    title: "Tarifs préférentiels",
    description:
      "Bénéficiez de tarifs négociés en fonction de votre volume de courses mensuel.",
  },
  {
    icon: BarChart3,
    title: "Reporting détaillé",
    description:
      "Suivez vos dépenses avec des rapports détaillés par collaborateur, service ou projet.",
  },
  {
    icon: Users,
    title: "Multi-utilisateurs",
    description:
      "Plusieurs collaborateurs peuvent réserver au nom de l'entreprise.",
  },
  {
    icon: Clock,
    title: "Réservation simplifiée",
    description:
      "Ligne directe et prioritaire pour vos réservations urgentes.",
  },
  {
    icon: CheckCircle,
    title: "Service dédié",
    description:
      "Un interlocuteur unique pour gérer votre compte entreprise.",
  },
];

const faqs = [
  {
    question: "Comment ouvrir un compte entreprise ?",
    answer:
      "Remplissez le formulaire ci-dessous ou contactez-nous par téléphone. Nous créons votre compte en 24h et vous envoyons vos identifiants pour réserver facilement.",
  },
  {
    question: "Quels sont les tarifs pour les entreprises ?",
    answer:
      "Les tarifs dépendent de votre volume de courses mensuel. À partir de 10 courses par mois, vous bénéficiez d'une remise sur les tarifs standard. Contactez-nous pour un devis personnalisé.",
  },
  {
    question: "Comment fonctionne la facturation mensuelle ?",
    answer:
      "Toutes les courses du mois sont regroupées sur une seule facture, envoyée au début du mois suivant. Le paiement peut se faire par virement ou prélèvement automatique.",
  },
  {
    question: "Plusieurs collaborateurs peuvent-ils réserver ?",
    answer:
      "Oui, vous pouvez autoriser autant de collaborateurs que nécessaire à réserver au nom de votre entreprise. Chaque réservation est tracée et apparaît sur le reporting mensuel.",
  },
];

export default function EntreprisePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    entreprise: "",
    contact: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.contact,
          email: formData.email,
          telephone: formData.telephone,
          sujet: `Demande entreprise - ${formData.entreprise}`,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Erreur");

      toast.success("Demande envoyée ! Nous vous recontactons rapidement.");
      setFormData({
        entreprise: "",
        contact: "",
        email: "",
        telephone: "",
        message: "",
      });
    } catch {
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      <SchemaMarkup
        customFaq={faqs}
        service={{
          name: "Service Taxi Entreprise Strasbourg",
          description: "Solutions de transport taxi sur mesure pour les entreprises. Compte dédié, facturation mensuelle, tarifs négociés.",
          serviceType: "Corporate Transport",
          areaServed: "Strasbourg, Alsace, Grand Est",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Service Entreprise", url: "/services/entreprise" },
        ]}
      />
      {/* Hero with background image */}
      <div className="relative mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/vehicule/vehicule-parlement-europeen.png"
            alt="Taxi 02 Strasbourg — flotte devant le Parlement Européen"
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
              <Building2 className="w-4 h-4" />
              Service Entreprise
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Service <span className="text-gold-400">Entreprise</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Solutions de transport sur mesure pour les professionnels. Compte
              dédié, facturation mensuelle, tarifs négociés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#formulaire"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </a>
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
        {/* Avantages */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Les avantages du compte entreprise
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="card-premium">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="mb-16">
          <div className="card-premium max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Idéal pour
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Déplacements de vos collaborateurs",
                "Accueil de clients et partenaires",
                "Transferts aéroport / gare",
                "Livraisons urgentes de documents",
                "Événements d'entreprise",
                "Déplacements réguliers",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Formulaire */}
        <section id="formulaire" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Demandez votre devis entreprise
            </h2>
            <div className="divider-gold" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="card-premium max-w-2xl mx-auto space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="entreprise" className="text-foreground">
                  Nom de l&apos;entreprise *
                </Label>
                <Input
                  id="entreprise"
                  required
                  value={formData.entreprise}
                  onChange={(e) =>
                    setFormData({ ...formData, entreprise: e.target.value })
                  }
                  className="input-premium"
                  placeholder="Votre entreprise"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-foreground">
                  Nom du contact *
                </Label>
                <Input
                  id="contact"
                  required
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="input-premium"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email professionnel *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="input-premium"
                  placeholder="email@entreprise.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone" className="text-foreground">
                  Téléphone *
                </Label>
                <Input
                  id="telephone"
                  type="tel"
                  required
                  value={formData.telephone}
                  onChange={(e) =>
                    setFormData({ ...formData, telephone: e.target.value })
                  }
                  className="input-premium"
                  placeholder="01 23 45 67 89"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Décrivez vos besoins
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="input-premium min-h-[120px] resize-none"
                placeholder="Volume estimé de courses, types de trajets, besoins spécifiques..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-gold w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </section>

        {/* FAQ */}
        <section className="mt-16">
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
      </div>
    </div>
  );
}
