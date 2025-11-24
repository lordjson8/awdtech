import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="relative bg-orange-500 rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          
        
          <div className="relative z-10 max-w-4xl mx-auto">
         

            {/* Main Content */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Créons Quelque Chose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100">
                d&apos;Exceptionnel
              </span>
              Ensemble
            </h2>
            
            <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Vous avez un projet en tête ? Nous serions ravis de l'écouter et de le transformer 
              en une solution digitale qui dépasse vos attentes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild
                className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800 font-semibold py-6 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <span>Planifier une Consultation Gratuite</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              
              {/* <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-semibold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Link href="/portfolio" className="flex items-center gap-3">
                  <span>Voir Nos Réalisations</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </Button> */}
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Consultation sans engagement</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span>Devis personnalisé sous 48h</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                  <span>Expertise technique garantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
};

export default CallToAction;