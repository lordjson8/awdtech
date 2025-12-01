'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('ProjectsPage.Hero');

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black py-24 lg:py-32 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-white dark:to-gray-300">
              {t('title1')}
            </span>
            <span className="block text-transparent bg-clip-text bg-orange-500 mt-2">
              {t('title2')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
