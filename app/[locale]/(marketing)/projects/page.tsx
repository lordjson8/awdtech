import CallToAction from "@/components/projects/CallToAction";
import Hero from "@/components/projects/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Header from "@/components/shared/Header";
import {getTranslations, getLocale} from 'next-intl/server';
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "ProjectsPage.Hero" });

  return {
    title: `${t("title1")} - ${t("title2")}`,
    description: t("subtitle"),
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "AWDTech",
      "projects",
      "e-commerce",
      "education",
      "hotel management",
      "real estate",
      "web applications",
      "mobile applications",
    ],
    openGraph: {
      title: `${t("title1")} - ${t("title2")}`,
      description: t("subtitle"),
      type: "website",
      url: `https://awdtech.org/${locale}/projects`,
      images: [
        {
          url: "https://awdtech.org/projects/awd-immobilier.jpg",
          width: 1200,
          height: 630,
          alt: `${t("title1")} - ${t("title2")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title1")} - ${t("title2")}`,
      description: t("subtitle"),
      images: ["https://awdtech.org/projects/awd-immobilier.jpg"],
    },
    alternates: {
      canonical: `https://awdtech.org/${locale}/projects`,
      languages: {
        "en-US": "https://awdtech.org/en/projects",
        "fr-FR": "https://awdtech.org/fr/projects",
        "es-ES": "https://awdtech.org/es/projects",
      },
    },
  };
}

export  default async function ProjectsPage() {
  
  const locale = getLocale();
  const t = await getTranslations("ProjectsPage");

  const collectionPageLdJson = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("Hero.title1") + " - " + t("Hero.title2"),
    description: t("Hero.subtitle"),
    url: `https://awdtech.org/${locale}/projects`,
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
        name: "Projects",
        item: `https://awdtech.org/${locale}/projects`,
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageLdJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLdJson) }}
      />
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
