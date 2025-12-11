import EnhancedHero from "@/components/mobile/enhanced/EnhancedHero";
import Features from "@/components/mobile/enhanced/Features";
import Expertise from "@/components/mobile/enhanced/Expertise";
// import AppShowcase from "@/components/mobile/enhanced/AppShowcase";
import CallToAction from "@/components/mobile/enhanced/CallToAction";
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
  const t = await getTranslations({ locale, namespace: "MobilePage.Hero" });

  return {
    title: `${t("title1")} ${t("title2")}`,
    description: t("description").replace(/<[^>]*>/g, ""),
    keywords: [
      "AWDTech",
      "mobile development",
      "ios development",
      "android development",
      "cross-platform apps",
      "native apps",
      "mobile experiences",
    ],
    openGraph: {
      title: `${t("title1")} ${t("title2")}`,
      description: t("description").replace(/<[^>]*>/g, ""),
      type: "website",
      url: `https://awdtech.org/${locale}/mobile`,
      images: [
        {
          url: "https://awdtech.org/mobile.jpg",
          width: 1200,
          height: 630,
          alt: `${t("title1")} ${t("title2")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title1")} ${t("title2")}`,
      description: t("description").replace(/<[^>]*>/g, ""),
      images: ["https://awdtech.org/mobile.jpg"],
    },
    alternates: {
      canonical: `https://awdtech.org/${locale}/mobile`,
      languages: {
        "en-US": "https://awdtech.org/en/mobile",
        "fr-FR": "https://awdtech.org/fr/mobile",
        "es-ES": "https://awdtech.org/es/mobile",
      },
    },
  };
}

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
