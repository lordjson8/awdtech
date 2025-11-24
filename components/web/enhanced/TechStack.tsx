import React from 'react';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiRedis, SiKubernetes, SiVercel, SiPython, SiDjango, SiFastapi, SiExpress } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

const techCategories = [
  {
    name: 'Frontend Development',
    description: 'Interfaces modernes et réactives',
    stack: [
      { name: 'React', icon: <FaReact />, level: 'Expert', color: 'text-cyan-400' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 'Expert', color: 'text-white' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 'Expert', color: 'text-orange-500' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Expert', color: 'text-cyan-300' },
    ],
    gradient: 'from-cyan-500 to-orange-500',
    projects: '25+ Projects'
  },
  {
    name: 'Backend Development',
    description: 'APIs robustes et performantes',
    stack: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 'Expert', color: 'text-green-500' },
      { name: 'Express', icon: <SiExpress />, level: 'Expert', color: 'text-gray-300' },
      { name: 'Python', icon: <SiPython />, level: 'Avancé', color: 'text-yellow-400' },
      { name: 'Django', icon: <SiDjango />, level: 'Avancé', color: 'text-green-400' },
      { name: 'FastAPI', icon: <SiFastapi />, level: 'Intermédiaire', color: 'text-teal-400' },
    ],
    gradient: 'from-green-500 to-emerald-500',
    projects: '30+ APIs'
  },
  {
    name: 'Bases de Données',
    description: 'Solutions de stockage optimisées',
    stack: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Expert', color: 'text-orange-400' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 'Expert', color: 'text-green-500' },
      { name: 'Redis', icon: <SiRedis />, level: 'Avancé', color: 'text-red-500' },
    ],
    gradient: 'from-purple-500 to-pink-500',
    projects: '40+ Databases'
  },
  {
    name: 'DevOps & Cloud',
    description: 'Infrastructure scalable et sécurisée',
    stack: [
      { name: 'Docker', icon: <FaDocker />, level: 'Expert', color: 'text-orange-400' },
      { name: 'Kubernetes', icon: <SiKubernetes />, level: 'Avancé', color: 'text-orange-500' },
      { name: 'AWS', icon: <DiAws />, level: 'Avancé', color: 'text-orange-400' },
      { name: 'Vercel', icon: <SiVercel />, level: 'Expert', color: 'text-white' },
    ],
    gradient: 'from-orange-500 to-red-500',
    projects: '50+ Deployments'
  },
];

const TechStack = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
        
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Notre Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500">Technologique</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Nous utilisons les technologies les plus avancées pour créer des applications web performantes, 
            évolutives et maintenables.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-800" />
              </div>

              <div className="relative z-10">
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full mb-4 group-hover:w-16 transition-all duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Technology Stack */}
                <div className="space-y-3">
                  {category.stack.map((tech, techIndex) => (
                    <div 
                      key={tech.name}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 group/tech hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`text-2xl transform group-hover/tech:scale-110 transition-transform duration-300 ${tech.color}`}>
                          {tech.icon}
                        </div>
                        <div>
                          <div className="text-gray-900 dark:text-white font-semibold text-sm">
                            {tech.name}
                          </div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs">
                            {tech.level}
                          </div>
                        </div>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div className="flex gap-1">
                        {[1, 2, 3].map((dot) => (
                          <div
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              dot <= (tech.level === 'Expert' ? 3 : tech.level === 'Avancé' ? 2 : 1)
                                ? 'bg-orange-500'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Projects Counter */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Projets réalisés</span>
                    <span className="text-orange-500 dark:text-orange-400 font-semibold">{category.projects}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-4 right-4 w-6 h-6 bg-gradient-to-r ${category.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: '100+', label: 'Projets Livrés' },
            { number: '99%', label: 'Satisfaction Client' },
            { number: '3+', label: 'Années d\'Expérience' },
            { number: '50K+', label: 'Utilisateurs Actifs' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;