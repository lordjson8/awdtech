'use client';
import React from "react";
import { useTranslations } from "next-intl";

const DesignProcess = ({
  theme = "auto",
}) => {
  const t = useTranslations('GraphicPage.DesignProcess');

  const steps = [
    {
      number: "01",
      name: t('step1.name'),
      description: t('step1.description'),
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
    },
    {
      number: "02",
      name: t('step2.name'),
      description: t('step2.description'),
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
    },
    {
      number: "03",
      name: t('step3.name'),
      description: t('step3.description'),
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      name: t('step4.name'),
      description: t('step4.description'),
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
           color: 'from-orange-500 to-red-500'

    },
  ];

  return (
    <section
      className={`
      py-20 lg:py-32
      bg-gray-50 dark:bg-gray-900
      transition-colors duration-300
      relative overflow-hidden
    `}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            {t('title')}
          </h2>
          <p
            className={`
            text-lg lg:text-xl
            text-gray-600 dark:text-gray-300
            leading-relaxed
          `}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div
            className="
            absolute top-20 left-1/2   transform -translate-x-1/2 
            w-full max-w-4xl h-0.5 
            bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent
            hidden lg:block
          "
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.name} className="relative group">
                {/* Step Number with Gradient */}
                <div
                  className={`
                  relative 
                  w-24 h-24 
                  mx-auto 
                  mb-8
                  bg-gradient-to-br ${step.color}
                  rounded-2xl 
                  flex items-center justify-center
                  text-white 
                  font-bold text-2xl
                  shadow-lg
                  group-hover:scale-110
                  transition-transform duration-300
                  before:absolute before:inset-2 before:rounded-xl before:bg-white/10
                `}
                >
                  {/* Step Icon */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-orange-500">{step.icon}</div>
                  </div>

                  <span className="relative z-10">{step.number}</span>
                </div>

                {/* Content Card */}
                <div
                  className={`
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  rounded-2xl 
                  p-8
                  text-center
                  transition-all duration-300
                  group-hover:shadow-2xl
                  group-hover:translate-y-2
                `}
                >
                  <h3
                    className={`
                    text-2xl lg:text-3xl 
                    font-bold 
                    text-gray-900 dark:text-white
                    mb-4
                    transition-colors duration-300
                  `}
                  >
                    {step.name}
                  </h3>

                  <p
                    className={`
                    text-gray-600 dark:text-gray-300
                    text-lg 
                    leading-relaxed
                    mb-6
                  `}
                  >
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="flex justify-center items-center space-x-2">
                    {steps.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`
                          w-2 h-2 
                          rounded-full 
                          transition-all duration-300
                          ${
                            dotIndex === index
                              ? "bg-orange-500 scale-125"
                              : dotIndex < index
                              ? "bg-orange-500"
                              : "bg-gray-300 dark:bg-gray-600"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>

                {/* Connection Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div
                    className="
                    lg:hidden 
                    flex justify-center 
                    my-6
                  "
                  >
                    <svg
                      className="w-8 h-8 text-gray-300 dark:text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              className="
              px-8 py-4
              bg-orange-500 hover:bg-orange-600
              dark:bg-orange-600 dark:hover:bg-orange-500
              text-white 
              rounded-xl
              font-semibold
              transition-all duration-300
              transform hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-orange-500/20
              shadow-lg hover:shadow-xl
              flex items-center justify-center
              group
            "
            >
              {t('ctaButton')}
              <svg
                className="
                w-5 h-5 ml-2 
                transform group-hover:translate-x-1
                transition-transform duration-300
              "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
