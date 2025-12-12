"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { useTranslations } from "next-intl";

const CallToAction = () => {
  const t = useTranslations("MobilePage.CallToAction");

  return (
    <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
      <Container>
        <div className="bg-gradient-to-r w-full from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Link href="mailto:support.cm@awdpay.com">{t("button")}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
