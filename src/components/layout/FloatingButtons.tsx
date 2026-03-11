"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useAnalytics } from "@/hooks/useAnalytics";

// Logo WhatsApp officiel SVG
const WhatsAppLogo = () => (
  <svg
    viewBox="0 0 175.216 175.552"
    className="w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="wa-gradient"
        x1="85.915"
        x2="86.535"
        y1="32.567"
        y2="137.092"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#57d163" />
        <stop offset="1" stopColor="#23b33a" />
      </linearGradient>
    </defs>
    <path
      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.028c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.909-43.251 60.75 60.75 0 0 0-43.226-17.929z"
      fill="url(#wa-gradient)"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.952 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.926-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
    />
  </svg>
);

export function FloatingButtons() {
  const { trackPhoneClick, trackWhatsAppClick } = useAnalytics();

  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite réserver un taxi pour..."
  );

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col gap-3 lg:bottom-6">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        aria-label="Contacter via WhatsApp"
        onClick={() => trackWhatsAppClick("floating_button")}
      >
        <WhatsAppLogo />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${siteConfig.contact.phoneLink}`}
        className="relative w-14 h-14 bg-gold-400 rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        aria-label="Appeler maintenant"
        onClick={() => trackPhoneClick("floating_button")}
      >
        <Phone className="w-7 h-7 text-black" />
        {/* Animated ring */}
        <span className="absolute inset-0 rounded-full animate-pulse-gold" />
      </motion.a>
    </div>
  );
}
