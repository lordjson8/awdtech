import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/shared/Footer";
import Fabs from "@/components/shared/Fabs";
import { getTranslations } from "next-intl/server";
import { promises } from "dns";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

type MetaDataProps = {
  params: { locale: string };
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params: { locale },
}: MetaDataProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: {
      default: "AWDTech - Innovative Digital Solutions",
      template: "%s | AWDTech",
    },
    description: t("description"),
    metadataBase: new URL("https://awdtech.org"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en",
        "fr-FR": "/fr",
        "es-ES": "/es",
      },
    },
    openGraph: {
      title: "AWDTech - Innovative Digital Solutions",
      description: t("description"),
      url: "https://awdtech.org",
      siteName: "AWDTech",
      images: [
        {
          url: "https://awdtech.org/hero.png",
          width: 1200,
          height: 630,
          alt: "AWDTech - Innovative Digital Solutions",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "AWDTech - Innovative Digital Solutions",
      description: t("description"),
      images: ["https://awdtech.org/hero.png"],
    },
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/logo.svg",
    },
    manifest: "/manifest.webmanifest",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    verification: {
      google: "D5b6AcDgjatXHmfB9F43z9Sq8jifcLt7fQpGM5B3BxA",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        aria-label="Global"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
