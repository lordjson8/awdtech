import EnhancedHero from '@/components/web/enhanced/EnhancedHero';
import ServicesGrid from '@/components/web/enhanced/ServicesGrid';
import TechStack from '@/components/web/enhanced/TechStack';
import ProcessTimeline from '@/components/web/enhanced/ProcessTimeline';
import CallToAction from '@/components/web/enhanced/CallToAction';
import Header from '@/components/shared/Header';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "WebPage.Hero" });

  return {
    title: `${t("title1")} ${t("title2")}`,
    description: t("description").replace(/<[^>]*>/g, ""),
    keywords: [
      "AWDTech",
      "web development",
      "web solutions",
      "innovative web solutions",
      "custom websites",
      "digital experiences",
      "frontend development",
      "backend development",
    ],
    openGraph: {
      title: `${t("title1")} ${t("title2")}`,
      description: t("description").replace(/<[^>]*>/g, ""),
      type: "website",
      url: `https://awdtech.org/${locale}/web`,
      images: [
        {
          url: "https://awdtech.org/web.jpg",
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
      images: ["https://awdtech.org/web.jpg"],
    },
    alternates: {
      canonical: `https://awdtech.org/${locale}/web`,
      languages: {
        "en-US": "https://awdtech.org/en/web",
        "fr-FR": "https://awdtech.org/fr/web",
        "es-ES": "https://awdtech.org/es/web",
      },
    },
  };
}

export default function WebPage() {
  return (
    <div>
      <AnimatedSection >
       <Header />
      </AnimatedSection>
      <AnimatedSection >
      <EnhancedHero />
      </AnimatedSection>
      <AnimatedSection >
      <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection >
      <TechStack />
      </AnimatedSection>
      {/* <ProcessTimeline /> */}
      <AnimatedSection >
      <CallToAction />
      </AnimatedSection>
    </div>
  );
}
