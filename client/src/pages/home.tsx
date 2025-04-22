import HeroSection from "@/components/hero-section";
import QuickOverview from "@/components/quick-overview";
import AdvantagesSection from "@/components/advantages-section";
import InstructorSection from "@/components/instructor-section";
import ModulesSection from "@/components/modules-section";
import FaqSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import IntermediateCTA from "@/components/intermediate-cta";

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased text-dark bg-white">
      <HeroSection />
      <QuickOverview />
      <IntermediateCTA />
      <AdvantagesSection />
      <InstructorSection />
      <ModulesSection />
      <CTASection />
      <FaqSection />
      <div className="bg-gradient-to-b from-gray-800 to-gray-900">
        <Footer />
      </div>
    </div>
  );
}
