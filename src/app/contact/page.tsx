"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, Loader2, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const { trackContactFormSubmitted, trackPhoneClick, trackWhatsAppClick } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erreur");

      trackContactFormSubmitted({ subject: formData.sujet || "Non spécifié" });
      toast.success("Message envoyé avec succès !");
      setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" });
    } catch {
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-block">Contact</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Contactez-<span className="text-gold-gradient">nous</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Une question ? Besoin d&apos;un devis ? Nous sommes à votre écoute 24h/24.
          </p>
          <div className="divider-gold mt-8" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                <a
                  href={`tel:${siteConfig.contact.phoneLink}`}
                  className="card-premium flex items-center gap-4 hover:border-gold-400/50"
                  onClick={() => trackPhoneClick("contact_page")}
                >
                  <div className="w-12 h-12 rounded-lg bg-gold-400/8 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Téléphone</p>
                    <p className="text-foreground font-semibold text-lg">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium flex items-center gap-4 hover:border-[#25D366]/50"
                  onClick={() => trackWhatsAppClick("contact_page")}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">WhatsApp</p>
                    <p className="text-foreground font-semibold text-lg">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="card-premium flex items-center gap-4 hover:border-gold-400/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold-400/8 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <p className="text-foreground font-semibold">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>

                <div className="card-premium flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/8 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Zone d&apos;activité</p>
                    <p className="text-foreground font-semibold">
                      {siteConfig.location.city}, {siteConfig.location.department}
                    </p>
                  </div>
                </div>

                <div className="card-premium flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/8 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Disponibilité</p>
                    <p className="text-foreground font-semibold">
                      {siteConfig.hours.open} - {siteConfig.hours.days}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} className="card-premium space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nom" className="text-foreground">Nom *</Label>
                  <Input
                    id="nom"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="input-premium"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-premium"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telephone" className="text-foreground">Téléphone</Label>
                  <Input
                    id="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    className="input-premium"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sujet" className="text-foreground">Sujet</Label>
                  <Input
                    id="sujet"
                    value={formData.sujet}
                    onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                    className="input-premium"
                    placeholder="Objet de votre message"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-premium min-h-[150px] resize-none"
                  placeholder="Votre message..."
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
                    Envoyer
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Photo section - Confiance et proximité */}
        <div className="mt-16">
          <div className="card-premium max-w-5xl mx-auto overflow-hidden p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="p-6 order-2 md:order-1">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  À votre service depuis 6 ans
                </h3>
                <p className="text-gray-600 mb-3">
                  Basé à Strasbourg et desservant toute l'Eurométropole, Taxi 02 Strasbourg est votre partenaire de confiance pour tous vos déplacements.
                </p>
                <p className="text-gray-600">
                  Disponible 24h/24 et 7j/7, nous répondons rapidement à vos demandes de transport, qu'il s'agisse de courses quotidiennes ou de trajets médicaux conventionnés CPAM.
                </p>
              </div>
              <div className="relative h-64 md:h-80 order-1 md:order-2">
                <Image
                  src="/images/photos/enseigne-taxi.jpg"
                  alt="Taxi 02 Strasbourg — Votre taxi de confiance à Strasbourg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
