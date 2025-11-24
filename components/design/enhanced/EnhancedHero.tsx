import React from 'react';

const EnhancedHero = ({ 
  title = "We Design Experiences That People Love",
  subtitle = "We are a passionate team of designers who create beautiful, intuitive, and user-centered digital products that make a difference.",
  theme = 'auto' // 'light', 'dark', or 'auto'
}) => {
  return (
    <section className={`
      bg-white dark:bg-black
      text-gray-900 dark:text-white
      transition-colors duration-300
    `}>
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Main Title with Gradient */}
        <h1 className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-bold leading-tight
          bg-gradient-to-r from-orange-500 to-orange-600 
          dark:from-orange-400 dark:to-orange-500
          bg-clip-text text-transparent
          mb-6
        ">
          {title}
        </h1>
        
        {/* Subtitle with better typography */}
        <p className="
          mt-8 text-lg md:text-xl lg:text-2xl
          text-gray-600 dark:text-gray-300
          max-w-3xl mx-auto
          leading-relaxed
          font-light
        ">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="
            px-8 py-4 
            bg-orange-500 hover:bg-orange-600 
            dark:bg-orange-600 dark:hover:bg-orange-500
            text-white 
            rounded-lg 
            font-semibold 
            transition-all duration-300 
            transform hover:scale-105 
            focus:outline-none focus:ring-4 focus:ring-orange-500/20
            shadow-lg hover:shadow-xl
          ">
            Start Your Project
          </button>
          
         
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '150+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '5+', label: 'Years Experience' }
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

      
      </div>

    </section>
  );
};

export default EnhancedHero;