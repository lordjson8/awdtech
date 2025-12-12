import React from "react";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("WhyUs");

  const features = [
    {
      id: 1,
      title: t("qualityOfCustomerRelationship"),
      description: t("qualityOfCustomerRelationshipDescription"),
    },
    {
      id: 2,
      title: t("flexibilityAndAdaptability"),
      description: t("flexibilityAndAdaptabilityDescription"),
    },
    {
      id: 3,
      title: t("methodologyAdaptedToClients"),
      description: t("methodologyAdaptedToClientsDescription"),
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
                {t("whyUs")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("whyUsDescription")}
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {t("contactUs")}
                  </h4>
                  <a
                    href="mailto:support.cm@awdpay.com"
                    className="text-orange-500 hover:text-orange-600 font-medium text-lg transition-colors duration-300"
                  >
                    support.cm@awdpay.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-6xl font-bold opacity-20">99%</div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    {t("clientSatisfaction")}
                  </h3>
                  <p className="text-orange-100 text-lg px-8">
                    {t("clientSatisfactionDescription")}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">+15</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  {t("projects")}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-orange-500">95%</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  {t("clients")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
