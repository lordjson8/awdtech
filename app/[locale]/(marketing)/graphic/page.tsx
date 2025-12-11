import EnhancedHero from "@/components/design/enhanced/EnhancedHero";
import ServicesCards from "@/components/design/enhanced/ServicesCards";
import DesignProcess from "@/components/design/enhanced/DesignProcess";

import Tools from "@/components/design/enhanced/Tools";
import PortfolioHighlight from "@/components/design/enhanced/PortfolioHighlight";

import CallToAction from "@/components/design/enhanced/CallToAction";
import Header from "@/components/shared/Header";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "GraphicPage.Hero" });

  return {
    title: `${t("title1")} ${t("title2")}`,
    description: t("subtitle"),
    keywords: [
      "AWDTech",
      "graphic design",
      "UI/UX design",
      "branding",
      "visual identity",
      "logo design",
      "prototyping",
    ],
    openGraph: {
      title: `${t("title1")} ${t("title2")}`,
      description: t("subtitle"),
      type: "website",
      url: `https://awdtech.org/${locale}/graphic`,
      images: [
        {
          url: "https://awdtech.org/9.jpg",
          width: 1200,
          height: 630,
          alt: `${t("title1")} ${t("title2")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title1")} ${t("title2")}`,
      description: t("subtitle"),
      images: ["https://awdtech.org/9.jpg"],
    },
    alternates: {
      canonical: `https://awdtech.org/${locale}/graphic`,
      languages: {
        "en-US": "https://awdtech.org/en/graphic",
        "fr-FR": "https://awdtech.org/fr/graphic",
        "es-ES": "https://awdtech.org/es/graphic",
      },
    },
  };
}

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
