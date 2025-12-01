'use client';
import React from "react";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiInvision,
  SiNotion,
  SiSlack,
  SiMiro,
} from "react-icons/si";
import { CgFramer } from "react-icons/cg";
import { FaSketch, FaAccessibleIcon } from "react-icons/fa";
import { DiAptana } from "react-icons/di";
import { useTranslations } from "next-intl";

const Tools = ({
  theme = "auto",
}) => {
  const t = useTranslations('GraphicPage.Tools');

  const toolCategories = [
    {
      name: t('uiux.name'),
      description: t('uiux.description'),
      stack: [
        { name: "Figma", icon: <SiFigma color="black" />, proficiency: 95 },
        { name: "Sketch", icon: <FaSketch color="black" />, proficiency: 88 },
        {
          name: "Adobe XD",
          icon: <SiAdobexd color="black" />,
          proficiency: 82,
        },
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: t('prototyping.name'),
      description: t('prototyping.description'),
      stack: [
        {
          name: "InVision",
          icon: <SiInvision color="black" />,
          proficiency: 90,
        },
        {
          name: "Marvel",
          icon: <FaAccessibleIcon color="black" />,
          proficiency: 85,
        },
        { name: "Framer", icon: <CgFramer color="black" />, proficiency: 92 },
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: t('graphic.name'),
      description: t('graphic.description'),
      stack: [
        {
          name: "Illustrator",
          icon: <SiAdobeillustrator color="black" />,
          proficiency: 94,
        },
        {
          name: "Photoshop",
          icon: <SiAdobephotoshop color="black" />,
          proficiency: 89,
        },
        { name: "Affinity", icon: <DiAptana color="black" />, proficiency: 87 },
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: t('collaboration.name'),
      description: t('collaboration.description'),
      stack: [
        { name: "Miro", icon: <SiMiro color="black" />, proficiency: 91 },
        { name: "Notion", icon: <SiNotion color="black" />, proficiency: 86 },
        { name: "Slack", icon: <SiSlack color="black" />, proficiency: 93 },
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "50+", label: t('stats.mastered') },
    { number: "100%", label: t('stats.proficiency') },
    { number: "24/7", label: t('stats.updates') },
    { number: "5★", label: t('stats.rating') },
  ];

  return (
    <section
      className={`
      py-20 lg:py-32
      bg-white dark:bg-gray-900
      transition-colors duration-300
      relative overflow-hidden
    `}
    >
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

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div key={category.name} className="group relative">
              {/* Main Card */}
              <div
                className={`
                relative
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl
                p-8
                transition-all duration-500
                group-hover:shadow-2xl
                group-hover:translate-y-2
                overflow-hidden
                h-full
                flex flex-col
              `}
              >
                <div className="text-center mb-8">
                  <div
                    className={`
                    w-16 h-16 
                    mx-auto 
                    mb-4
                    bg-gradient-to-br ${category.gradient}
                    rounded-2xl 
                    flex items-center justify-center
                    text-white 
                    text-2xl
                    shadow-lg
                    group-hover:scale-110
                    transition-transform duration-300
                  `}
                  >
                    {React.cloneElement(category.stack[0].icon, {
                      color: "white",
                    })}
                  </div>

                  <h3
                    className={`
                    text-2xl font-bold
                    text-gray-900 dark:text-white
                    mb-2
                     group-hover:text-orange-600 dark:group-hover:text-orange-400
                    transition-colors duration-300
                  `}
                  >
                    {category.name}
                  </h3>

                  <p
                    className={`
                    text-gray-500 dark:text-gray-400
                    text-sm
                    leading-relaxed
                  `}
                  >
                    {category.description}
                  </p>
                </div>

                {/* Tools List */}
                <div className="space-y-4 flex-1">
                  {category.stack.map((tool, toolIndex) => (
                    <div
                      key={tool.name}
                      className={`
                        flex items-center justify-between
                        p-4
                        bg-gray-50 dark:bg-gray-700/50
                        rounded-xl
                        border border-gray-100 dark:border-gray-600
                        transition-all duration-300
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`
                          text-2xl
                          bg-gradient-to-br ${category.gradient}
                          bg-clip-text text-transparent
                        `}
                        >
                          {tool.icon}
                        </div>
                        <span
                          className={`
                          font-semibold
                          text-gray-700 dark:text-gray-300
                          group-hover:text-gray-900 dark:group-hover:text-white
                          transition-colors duration-300
                        `}
                        >
                          {tool.name}
                        </span>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className={`
                              h-2 rounded-full
                              bg-gradient-to-r ${category.gradient}
                              transition-all duration-1000 ease-out
                            `}
                            style={{ width: `${tool.proficiency}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 w-8">
                          {tool.proficiency}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`
                  text-2xl md:text-3xl font-bold
                  bg-gradient-to-r from-orange-500 to-orange-600
                  dark:from-orange-400 dark:to-orange-500
                  bg-clip-text text-transparent
                  mb-2
                `}
                >
                  {stat.number}
                </div>
                <div
                  className={`
                  text-gray-500 dark:text-gray-400
                  text-sm uppercase tracking-wider font-medium
                `}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
