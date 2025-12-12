"use client";
import React from "react";
import { useTranslations } from "next-intl";

const ServicesCards = ({ theme = "auto" }) => {
  const t = useTranslations("GraphicPage.ServicesCards");

  const services = [
    {
      title: t("uiux.title"),
      description: t("uiux.description"),
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        t("uiux.features.0"),
        t("uiux.features.1"),
        t("uiux.features.2"),
        t("uiux.features.3"),
      ],
    },
    {
      title: t("branding.title"),
      description: t("branding.description"),
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        t("branding.features.0"),
        t("branding.features.1"),
        t("branding.features.2"),
        t("branding.features.3"),
      ],
    },
    {
      title: t("prototyping.title"),
      description: t("prototyping.description"),
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      features: [
        t("prototyping.features.0"),
        t("prototyping.features.1"),
        t("prototyping.features.2"),
        t("prototyping.features.3"),
      ],
    },
  ];

  return (
    <section
      className={`
      py-20 lg:py-32
      bg-white dark:bg-gray-900
      transition-colors duration-300
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2
            className={`
            text-3xl sm:text-4xl lg:text-5xl 
            font-bold 
            text-gray-900 dark:text-white
            mb-6
          `}
          >
            {t("title")}
          </h2>
          <p
            className={`
            text-lg lg:text-xl
            text-gray-600 dark:text-gray-300
            leading-relaxed
          `}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                group relative
                bg-gradient-to-br from-white to-gray-50 
                dark:from-gray-800 dark:to-gray-900
                border border-gray-200 dark:border-gray-700
                rounded-2xl 
                p-8 lg:p-10
                transition-all duration-500 
                hover:scale-105 hover:shadow-2xl
                overflow-hidden
              `}
            >
              {/* Icon Container */}
              <div
                className="
                relative 
                w-20 h-20 
                bg-gradient-to-br from-orange-500 to-orange-600
                rounded-2xl 
                flex items-center justify-center 
                text-white
                mb-8
                group-hover:scale-110 
                transition-transform duration-300
                shadow-lg
              "
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3
                  className="
                  text-2xl lg:text-3xl 
                  font-bold 
                  text-gray-900 dark:text-white
                  mb-4
                  
                  transition-colors duration-300
                "
                >
                  {service.title}
                </h3>

                <p
                  className="
                  text-gray-600 dark:text-gray-300
                  text-lg 
                  leading-relaxed
                  mb-6
                "
                >
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700 dark:text-gray-400"
                    >
                      <svg
                        className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
