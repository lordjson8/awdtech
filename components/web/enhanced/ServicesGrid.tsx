'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ServicesGrid = () => {
    const t = useTranslations('WebPage.Services');

    const services = [
        {
          title: t('corporate.title'),
          description: t('corporate.description'),
          icon: '/building.png',
          features: [t('corporate.features.0'), t('corporate.features.1'), t('corporate.features.2')],
          gradient: 'from-orange-500 to-cyan-500'
        },
        {
          title: t('webapp.title'),
          description: t('webapp.description'),
          icon: '/code.png',
          features: [t('webapp.features.0'), t('webapp.features.1'), t('webapp.features.2')],
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          title: t('ecommerce.title'),
          description: t('ecommerce.description'),
          icon: '/shopping-cart.png',
          features: [t('ecommerce.features.0'), t('ecommerce.features.1'), t('ecommerce.features.2')],
          gradient: 'from-orange-500 to-red-500'
        },
      ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
             dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center p-4 bg-orange-50 rounded-2xl text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="relative w-12 h-12">
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a href="mailto:support.cm@awdpay.com" className="w-full mt-6 py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      {t('learnMore')}
                      <svg 
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-4 right-4 w-8 h-8 bg-orange-500 ${service.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {t('bottomCta.title')}
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              {t('bottomCta.description')}
            </p>
            <a href="mailto:support.cm@awdpay.com" className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              {t('bottomCta.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;