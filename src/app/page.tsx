import ConventionneSection from "@/components/sections/ConventionneSection";
import {
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  Testimonials,
  FAQSection,
  CTASection,
  StatsCounter,
} from "@/components/sections";
import { TrustBadges } from "@/components/shared/TrustBadges";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConventionneSection />
      <TrustBadges />
      <ServicesSection />
      <StatsCounter />
      <WhyChooseUsSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
