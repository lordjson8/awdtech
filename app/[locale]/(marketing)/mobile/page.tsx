import EnhancedHero from "@/components/mobile/enhanced/EnhancedHero";
import Features from "@/components/mobile/enhanced/Features";
import Expertise from "@/components/mobile/enhanced/Expertise";
// import AppShowcase from "@/components/mobile/enhanced/AppShowcase";
import CallToAction from "@/components/mobile/enhanced/CallToAction";
import Header from "@/components/shared/Header";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

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
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "AWDTech",
      "AWD Tech",
      "AWD",
      "tech",
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

export default async function MobilePage() {
  const locale = getLocale();
  const t = await getTranslations("ProjectsPage");

  const webPageLdJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("Hero.title1") + " " + t("Hero.title2"),
    description: t("Hero.description").replace(/<[^>]*>/g, ""),
    url: `https://awdtech.org/${locale}/mobile`,
  };

  const serviceLdJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile Development",
    provider: {
      "@type": "Organization",
      name: "AWDTech",
    },
    name: "Mobile Development",
    description: t("Features.native.description"),
  };

  const breadcrumbLdJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://awdtech.org/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mobile Development",
        item: `https://awdtech.org/${locale}/mobile`,
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLdJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLdJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLdJson) }}
      />
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
