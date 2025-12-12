import ContactForm from "@/components/contact/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Header from "@/components/shared/Header";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: `${t("title")} ${t("titleAccent")}`,
    description: t("description"),
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "AWDTech",
      "AWDTech",
      "AWD",
      "tech",
      "contact",
      "get in touch",
      "project inquiry",
      "web development",
      "mobile development",
      "graphic design",
    ],
    openGraph: {
      title: `${t("title")} ${t("titleAccent")}`,
      description: t("description"),
      type: "website",
      url: `https://awdtech.org/${locale}/contact`,
      images: [
        {
          url: "https://awdtech.org/hero.png",
          width: 1200,
          height: 630,
          alt: `${t("title")} ${t("titleAccent")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} ${t("titleAccent")}`,
      description: t("description"),
      images: ["https://awdtech.org/hero.png"],
    },
    alternates: {
      canonical: `https://awdtech.org/${locale}/contact`,
      languages: {
        "en-US": "https://awdtech.org/en/contact",
        "fr-FR": "https://awdtech.org/fr/contact",
        "es-ES": "https://awdtech.org/es/contact",
      },
    },
  };
}

export default async function ContactPage() {
  const locale = getLocale();
  const t = await getTranslations("ProjectsPage");

  const contactPageLdJson = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: t("title") + " " + t("titleAccent"),
    description: t("description"),
    url: `https://awdtech.org/${locale}/contact`,
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
        name: "Contact",
        item: `https://awdtech.org/${locale}/contact`,
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLdJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLdJson) }}
      />
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    </div>
  );
}
