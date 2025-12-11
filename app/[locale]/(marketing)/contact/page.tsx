import ContactForm from '@/components/contact/ContactForm';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Header from '@/components/shared/Header';
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
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

export default function ContactPage() {
  return (
    <div>
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    
    </div>
  );
}
