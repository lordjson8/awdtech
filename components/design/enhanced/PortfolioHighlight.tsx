"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PortfolioHighlight = ({ theme = "auto" }) => {
  const t = useTranslations("GraphicPage.Portfolio");
  const [activeFilter, setActiveFilter] = useState(t("categories.all"));

  const projects = [
    {
      title: t("ecommerce.title"),
      category: t("categories.uiux"),
      image: "/placeholder.svg",
      description: t("ecommerce.description"),
      tags: ["Figma", "Prototype", "Mobile First"],
      year: "2024",
      link: "#",
      featured: true,
    },
    {
      title: t("branding.title"),
      category: t("categories.branding"),
      image: "/placeholder.svg",
      description: t("branding.description"),
      tags: ["Illustrator", "Brand Guide", "Print"],
      year: "2024",
      link: "#",
      featured: false,
    },
    {
      title: t("banking.title"),
      category: t("categories.product"),
      image: "/placeholder.svg",
      description: t("banking.description"),
      tags: ["Framer", "iOS", "Android"],
      year: "2023",
      link: "#",
      featured: true,
    },
    {
      title: t("website.title"),
      category: t("categories.web"),
      image: "/placeholder.svg",
      description: t("website.description"),
      tags: ["Webflow", "SEO", "CMS"],
      year: "2023",
      link: "#",
      featured: false,
    },
    {
      title: t("dashboard.title"),
      category: t("categories.uiux"),
      image: "/placeholder.svg",
      description: t("dashboard.description"),
      tags: ["React", "Data Viz", "Dashboard"],
      year: "2024",
      link: "#",
      featured: true,
    },
    {
      title: t("packaging.title"),
      category: t("categories.branding"),
      image: "/placeholder.svg",
      description: t("packaging.description"),
      tags: ["3D Render", "Print", "Eco-friendly"],
      year: "2023",
      link: "#",
      featured: false,
    },
  ];

  const categories = [
    t("categories.all"),
    t("categories.uiux"),
    t("categories.branding"),
    t("categories.product"),
    t("categories.web"),
  ];

  const filteredProjects =
    activeFilter === t("categories.all")
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const stats = [
    { number: "50+", label: t("stats.completed") },
    { number: "98%", label: t("stats.satisfaction") },
    { number: "25+", label: t("stats.industries") },
    { number: "3x", label: t("stats.roi") },
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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-3
                rounded-full
                font-semibold
                transition-all duration-300
                transform hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-orange-500/20
                ${
                  activeFilter === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.title} className="group relative">
              <div
                className={`
                relative
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl
                overflow-hidden
                transition-all duration-500
                group-hover:shadow-2xl
                group-hover:border-orange-500/30
                group-hover:translate-y-2
                h-full
                flex flex-col
              `}
              >
                {/* Image Container */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                        {t("featured")}
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-full">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-orange-400 text-sm font-medium">
                          {project.category}
                        </p>
                      </div>
                      <button
                        className="
                        w-12 h-12
                        bg-orange-500 hover:bg-orange-600
                        rounded-full
                        flex items-center justify-center
                        text-white
                        transform scale-90 group-hover:scale-100
                        transition-all duration-300
                        shadow-lg
                      "
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="
                absolute inset-0
                bg-gradient-to-br from-orange-500/20 to-purple-500/20
                rounded-2xl
                opacity-0 group-hover:opacity-100
                blur-xl
                transition-opacity duration-500
                -z-10
              "
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <button
            className="
            px-8 py-4
            border-2 border-gray-300 dark:border-gray-600
            hover:border-orange-500 dark:hover:border-orange-400
            text-gray-700 dark:text-gray-300 
            hover:text-orange-600 dark:hover:text-orange-400
            rounded-xl
            font-semibold
            transition-all duration-300
            transform hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-orange-500/20
            inline-flex items-center
            group
          "
          >
            {t("viewAll")}
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
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
    </section>
  );
};

export default PortfolioHighlight;
