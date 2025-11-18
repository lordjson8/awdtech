"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Image from "next/image";

export default function Products() {
  const t = useTranslations('Products');
  const [open, setOpen] = useState(1);

  const products = [
    {
      id: 1,
      title: t('product1.title'),
      description: t('product1.description'),
      image: "/web-dev.jpg",
    },
    {
      id: 2,
      title: t('product2.title'),
      description: t('product2.description'),
      image: "/mobile-dev.jpg",
    },
    {
      id: 3,
      title: t('product3.title'),
      description: t('product3.description'),
      image: "/design.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-[3.25rem] lg:mb-6 text-center">
            {t('title')}
          </h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-5 text-center">
            {t('description')}
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {products.map((product) => (
            <div key={product.id} className="border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setOpen(open === product.id ? 0 : product.id)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {product.title}
                </h3>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    open === product.id ? "transform rotate-180" : ""
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
                  open === product.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6">
                    <p className="text-gray-500 dark:text-gray-400">
                      {product.description}
                    </p>
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
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