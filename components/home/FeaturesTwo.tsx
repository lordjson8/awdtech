import { ChartNoAxesCombined, Code, CodeXml, RefreshCcwDot } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

export default function FeaturesTwo() {
  const t = useTranslations("FeaturesTwo");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          {t("ourMission")}
        </h1>

        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          {t("missionDescription")}
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
             <span
              className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500"
            >  <CodeXml />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              {t("offerDigitalSolutions")}
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              {t("offerDigitalSolutionsDescription")}
            </p>

          </div>

          <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
              <span
              className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500"
            >  <RefreshCcwDot />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              {t("improveQuality")}
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              {t("improveQualityDescription")}
            </p>

          
          </div>

          <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-orange-300 rounded-xl">
            <span
              className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-orange-500 dark:text-white hover:underline hover:text-orange-600 dark:hover:text-orange-500"
            >  <ChartNoAxesCombined />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              {t("enableBusinessEvolution")}
            </h1>

            <p className="text-gray-500 dark:text-gray-300">
              {t("enableBusinessEvolutionDescription")}
            </p>

         
          </div>
        </div>
      </div>
    </section>
  );
}