'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AppShowcase = () => {
  const t = useTranslations('MobilePage.AppShowcase');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <Image src="/phone-mockup.svg" alt={t('screenshot1Alt')} width={300} height={600} />
          </div>
          <div className="flex justify-center">
            <Image src="/phone-mockup.svg" alt={t('screenshot2Alt')} width={300} height={600} />
          </div>
          <div className="flex justify-center">
            <Image src="/phone-mockup.svg" alt={t('screenshot3Alt')} width={300} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
