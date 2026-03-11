"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import {
  siteConfig,
  navigationLinks,
  servicesLinks,
  legalLinks,
} from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-50 border-t border-gold-400/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.svg"
                alt="Taxi 02 Strasbourg — Taxi conventionné Strasbourg"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Taxi conventionné CPAM à Strasbourg. Transport médical,
              transferts aéroports et gares, longue distance, Europa-Park. Disponible 24h/24.
            </p>

            {/* Logo Assurance Maladie */}
            <div className="pt-2">
              <Image
                src="/images/assurance-maladie-logo-png.png"
                alt="Conventionné Assurance Maladie CPAM"
                width={100}
                height={40}
                className="h-8 w-auto opacity-80"
              />
            </div>
            <div className="flex items-center gap-4">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gold-400 hover:bg-gold-50 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gold-400 hover:bg-gold-50 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones desservies */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Zones desservies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/zones/strasbourg"
                  className="text-gray-600 hover:text-gold-400 transition-colors text-sm"
                >
                  Strasbourg
                </Link>
              </li>
              <li>
                <Link
                  href="/zones/hoenheim"
                  className="text-gray-600 hover:text-gold-400 transition-colors text-sm"
                >
                  Hoenheim
                </Link>
              </li>
              <li>
                <Link
                  href="/zones/schiltigheim"
                  className="text-gray-600 hover:text-gold-400 transition-colors text-sm"
                >
                  Schiltigheim
                </Link>
              </li>
              <li>
                <Link
                  href="/zones/bischheim"
                  className="text-gray-600 hover:text-gold-400 transition-colors text-sm"
                >
                  Bischheim
                </Link>
              </li>
              <li>
                <Link
                  href="/zones/illkirch-graffenstaden"
                  className="text-gray-600 hover:text-gold-400 transition-colors text-sm"
                >
                  Illkirch
                </Link>
              </li>
              <li>
                <Link
                  href="/zones"
                  className="text-gold-400 hover:text-gold-500 transition-colors text-sm font-medium"
                >
                  Toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneLink}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-400" />
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5" />
                <span className="text-sm">
                  {siteConfig.location.city}, {siteConfig.location.department}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Clock className="w-4 h-4 text-gold-400" />
                <span className="text-sm">
                  {siteConfig.hours.open} - {siteConfig.hours.days}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-400/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} {siteConfig.name}. Tous droits réservés.
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Spacer pour la navigation mobile */}
      <div className="h-20 lg:hidden" />
    </footer>
  );
}
