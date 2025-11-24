import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/20 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-orange-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container relative mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-300 text-sm font-medium">Développement Mobile Expert</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Développement
            <span className="block text-orange-500 mt-2">D'Applications</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mt-2">
              Mobile
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Nous créons des applications mobiles <span className="text-orange-400 font-semibold">scalables, robustes et riches en fonctionnalités</span> 
            pour Android et iOS, transformant vos idées en expériences utilisateur exceptionnelles.
          </p>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Android & iOS</h3>
              <p className="text-gray-400 text-sm">Applications natives et cross-platform</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Haute Performance</h3>
              <p className="text-gray-400 text-sm">Applications rapides et réactives</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-white mb-2">UI/UX Optimisée</h3>
              <p className="text-gray-400 text-sm">Design intuitif et moderne</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center gap-3">
              <span>Démarrer un projet</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
            
            <button className="group border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
              <span>Voir nos réalisations</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 min-w-[140px]">
              <div className="text-2xl font-bold text-orange-500">+15</div>
              <div className="text-gray-400 text-sm mt-1">Apps Livrées</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 min-w-[140px]">
              <div className="text-2xl font-bold text-orange-500">95%</div>
              <div className="text-gray-400 text-sm mt-1">Satisfaction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 min-w-[140px]">
              <div className="text-2xl font-bold text-orange-500">24/7</div>
              <div className="text-gray-400 text-sm mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;