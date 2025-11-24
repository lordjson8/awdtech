import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Sites Web Corporatifs',
    description: 'Des sites web époustouflants et responsives qui racontent l\'histoire de votre marque et captivent votre audience.',
    icon: '/building.png',
    features: ['Design Responsive', 'SEO Optimisé', 'Intégration CMS'],
    gradient: 'from-orange-500 to-cyan-500'
  },
  {
    title: 'Applications Web',
    description: 'Applications web sur mesure puissantes pour rationaliser vos processus métier et engager vos utilisateurs.',
    icon: '/code.png',
    features: ['Architecture Moderne', 'API RESTful', 'Base de données'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Plateformes E-commerce',
    description: 'Solutions e-commerce évolutives et sécurisées pour vendre vos produits et développer votre activité en ligne.',
    icon: '/shopping-cart.png',
    features: ['Paiement Sécurisé', 'Gestion Stock', 'Analytics'],
    gradient: 'from-orange-500 to-red-500'
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ce Que Nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500">Créons</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Des solutions web sur mesure qui transforment vos idées en expériences digitales exceptionnelles
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-800" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${service.gradient} rounded-2xl text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
                  <button className="w-full mt-6 py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      En savoir plus
                      <svg 
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à donner vie à votre projet web ?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Discutons de votre vision et créons ensemble une solution qui dépasse vos attentes.
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Démarrer mon projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;