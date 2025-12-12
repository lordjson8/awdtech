"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../../constants/projects"; // Import projects from constants

export default function Products() {
  const t = useTranslations("Products");
  const [open, setOpen] = useState("1");

  const toggleProject = (id: string) => {
    setOpen(open === id ? "0" : id);
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] lg:mb-6 text-center">
            {t("title")}
          </h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-5 text-center">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-4 transition-colors duration-200"
              >
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t(`items.${project.slug}.title`)}
                  </h3>
                  <p className="text-lg text-orange-500 font-medium mt-1">
                    {t(`items.${project.slug}.subtitle`)}
                  </p>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 text-gray-600 dark:text-gray-400 ${
                    open === project.id ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  open === project.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6 px-4">
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {t(`items.${project.slug}.description`)}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
                      >
                        {t("learnMore")}
                      </a>
                    </div>
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={t(`items.${project.slug}.title`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
