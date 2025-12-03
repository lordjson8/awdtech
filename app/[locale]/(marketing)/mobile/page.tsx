import EnhancedHero from "@/components/mobile/enhanced/EnhancedHero";
import Features from "@/components/mobile/enhanced/Features";
import Expertise from "@/components/mobile/enhanced/Expertise";
import AppShowcase from "@/components/mobile/enhanced/AppShowcase";
import CallToAction from "@/components/mobile/enhanced/CallToAction";
import Header from "@/components/shared/Header";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function MobilePage() {
  return (
    <div>
      <AnimatedSection>
        <Header />
      </AnimatedSection>

      <AnimatedSection>
        <EnhancedHero />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <Expertise />
        {/* <AppShowcase /> */}
      </AnimatedSection>
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </div>
  );
}
