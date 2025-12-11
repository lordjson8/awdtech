import EnhancedHero from "@/components/design/enhanced/EnhancedHero";
import ServicesCards from "@/components/design/enhanced/ServicesCards";
import DesignProcess from "@/components/design/enhanced/DesignProcess";

import Tools from "@/components/design/enhanced/Tools";
import PortfolioHighlight from "@/components/design/enhanced/PortfolioHighlight";

import CallToAction from "@/components/design/enhanced/CallToAction";
import Header from "@/components/shared/Header";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function DesignPage() {
  return (
    <div className="bg-black">
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <AnimatedSection>
        <EnhancedHero />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesCards />
      </AnimatedSection>
      <AnimatedSection>
        <DesignProcess />
      </AnimatedSection>
      <AnimatedSection>
        <Tools />
      </AnimatedSection>
      <AnimatedSection>
        <PortfolioHighlight />
      </AnimatedSection>
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </div>
  );
}
