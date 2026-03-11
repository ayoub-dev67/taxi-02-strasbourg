import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ArrowRight, Clock, Building2 } from "lucide-react";
import { zones } from "@/config/zones";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Zones Desservies — Taxi Strasbourg & Eurométropole | Taxi 02 Strasbourg",
  description:
    "Découvrez toutes les zones desservies par Taxi 02 Strasbourg : 33 communes de l'Eurométropole de Strasbourg et 22 quartiers. Transport disponible 24h/24.",
};

export default function ZonesPage() {
  // Séparer les communes des quartiers de Strasbourg
  const communes = zones.filter((zone) => !zone.slug.startsWith("strasbourg-"));
  const quartiers = zones.filter((zone) => zone.slug.startsWith("strasbourg-"));

  return (
    <div className="min-h-screen bg-surface pt-24 pb-32">
      {/* Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold mb-4 inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Couverture
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Zones <span className="text-gold-gradient">desservies</span>
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Taxi 02 Strasbourg dessert l&apos;ensemble de l&apos;Eurométropole de Strasbourg
            et au-delà. 33 communes + 22 quartiers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-gold-400 mb-1">{communes.length}</div>
              <div className="text-sm text-gray-600">Communes</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-gold-400 mb-1">{quartiers.length}</div>
              <div className="text-sm text-gray-600">Quartiers de Strasbourg</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Réserver un taxi
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneLink}`}
              className="btn-gold-outline inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Photo section - Couverture du territoire */}
        <section className="mb-16">
          <div className="card-premium max-w-5xl mx-auto overflow-hidden p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/photos/vehicule-2.jpg"
                  alt="Taxi 02 Strasbourg desservant toute l'Eurométropole de Strasbourg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Couverture complète du territoire
                </h3>
                <p className="text-gray-600 mb-3">
                  Basé à Strasbourg, nous desservons rapidement l'ensemble de l'Eurométropole de Strasbourg : 33 communes et 22 quartiers de Strasbourg.
                </p>
                <p className="text-gray-600">
                  Temps de prise en charge optimisé grâce à notre connaissance parfaite du secteur et notre positionnement stratégique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quartiers de Strasbourg */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              Quartiers de <span className="text-gold-gradient">Strasbourg</span>
            </h2>
            <p className="text-gray-600">
              {quartiers.length} quartiers desservis à Strasbourg
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quartiers.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zones/${zone.slug}`}
                className="card-premium group hover:border-gold-400/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 group-hover:bg-gold-400/20 transition-colors">
                    <Building2 className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-gold-400 transition-colors">
                      {zone.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{zone.distances.centreville.duration} du centre</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {zone.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-gold-400 text-sm font-medium group-hover:underline">
                    En savoir plus
                  </span>
                  <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Communes de l'Eurométropole */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              Communes de <span className="text-gold-gradient">l&apos;Eurométropole</span>
            </h2>
            <p className="text-gray-600">
              {communes.length} communes desservies dans l&apos;Eurométropole de Strasbourg
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communes.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zones/${zone.slug}`}
                className="card-premium group hover:border-gold-400/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 group-hover:bg-gold-400/20 transition-colors">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-gold-400 transition-colors">
                      {zone.name}
                    </h3>
                    {zone.postalCode && (
                      <div className="text-xs text-gray-500 mb-2">
                        {zone.postalCode}
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{zone.distances.centreville.duration} du centre</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {zone.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-gold-400 text-sm font-medium group-hover:underline">
                    En savoir plus
                  </span>
                  <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Info supplémentaire */}
        <div className="card-premium max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Votre quartier n&apos;est pas listé ?
          </h2>
          <p className="text-gray-600 mb-6">
            Nous desservons l&apos;ensemble de l&apos;Alsace et au-delà.
            Contactez-nous pour toute destination.
          </p>
          <a
            href={`tel:${siteConfig.contact.phoneLink}`}
            className="btn-gold inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Appelez-nous
          </a>
        </div>
      </div>
    </div>
  );
}
