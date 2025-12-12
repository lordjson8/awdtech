import Products from "@/components/home/Products";
import Projects from "@/components/home/Projects";
import PartnersSection from "@/components/home/Partners";
import Stats from "@/components/home/Stats";
import Team from "@/components/home/Team";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import { useTranslations, useLocale } from "next-intl";
import Features from "@/components/home/Features";
import FeaturesTwo from "@/components/home/FeaturesTwo";
import WhyUs from "@/components/home/WhyUs";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Clients from "@/components/shared/Clients";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "AWDTech",
      "AWD Tech",
      "AWD",
      "tech",
      "web development",
      "mobile development",
      "UI/UX design",
      "digital solutions",
      "web solutions",
      "innovative web solutions",
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://awdtech.org/${locale}`,
      images: [
        {
          url: "https://awdtech.org/hero.png",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://awdtech.org/hero.png"],
    },
    alternates: {
      canonical: `https://awdtech.org/${locale}`,
      languages: {
        "en-US": "https://awdtech.org/en",
        "fr-FR": "https://awdtech.org/fr",
        "es-ES": "https://awdtech.org/es",
      },
    },
  };
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const organizationLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AWDTech",
    url: `https://awdtech.org/${locale}`,
    logo: "https://awdtech.org/logo.svg",
    sameAs: [],
  };

  const websiteLdJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AWDTech",
    url: `https://awdtech.org/${locale}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLdJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLdJson) }}
      />
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
