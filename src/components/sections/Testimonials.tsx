"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  initials: string;
  city: string;
  rating: number;
  date: string;
  type: string;
  text: string;
}

// Vrais avis Google - Note moyenne 5.0/5 sur 10 avis
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kaoutar I.",
    initials: "KI",
    city: "Strasbourg",
    rating: 5,
    date: "Janvier 2025",
    type: "Transport médical",
    text: "Je note cinq étoiles pour ce trajet qui s'est super bien passé. La prise en charge a été rapide. Le chauffeur est très ponctuel et respectueux.",
  },
  {
    id: 2,
    name: "Hayat G.",
    initials: "HG",
    city: "Strasbourg",
    rating: 5,
    date: "Février 2025",
    type: "Course standard",
    text: "Service au Top ! Chauffeur très professionnel, ponctuel, véhicule agréable et propre ! Je recommande vivement.",
  },
  {
    id: 3,
    name: "Kim N.",
    initials: "KN",
    city: "Strasbourg",
    rating: 5,
    date: "Février 2025",
    type: "Course standard",
    text: "Chauffeur ponctuel et sympathique, voiture propre et confortable. Très bonne expérience, je recommande !",
  },
  {
    id: 4,
    name: "Sara S.",
    initials: "SS",
    city: "Eurométropole",
    rating: 5,
    date: "Janvier 2024",
    type: "Course standard",
    text: "Belle expérience avec ce taxi ! Très spacieux, agréable, ponctuel. N'hésitez pas c'est le chauffeur qu'il vous faut.",
  },
  {
    id: 5,
    name: "Bilel B.",
    initials: "BB",
    city: "Strasbourg",
    rating: 5,
    date: "Février 2025",
    type: "Course standard",
    text: "Service au top ! Chauffeur ponctuel, courtois et véhicule impeccable. Je recommande.",
  },
  {
    id: 6,
    name: "Amanda L.",
    initials: "AL",
    city: "Strasbourg",
    rating: 5,
    date: "Février 2025",
    type: "Transport médical",
    text: "Chauffeur agréable, souriant, ponctuel. Merci pour tout le réconfort que vous apportez aux clients et aux patients.",
  },
  {
    id: 7,
    name: "Karim K.",
    initials: "KK",
    city: "Strasbourg",
    rating: 5,
    date: "Août 2024",
    type: "Course standard",
    text: "Chauffeur professionnel, ponctuel, véhicule irréprochable. Je recommande.",
  },
  {
    id: 8,
    name: "Moiz F.",
    initials: "MF",
    city: "Strasbourg",
    rating: 5,
    date: "Mars 2025",
    type: "Course standard",
    text: "Excellent chauffeur, au top !",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-gold-400 fill-gold-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card-premium h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        {/* Avatar with initials */}
        <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
          <span className="text-gold-400 font-semibold text-sm">
            {testimonial.initials}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-foreground font-medium truncate">
              {testimonial.name}
            </h4>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm truncate">
              {testimonial.city}
            </span>
          </div>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      {/* Type badge */}
      <div className="mb-3">
        <span className="inline-block px-2 py-0.5 bg-gold-50 text-gold-400 text-xs rounded-full">
          {testimonial.type}
        </span>
      </div>

      {/* Quote */}
      <div className="flex-1 relative">
        <Quote className="absolute -top-1 -left-1 w-6 h-6 text-gold-400/20" />
        <p className="text-gray-700 text-sm pl-4 leading-relaxed">
          {testimonial.text}
        </p>
      </div>

      {/* Date + Google Badge */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <p className="text-gray-500 text-xs">
          {testimonial.date}
        </p>
        <div className="flex items-center gap-1 px-2 py-0.5 bg-white border border-gray-200 rounded-full">
          <svg className="w-3 h-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-gray-600 text-[10px] font-medium">Google</span>
        </div>
      </div>
    </div>
  );
}

// Swipe threshold in pixels
const SWIPE_THRESHOLD = 50;

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < -SWIPE_THRESHOLD) {
        nextSlide();
      } else if (info.offset.x > SWIPE_THRESHOLD) {
        prevSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  // Auto-play on mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isMobile, nextSlide]);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <Star className="w-4 h-4 fill-gold-400" />
            Avis Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Ce que disent nos{" "}
            <span className="text-gold-gradient">clients</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des centaines de clients satisfaits nous font confiance pour leurs
            déplacements quotidiens.
          </p>
          <div className="divider-gold" />
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative" ref={containerRef}>
          <div className="relative h-80">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ x, opacity }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-surface-100 border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-50 transition-colors z-10"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-surface-100 border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-50 transition-colors z-10"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-gold-400"
                    : "bg-gold-400/30 hover:bg-gold-400/50"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <p className="text-center text-gray-500 text-xs mt-4">
            Swipez pour voir plus
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gold-400 fill-gold-400"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-foreground">5.0/5</span> sur Google
            </p>
          </div>
          <div className="w-px bg-gray-200 hidden sm:block" />
          <div>
            <p className="text-2xl font-bold text-foreground">10</p>
            <p className="text-gray-600 text-sm">Avis Google</p>
          </div>
          <div className="w-px bg-gray-200 hidden sm:block" />
          <div>
            <p className="text-2xl font-bold text-gold-400">100%</p>
            <p className="text-gray-600 text-sm">Clients satisfaits</p>
          </div>
        </div>

      </div>
    </section>
  );
}
