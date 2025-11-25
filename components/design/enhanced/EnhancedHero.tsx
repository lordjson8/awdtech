import React from 'react';
import Image from 'next/image';

const DesignEnhancedHero = ({ 
  title = "Design Graphique Exceptionnel",
  subtitle = "Nous ne créons pas simplement des visuels, nous concevons des identités visuelles qui racontent votre histoire et captivent votre audience.",
  theme = 'auto' // 'light', 'dark', or 'auto'
}) => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black py-24 lg:py-32 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-white dark:to-gray-300">
                Design Graphique
              </span>
              <span className="block text-transparent bg-clip-text bg-orange-500 mt-2">
                Exceptionnel
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { icon: '🎨', title: 'Créatif', desc: 'Designs uniques et originaux' },
                { icon: '📐', title: 'Professionnel', desc: 'Charte graphique sur mesure' },
                { icon: '⚡', title: 'Impactant', desc: 'Visuels qui marquent les esprits' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-left bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-sm dark:shadow-none">
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
              <button className="group relative text-white bg-orange-500 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center gap-3">
                  Démarrer mon projet
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="group border-2 border-gray-300 dark:border-white/20 hover:border-blue-500 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 text-gray-700 dark:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center gap-3">
                  Voir notre portfolio
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 dark:opacity-50 animate-pulse" />
              
              {/* Main Image Container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center">
                    <div className="text-6xl">🎨</div>
                  </div>
                  
                  {/* Design Elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-red-400 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 rounded-lg opacity-80 animate-bounce" style={{ animationDelay: '0.4s' }} />
                  <div className="absolute bottom-8 left-8 w-14 h-14 bg-green-400 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '0.6s' }} />
                  <div className="absolute bottom-12 right-12 w-10 h-10 bg-blue-400 rounded-lg opacity-80 animate-bounce" style={{ animationDelay: '0.8s' }} />
                  
                  {/* Animated Orbit Effects */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" style={{ animationDelay: '1s' }} />
                  <div className="absolute inset-4 rounded-full border-2 border-purple-400/30 animate-ping" style={{ animationDelay: '2s' }} />
                </div>
              </div>

              {/* Floating Design Icons */}
              <div className="absolute max-lg:hidden -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 border border-gray-200 dark:border-white/10">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute max-lg:hidden -bottom-4 -left-4 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-12 border border-gray-200 dark:border-white/10">
                <span className="text-xl">📐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Design Specific */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '200+', label: 'Projets Créatifs' },
            { number: '99%', label: 'Clients Satisfaits' },
            { number: '8+', label: "Années d'Expérience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="
                text-3xl md:text-4xl font-bold 
                text-orange-500 dark:text-orange-400
                mb-2
              ">
                {stat.number}
              </div>
              <div className="
                text-gray-500 dark:text-gray-400 
                text-sm uppercase tracking-wider font-medium
              ">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Services Quick Overview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: '🖋️', service: 'Logo' },
            { icon: '🎭', service: 'Branding' },
            { icon: '📱', service: 'UI/UX' },
            { icon: '📊', service: 'Print' }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {item.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignEnhancedHero;