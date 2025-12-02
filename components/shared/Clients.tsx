"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// Import logos - you'll need to replace these with actual AWDTECH partner/client logos
const waveLogo = '/partners/wave.png';
const mtnLogo = '/partners/mtn.png';
const orangeLogo = '/partners/orange.png';
const moovLogo = '/partners/moov.png';
const airtelLogo = '/partners/airtel.png';

const clientLogos = [
  { 
    src: waveLogo,
    name: 'Wave', 
    category: 'Fintech',
    description: 'Solution de paiement mobile leader en Afrique',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    src: mtnLogo,
    name: 'MTN', 
    category: 'Telecom',
    description: 'Premier opérateur mobile en Afrique',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    src: orangeLogo,
    name: 'Orange', 
    category: 'Telecom',
    description: 'Services financiers mobiles innovants',
    color: 'from-orange-500 to-red-500'
  },
  { 
    src: moovLogo,
    name: 'Moov', 
    category: 'Telecom',
    description: 'Plateforme de paiement digital',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    src: airtelLogo,
    name: 'Airtel', 
    category: 'Telecom',
    description: 'Réseau de télécommunications mondial',
    color: 'from-red-500 to-pink-500'
  },
];

const LogoPlaceholder = ({ src, name, color, category } : {src : string,name:string, color :string, category : string}) => {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-24 h-24 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:opacity-70"
      />
    );
  }
  return (
    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-xl shadow-lg relative`}>
      {name.charAt(0)}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
        {category === 'Fintech' ? '💳' : category === 'Telecom' ? '📱' : '🏢'}
      </div>
    </div>
  );
};

const LogoCarousel = () => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);
  const duplicatedLogos = [...clientLogos, ...clientLogos];
  
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
      
      <motion.div
        className="flex gap-16 py-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 40,
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 group cursor-pointer relative"
            onHoverStart={() => setHoveredLogo(index)}
            onHoverEnd={() => setHoveredLogo(null)}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <div className="relative mb-4">
              <LogoPlaceholder {...logo} />
              <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
            </div>
            
            <div className="text-center">
              <p className="font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300 text-lg">
                {logo.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {logo.category}
              </p>
            </div>

            {hoveredLogo === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white p-3 rounded-lg text-sm whitespace-nowrap shadow-xl z-30"
              >
                <div className="font-bold">{logo.name}</div>
                <div className="text-gray-300 dark:text-gray-400 text-xs mt-1 max-w-xs">{logo.description}</div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-800 rotate-45"></div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Clients = () => {
  const t = useTranslations('Clients');
  
  return (
    <section className="max-w-7xl mx-auto py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0  transition-colors duration-300"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('title')}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            {t('description')}
          </p>
          <LogoCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;