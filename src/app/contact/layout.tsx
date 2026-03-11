import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Taxi 02 Strasbourg — Taxi Conventionné Strasbourg",
  description:
    "Contactez Taxi 02 Strasbourg. Appelez-nous ou envoyez un message via WhatsApp. Disponible 24h/24, 7j/7.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
