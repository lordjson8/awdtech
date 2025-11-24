import React from 'react';
import { SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiInvision, SiNotion, SiSlack, SiMiro } from 'react-icons/si';
import { CgFramer } from "react-icons/cg";
import { FaSketch, FaAccessibleIcon} from "react-icons/fa";
// import {  DiAptana } from "react-icons/ri";
import {  DiAptana  } from "react-icons/di";

const Tools = ({ 
  theme = 'auto',
  title = "Our Design Toolkit",
  subtitle = "Powered by industry-leading tools to deliver exceptional results"
}) => {
  const toolCategories = [
    {
      name: 'UI/UX Design',
      description: 'Creating intuitive interfaces and seamless user experiences',
      stack: [
        { name: 'Figma', icon: <SiFigma />, proficiency: 95 },
        { name: 'Sketch', icon: <FaSketch />, proficiency: 88 },
        { name: 'Adobe XD', icon: <SiAdobexd />, proficiency: 82 },
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Prototyping',
      description: 'Bringing ideas to life with interactive prototypes',
      stack: [
        { name: 'InVision', icon: <SiInvision />, proficiency: 90 },
        { name: 'Marvel', icon: <FaAccessibleIcon />, proficiency: 85 },
        { name: 'Framer', icon: <CgFramer />, proficiency: 92 },
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Graphic Design',
      description: 'Crafting stunning visuals and brand identities',
      stack: [
        { name: 'Illustrator', icon: <SiAdobeillustrator />, proficiency: 94 },
        { name: 'Photoshop', icon: <SiAdobephotoshop />, proficiency: 89 },
        { name: 'Affinity', icon: < DiAptana />, proficiency: 87 },
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Collaboration',
      description: 'Streamlining teamwork and project management',
      stack: [
        { name: 'Miro', icon: <SiMiro />, proficiency: 91 },
        { name: 'Notion', icon: <SiNotion />, proficiency: 86 },
        { name: 'Slack', icon: <SiSlack />, proficiency: 93 },
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section className={`
      py-20 lg:py-32
      bg-white dark:bg-gray-900
      transition-colors duration-300
      relative overflow-hidden
    `}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className={`
            text-3xl sm:text-4xl lg:text-5xl 
            font-bold 
            text-gray-900 dark:text-white
            mb-6
          `}>
            {title}
          </h2>
          <p className={`
            text-lg lg:text-xl
            text-gray-600 dark:text-gray-300
            leading-relaxed
          `}>
            {subtitle}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="group relative"
            >
              {/* Main Card */}
              <div className={`
                relative
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl
                p-8
                transition-all duration-500
                group-hover:shadow-2xl
                group-hover:border-orange-500/30
                group-hover:translate-y-2
                overflow-hidden
                h-full
                flex flex-col
              `}>
                {/* Background Gradient */}
                <div className={`
                  absolute top-0 left-0 w-full h-1
                  bg-gradient-to-r ${category.gradient}
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                `}></div>

                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`
                    w-16 h-16 
                    mx-auto 
                    mb-4
                    bg-gradient-to-br ${category.gradient}
                    rounded-2xl 
                    flex items-center justify-center
                    text-white 
                    text-2xl
                    shadow-lg
                    group-hover:scale-110
                    transition-transform duration-300
                  `}>
                    {category.stack[0].icon}
                  </div>
                  
                  <h3 className={`
                    text-2xl font-bold
                    text-gray-900 dark:text-white
                    mb-2
                    group-hover:text-orange-600 dark:group-hover:text-orange-400
                    transition-colors duration-300
                  `}>
                    {category.name}
                  </h3>
                  
                  <p className={`
                    text-gray-500 dark:text-gray-400
                    text-sm
                    leading-relaxed
                  `}>
                    {category.description}
                  </p>
                </div>

                {/* Tools List */}
                <div className="space-y-4 flex-1">
                  {category.stack.map((tool, toolIndex) => (
                    <div 
                      key={tool.name}
                      className={`
                        flex items-center justify-between
                        p-4
                        bg-gray-50 dark:bg-gray-700/50
                        rounded-xl
                        border border-gray-100 dark:border-gray-600
                        transition-all duration-300
                        group-hover:border-orange-500/20
                        group-hover:bg-orange-50/50 dark:group-hover:bg-orange-500/5
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`
                          text-2xl
                          bg-gradient-to-br ${category.gradient}
                          bg-clip-text text-transparent
                        `}>
                          {tool.icon}
                        </div>
                        <span className={`
                          font-semibold
                          text-gray-700 dark:text-gray-300
                          group-hover:text-gray-900 dark:group-hover:text-white
                          transition-colors duration-300
                        `}>
                          {tool.name}
                        </span>
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className={`
                              h-2 rounded-full
                              bg-gradient-to-r ${category.gradient}
                              transition-all duration-1000 ease-out
                            `}
                            style={{ width: `${tool.proficiency}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 w-8">
                          {tool.proficiency}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="
                  absolute inset-0 
                  bg-gradient-to-br from-orange-500/5 to-transparent 
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                "></div>
              </div>

              {/* Floating Elements */}
              <div className="
                absolute -top-2 -right-2
                w-4 h-4
                bg-gradient-to-br ${category.gradient}
                rounded-full
                opacity-0 group-hover:opacity-100
                transition-all duration-500
                group-hover:scale-150
                blur-sm
              "></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Tools Mastered' },
              { number: '100%', label: 'Tool Proficiency' },
              { number: '24/7', label: 'Tool Updates' },
              { number: '5★', label: 'Expert Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`
                  text-2xl md:text-3xl font-bold
                  bg-gradient-to-r from-orange-500 to-orange-600
                  dark:from-orange-400 dark:to-orange-500
                  bg-clip-text text-transparent
                  mb-2
                `}>
                  {stat.number}
                </div>
                <div className={`
                  text-gray-500 dark:text-gray-400
                  text-sm uppercase tracking-wider font-medium
                `}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="
            px-8 py-4
            border-2 border-gray-300 dark:border-gray-600
            hover:border-orange-500 dark:hover:border-orange-400
            text-gray-700 dark:text-gray-300 
            hover:text-orange-600 dark:hover:text-orange-400
            rounded-xl
            font-semibold
            transition-all duration-300
            transform hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-orange-500/20
            inline-flex items-center
            group
          ">
            View Full Tool Stack
            <svg className="
              w-5 h-5 ml-2
              transform group-hover:translate-x-1
              transition-transform duration-300
            " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tools;