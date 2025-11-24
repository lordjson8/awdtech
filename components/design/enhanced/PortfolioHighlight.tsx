"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const PortfolioHighlight = ({ 
  theme = 'auto',
  title = "Our Work",
  subtitle = "Showcasing our finest projects that deliver exceptional results"
}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'UI/UX Design',
      image: '/placeholder.svg',
      description: 'A complete shopping experience with intuitive navigation and seamless checkout',
      tags: ['Figma', 'Prototype', 'Mobile First'],
      year: '2024',
      link: '#',
      featured: true
    },
    {
      title: 'Brand Identity',
      category: 'Branding',
      image: '/placeholder.svg',
      description: 'Complete brand system for a tech startup including logo and guidelines',
      tags: ['Illustrator', 'Brand Guide', 'Print'],
      year: '2024',
      link: '#',
      featured: false
    },
    {
      title: 'Mobile Banking App',
      category: 'Product Design',
      image: '/placeholder.svg',
      description: 'Modern banking experience with enhanced security and user-friendly interface',
      tags: ['Framer', 'iOS', 'Android'],
      year: '2023',
      link: '#',
      featured: true
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      image: '/placeholder.svg',
      description: 'Responsive corporate website with CMS integration and performance optimization',
      tags: ['Webflow', 'SEO', 'CMS'],
      year: '2023',
      link: '#',
      featured: false
    },
    {
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      image: '/placeholder.svg',
      description: 'Data-rich dashboard with customizable widgets and real-time analytics',
      tags: ['React', 'Data Viz', 'Dashboard'],
      year: '2024',
      link: '#',
      featured: true
    },
    {
      title: 'Packaging Design',
      category: 'Branding',
      image: '/placeholder.svg',
      description: 'Sustainable packaging solution with premium unboxing experience',
      tags: ['3D Render', 'Print', 'Eco-friendly'],
      year: '2023',
      link: '#',
      featured: false
    },
  ];

  const categories = ['all', 'UI/UX Design', 'Branding', 'Product Design', 'Web Design'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-3
                rounded-full
                font-semibold
                transition-all duration-300
                transform hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-orange-500/20
                ${activeFilter === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400'
                }
              `}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative"
            >
              {/* Project Card */}
              <div className={`
                relative
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl
                overflow-hidden
                transition-all duration-500
                group-hover:shadow-2xl
                group-hover:border-orange-500/30
                group-hover:translate-y-2
                h-full
                flex flex-col
              `}>
                {/* Image Container */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-orange-400 text-sm font-medium">
                          {project.category}
                        </p>
                      </div>
                      <button className="
                        w-12 h-12
                        bg-orange-500 hover:bg-orange-600
                        rounded-full
                        flex items-center justify-center
                        text-white
                        transform scale-90 group-hover:scale-100
                        transition-all duration-300
                        shadow-lg
                      ">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="
                absolute inset-0
                bg-gradient-to-br from-orange-500/20 to-purple-500/20
                rounded-2xl
                opacity-0 group-hover:opacity-100
                blur-xl
                transition-opacity duration-500
                -z-10
              "></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 lg:mt-16">
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
            View All Projects
            <svg className="
              w-5 h-5 ml-2
              transform group-hover:translate-x-1
              transition-transform duration-300
            " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '25+', label: 'Industries Served' },
            { number: '3x', label: 'Average ROI' }
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
    </section>
  );
};

export default PortfolioHighlight;