import CallToAction from "@/components/projects/CallToAction";
import Hero from "@/components/projects/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Header from "@/components/shared/Header";
import { getTranslations } from "next-intl/server";
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
      url: `https://awdtech.com/${locale}/projects`,
      images: [
        {
          url: "https://awdtech.com/projects/awd-immobilier.jpg",
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
      images: ["https://awdtech.com/projects/awd-immobilier.jpg"],
    },
    alternates: {
      canonical: `https://awdtech.com/${locale}/projects`,
      languages: {
        "en-US": "https://awdtech.com/en/projects",
        "fr-FR": "https://awdtech.com/fr/projects",
        "es-ES": "https://awdtech.com/es/projects",
      },
    },
  };
}

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
