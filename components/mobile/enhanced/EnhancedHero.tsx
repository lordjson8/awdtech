"use client"
import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const EnhancedHero = () => {
  const t = useTranslations('MobilePage.Hero');

  const features = [
    { icon: '⚡', title: t('feature1Title'), desc: t('feature1Desc') },
    { icon: '🎯', title: t('feature2Title'), desc: t('feature2Desc') },
    { icon: '🚀', title: t('feature3Title'), desc: t('feature3Desc') }
  ];

  return (
    <section className="relative  bg-cover bg-center bg-no-repeat min-h-screen pt-6 max-md:mt-32 flex items-center justify-center overflow-hidden   transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent dark:from-orange-500/10" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-white dark:to-gray-300">
                  {t('title1')}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 mt-2">
                  {t('title2')}
                </span>
              </h1>
              
              <p 
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                dangerouslySetInnerHTML={{ __html: t.raw('description') }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-left bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-white/5 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-orange-500/10"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href={'/contact'} className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center gap-3">
                  {t('ctaButton')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-30 dark:opacity-50 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-[3rem] p-8 shadow-2xl border border-gray-300 dark:border-white/10 backdrop-blur-sm">
                <div className="relative w-80 h-[600px]">
                  <Image 
                    src="/phone.png" 
                    alt={t('imageAlt')} 
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  <div className="absolute inset-8 rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-shine" />
                  </div>
                </div>
              </div>

              <div className="absolute max-lg:hidden -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12">
                <span className="text-2xl">📱</span>
              </div>
              <div className="absolute max-lg:hidden -bottom-4 -left-4 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-12">
                <span className="text-xl">🎮</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EnhancedHero;