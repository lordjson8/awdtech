import EnhancedHero from "@/components/web/enhanced/EnhancedHero";
import ServicesGrid from "@/components/web/enhanced/ServicesGrid";
import TechStack from "@/components/web/enhanced/TechStack";
import ProcessTimeline from "@/components/web/enhanced/ProcessTimeline";
import CallToAction from "@/components/web/enhanced/CallToAction";
import Header from "@/components/shared/Header";
import AnimatedSection from "@/components/shared/AnimatedSection";
import {
  getLocale,
  getTranslations
} from "next-intl/server";
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
    robots: {
      index: true,
      follow: true,
    },
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

export default async function WebPage() {
  const locale = getLocale();
  const t = await getTranslations("ProjectsPage");

  const webPageLdJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("Hero.title1") + " " + t("Hero.title2"),
    description: t("Hero.description").replace(/<[^>]*>/g, ""),
    url: `https://awdtech.org/${locale}/web`,
  };

  const serviceLdJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "AWDTech",
    },
    name: "Web Development",
    description: t("Services.corporate.description"),
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
        name: "Web Development",
        item: `https://awdtech.org/${locale}/web`,
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
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection>
        <TechStack />
      </AnimatedSection>
      {/* <ProcessTimeline /> */}
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </div>
  );
}
