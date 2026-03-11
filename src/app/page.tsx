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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConventionneSection />
      <ServicesSection />
      <StatsCounter />
      <WhyChooseUsSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
