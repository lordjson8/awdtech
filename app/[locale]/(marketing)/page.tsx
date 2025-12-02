import Products from "@/components/home/Products";
import Projects from "@/components/home/Projects";
import PartnersSection from "@/components/home/Partners";
import Stats from "@/components/home/Stats";
import Team from "@/components/home/Team";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import { useTranslations } from "next-intl";
import Features from "@/components/home/Features";
import FeaturesTwo from "@/components/home/FeaturesTwo";
import WhyUs from "@/components/home/WhyUs";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Clients from "@/components/shared/Clients";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturesTwo />
      </AnimatedSection>
      {/* <Stats /> */}
      <AnimatedSection>
        <Products />
      </AnimatedSection>
      <AnimatedSection>
        <WhyUs />
      </AnimatedSection>
      <AnimatedSection>
        <Team />
      </AnimatedSection>
      <AnimatedSection>
        {/* <PartnersSection /> */}
        <Clients />
      </AnimatedSection>
    </>
  );
}

// import {getTranslations} from 'next-intl/server';

// export default async function HomePage() {
//   const t = await getTranslations('HomePage');
//   return <h1>{t('title')}</h1>;
// }
