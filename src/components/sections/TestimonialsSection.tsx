"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mohamed A.",
    initials: "MA",
    rating: 5,
    location: "Strasbourg",
    type: "Transport CPAM",
    text: "Chauffeur ponctuel et très professionnel. Ma prise en charge CPAM s'est faite sans aucune démarche de ma part. Je recommande vivement.",
    date: "Janvier 2025",
  },
  {
    id: 2,
    name: "Nathalie R.",
    initials: "NR",
    rating: 5,
    location: "Schiltigheim",
    type: "Transfert aéroport",
    text: "Taxi 02 m'a accompagnée à l'aéroport de Bâle-Mulhouse à 4h du matin. Ponctuel, véhicule impeccable, trajet très agréable. Merci !",
    date: "Février 2025",
  },
  {
    id: 3,
    name: "Karim B.",
    initials: "KB",
    rating: 5,
    location: "Illkirch",
    type: "Course standard",
    text: "Excellent service, réponse rapide au téléphone et départ immédiat. Le véhicule est récent et très propre. Un chauffeur comme on en voit peu.",
    date: "Mars 2025",
  },
  {
    id: 4,
    name: "Sophie L.",
    initials: "SL",
    rating: 5,
    location: "Bischheim",
    type: "Transport médical",
    text: "Accompagnement au CHU de Strasbourg. Le chauffeur était patient, aidant et très humain. Exactement ce dont j'avais besoin.",
    date: "Janvier 2025",
  },
  {
    id: 5,
    name: "Rachid M.",
    initials: "RM",
    rating: 5,
    location: "Hœnheim",
    type: "Longue distance",
    text: "Trajet Strasbourg–Paris en toute sérénité. Prix correct, conduite douce, ponctuel à la minute. Je referai appel à Taxi 02 sans hésitation.",
    date: "Avril 2025",
  },
  {
    id: 6,
    name: "Claire D.",
    initials: "CD",
    rating: 5,
    location: "Strasbourg",
    type: "EuropaPark",
    text: "Transfert aller-retour pour EuropaPark avec mes enfants. Super expérience, chauffeur sympa et à l'heure. Les enfants ont adoré !",
    date: "Février 2025",
  },
];

// Logo Google SVG
const GoogleLogo = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive: adjust cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-4">
            <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            Avis clients
          </div>

          {/* Titre */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Ils ont choisi Taxi 02 Strasbourg
          </h2>

          {/* Sous-titre */}
          <p className="text-gray-600 mb-4">
            6 avis • Note moyenne 5/5
          </p>

          {/* Séparateur bordeaux */}
          <div className="w-20 h-1 bg-gold-400 mx-auto rounded-full"></div>
        </div>

        {/* Carrousel Container */}
        <div className="relative max-w-7xl mx-auto mb-12">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white border-2 border-gold-400 flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gold-400 shadow-lg"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white border-2 border-gold-400 flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gold-400 shadow-lg"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carrousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 h-full relative">
                    {/* Guillemets décoratifs */}
                    <div className="absolute top-4 left-4 text-6xl text-gold-400/10 font-serif leading-none">
                      «
                    </div>

                    {/* En-tête: Avatar + Nom + Badge Google */}
                    <div className="flex items-start gap-3 mb-4 relative z-10">
                      {/* Avatar avec initiales */}
                      <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {testimonial.initials}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h3>
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-xs">
                            <GoogleLogo className="w-3 h-3" />
                            <span className="text-gray-700 font-medium">
                              Google
                            </span>
                          </div>
                        </div>
                        {/* Étoiles */}
                        <div className="flex items-center gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-warm-300 fill-warm-300"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Texte de l'avis */}
                    <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                      {testimonial.text}
                    </p>

                    {/* Footer: Badge vérifié + date */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Avis Google vérifié</span>
                      </div>
                      <span>•</span>
                      <span>{testimonial.date}</span>
                    </div>

                    {/* Guillemet fermant décoratif */}
                    <div className="absolute bottom-4 right-4 text-6xl text-gold-400/10 font-serif leading-none">
                      »
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gold-400"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Aller au groupe d'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Barre de stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-warm-300 fill-warm-300" />
              ))}
            </div>
            <p className="text-2xl font-bold text-foreground">5/5</p>
            <p className="text-sm text-gray-600">Note sur Google</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-foreground mb-2">6</p>
            <p className="text-sm text-gray-600">avis clients</p>
          </div>
        </div>

        {/* Texte explicatif */}
          <p className="text-center text-xs text-gray-400 mt-4">
            Les avis présentés sont des témoignages clients recueillis directement.
          </p>
      </div>
    </section>
  );
}
