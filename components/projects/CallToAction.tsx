"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CallToAction = () => {
  const t = useTranslations("ProjectsPage.CallToAction");

  return (
    <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-3xl p-12 text-center shadow-2xl">
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
      </div>
    </section>
  );
};

export default CallToAction;
