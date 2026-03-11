"use client";

import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, Award, Luggage, Route } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Transport CPAM sans avance de frais",
    description:
      "Taxi conventionné Assurance Maladie. Sur prescription médicale, vos frais de transport sont pris en charge directement par la Sécu.",
  },
  {
    icon: Clock,
    title: "Réactivité 24h/24",
    description:
      "Disponible à toute heure, même les week-ends et jours fériés. Un appel suffit pour une prise en charge rapide à Strasbourg.",
  },
  {
    icon: Luggage,
    title: "Flotte récente & confortable",
    description:
      "Véhicules Toyota et DS récents, climatisés, grand coffre. Idéal pour vos bagages, équipements médicaux ou fauteuil roulant pliant.",
  },
  {
    icon: CreditCard,
    title: "Tarifs transparents",
    description:
      "Tarifs officiels réglementés par la Préfecture du Bas-Rhin. Aucune mauvaise surprise — le compteur fait foi.",
  },
  {
    icon: Route,
    title: "Strasbourg & toute l'Alsace",
    description:
      "Bas-Rhin, Haut-Rhin, départs vers Paris, Lyon, Francfort. Taxi 02 vous accompagne partout, sans limite de distance.",
  },
  {
    icon: Award,
    title: "Chauffeur professionnel agréé",
    description:
      "Carte professionnelle préfectorale, véhicule contrôlé, assurance RC Pro. Votre sécurité est notre priorité absolue.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-premium bg-surface-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-gold mb-4 inline-block"
          >
            Pourquoi Nous Choisir
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Ce qui fait la <span className="section-title-gold">différence avec Taxi 02</span>
          </motion.h2>
          <div className="divider-gold" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-gold-400" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
