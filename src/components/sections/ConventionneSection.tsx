import Image from "next/image";

export default function ConventionneSection() {
  return (
    <section className="bg-[#F4F6FA] py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        {/* Logo Assurance Maladie */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/assurance-maladie-logo-png.png"
            alt="Logo Assurance Maladie — Taxi conventionné CPAM Strasbourg"
            width={160}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Séparateur vertical (desktop) */}
        <div className="hidden sm:block w-px h-16 bg-gray-300" />

        {/* Tampon conventionné */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/service-medical.jpg"
            alt="Taxi conventionné par l'Assurance Maladie Strasbourg"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Texte */}
        <p className="text-center text-gray-600 text-sm font-medium sm:mt-0 mt-2">
          Taxi conventionné par l&apos;Assurance Maladie
        </p>
      </div>
    </section>
  );
}
