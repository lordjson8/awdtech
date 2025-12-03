import CallToAction from "@/components/projects/CallToAction";
import Hero from "@/components/projects/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Header from "@/components/shared/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectGrid />
      </AnimatedSection>
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </div>
  );
}
