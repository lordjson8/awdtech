import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Features() {
  const t = useTranslations("Features");

  const stats = [
    { number: "+05", label: t("yearsExperience") },
    { number: "95%", label: t("clientSatisfaction") },
    { number: "+25", label: t("collaborators") },
    { number: "+15", label: t("projectsCompleted") },
  ];

  const values = [
    {
      icon: "🚀",
      title: t("innovation"),
      description: t("innovationDescription"),
    },
    {
      icon: "🌍",
      title: t("internationalReach"),
      description: t("internationalReachDescription"),
    },
    {
      icon: "💡",
      title: t("expertise"),
      description: t("expertiseDescription"),
    },
  ];

  return (
    <section className="py-8 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="w-full space-y-12 lg:w-1/2">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold text-gray-900 capitalize lg:text-5xl dark:text-white">
                  {t("whoAreWe")}
                </h1>
                
                <div className="flex items-center space-x-1">
                  <span className="inline-block w-16 h-2 bg-orange-500 rounded-full"></span>
                  <span className="inline-block w-4 h-2 bg-orange-500 rounded-full"></span>
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {t("whoAreWeDescription1")}
                </p>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {t("whoAreWeDescription2")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t("ourValues")}
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
                  >
                    <div className="text-2xl flex-shrink-0">{value.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative">
                <Image
                  width={600}
                  height={600}
                  className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl"
                  src="/whoweare.jpg"
                  alt={t("teamAwdTech")}
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{t("expertise")}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{t("expertiseSince")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <Image
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              src="/whoweare.jpg"
              alt={t("teamAwdTech")}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t("readyToRevolutionize")}
            </h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              {t("joinUs")}
            </p>
            <Link href="mailto:support.cm@awdpay.com" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              {t("contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
