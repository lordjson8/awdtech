import React from 'react';
import Image from 'next/image';

const EnhancedHero = () => {
  return (
    <section className="relative bg-gradient-to-br py-24 lg:py-32 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent dark:from-orange-500/10" />
      
    
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
          

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-white dark:to-gray-300">
                Solutions Web
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 mt-2">
                Innovantes
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Nous ne créons pas simplement des sites web, nous concevons des{' '}
              <span className="text-orange-600 dark:text-orange-400 font-semibold">expériences digitales</span>{' '}
              qui propulsent votre croissance et engagent vos utilisateurs.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { icon: '⚡', title: 'Ultra-Rapide', desc: 'Performance optimisée' },
                { icon: '🎯', title: 'Sur Mesure', desc: 'Solutions adaptées' },
                { icon: '🚀', title: 'Moderne', desc: 'Technologies avancées' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-left bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-white/5 hover:border-orange-500/30 transition-all duration-300 shadow-sm dark:shadow-none">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center gap-3">
                  Démarrer mon projet
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              {/* <button className="group border-2 border-gray-300 dark:border-white/20 hover:border-orange-500 hover:bg-orange-500/5 dark:hover:bg-orange-500/10 text-gray-700 dark:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center gap-3">
                  Voir nos réalisations
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button> */}
            </div>
          </div>

          {/* Globe Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 dark:opacity-50 animate-pulse" />
              
              {/* Main Image Container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image 
                    src="/web.jpg" 
                    alt="Développement Web Moderne" 
                    fill
                    className="object-contain rounded-full drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Animated Orbit Effects */}
                  <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 animate-ping" style={{ animationDelay: '1s' }} />
                  <div className="absolute inset-4 rounded-full border-2 border-orange-400/30 animate-ping" style={{ animationDelay: '2s' }} />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute max-lg:hidden -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12">
                <span className="text-2xl">🌐</span>
              </div>
              <div className="absolute max-lg:hidden -bottom-4 -left-4 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-12">
                <span className="text-xl">💻</span>
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

export default EnhancedHero;