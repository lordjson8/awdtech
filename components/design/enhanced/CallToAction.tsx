import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToAction = ({ 
  theme = 'auto',
  title = "Have an idea?",
  subtitle = "Let's turn your idea into a beautiful and functional digital product. We'd love to hear from you and bring your vision to life.",
  primaryAction = { text: "Start a Project", href: "/contact" },
  secondaryAction = { text: "View Our Work", href: "/portfolio" }
}) => {
  return (
    <section className={`
      py-20 lg:py-32
      relative
      overflow-hidden
      bg-gradient-to-br from-gray-900 via-black to-gray-900
      dark:from-gray-900 dark:via-black dark:to-gray-900
    `}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shine"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
        
          {/* Main Title */}
          <h2 className={`
            text-4xl sm:text-5xl lg:text-6xl 
            font-bold 
            text-white
            mb-6
            leading-tight
          `}>
            {title}
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Let&apos;s Make It Real
            </span>
          </h2>

          {/* Subtitle */}
          <p className={`
            text-xl lg:text-2xl
            text-gray-300
            mb-12
            leading-relaxed
            max-w-3xl mx-auto
          `}>
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="
                px-8 py-6
                bg-orange-500 hover:bg-orange-600
                dark:bg-orange-600 dark:hover:bg-orange-500
                text-white
                rounded-xl
                font-semibold
                text-lg
                transition-all duration-300
                transform hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-orange-500/20
                shadow-lg hover:shadow-xl
                border-0
                group
                relative overflow-hidden
              "
              asChild
            >
              <Link href={primaryAction.href}>
                <span className="relative z-10 flex items-center">
                  {primaryAction.text}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="
                px-8 py-6
                border-2 border-gray-300 dark:border-gray-600
                hover:border-orange-500 dark:hover:border-orange-400
                text-gray-300 dark:text-gray-300 
                hover:text-orange-400 dark:hover:text-orange-400
                bg-transparent hover:bg-orange-500/5
                rounded-xl
                font-semibold
                text-lg
                transition-all duration-300
                transform hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-orange-500/20
                group
              "
              asChild
            >
              {/* <Link href={secondaryAction.href}>
                <span className="flex items-center">
                  {secondaryAction.text}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </Link> */}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { 
                text: "Free Consultation", 
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                text: "2-Week Delivery", 
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                text: "Money-Back Guarantee", 
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-gray-400">
                <div className="text-orange-500">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default CallToAction;