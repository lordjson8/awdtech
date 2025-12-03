'use client';
import { projects } from '@/constants/projects';
import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { useTranslations } from 'next-intl';

const ProjectGrid = () => {
  const t = useTranslations('ProjectsPage.Categories');
  const [activeFilter, setActiveFilter] = useState('all');


  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.slug.includes(activeFilter));

  return (
    <section className="py-6 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16">
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
              {t(category)}
            </button>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
