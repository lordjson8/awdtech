import { useTranslations } from 'next-intl';
import React from 'react';

export default function Hero() {
  const t = useTranslations('HomePage');
  return (
    <section className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/2.png')] bg-cover bg-center bg-no-repeat h-[80vh] place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold sm:text-5xl text-white">
            {t('title')}
          </h1>

          <p className="mt-4 text-base text-pretty  sm:text-lg/relaxed text-gray-200">
            {t('description')}
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-orange-500 bg-orange-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
              href="#"
            >
              {t('getStarted')}
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium shadow-sm transition-colors bg-gray-800 hover:text-gray-900 border-gray-700 text-gray-200 dark:hover:bg-gray-900 dark:hover:text-white"
              href="mailto:support.cm@awdpay.com"
            >
              {t('learnMore')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
