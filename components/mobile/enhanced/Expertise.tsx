import { FaSwift, FaJava, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiDart, SiFirebase, SiGraphql, SiXcode, SiAndroidstudio } from 'react-icons/si';
import Container from '@/components/shared/Container';

const techCategories = [
  {
    name: 'Native iOS Development',
    description: 'Applications natives optimisées pour l\'écosystème Apple',
    stack: [
      { name: 'Swift', icon: <FaSwift className="text-orange-500" />, level: 'Expert' },
      { name: 'Objective-C', icon: <span className="text-lg text-gray-600 dark:text-gray-400"></span>, level: 'Avancé' },
      { name: 'Xcode', icon: <SiXcode className="text-blue-500" />, level: 'Expert' },
    ],
    gradient: 'from-blue-500 to-purple-600',
    projects: '15+ Apps'
  },
  {
    name: 'Native Android Development',
    description: 'Solutions Android performantes et natives',
    stack: [
      { name: 'Kotlin', icon: <SiKotlin className="text-purple-500" />, level: 'Expert' },
      { name: 'Java', icon: <FaJava className="text-red-500" />, level: 'Avancé' },
      { name: 'Android Studio', icon: <SiAndroidstudio className="text-green-500" />, level: 'Expert' },
    ],
    gradient: 'from-green-500 to-emerald-600',
    projects: '12+ Apps'
  },
  {
    name: 'Cross-Platform Solutions',
    description: 'Développement multiplateforme efficace',
    stack: [
      { name: 'React Native', icon: <FaReact className="text-cyan-400" />, level: 'Expert' },
      { name: 'Flutter', icon: <SiFlutter className="text-blue-400" />, level: 'Avancé' },
      { name: 'Dart', icon: <SiDart className="text-blue-600" />, level: 'Avancé' },
    ],
    gradient: 'from-cyan-500 to-blue-600',
    projects: '20+ Apps'
  },
  {
    name: 'Backend & Cloud Services',
    description: 'Infrastructure robuste et scalable',
    stack: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Expert' },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 'Expert' },
      { name: 'AWS', icon: <FaAws className="text-orange-500" />, level: 'Avancé' },
      { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" />, level: 'Intermédiaire' },
    ],
    gradient: 'from-orange-500 to-red-600',
    projects: '30+ Projects'
  },
];

const Expertise = () => {
  return (
    <section className="relative  py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0  from-orange-500/5 via-transparent to-transparent" />
      <div className="absolute top-10 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-float" />
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-orange-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
        
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Notre Stack Technologique
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
              Mobile
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Nous maîtrisons les technologies les plus avancées pour créer des applications mobiles 
            performantes, sécurisées et évolutives.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="group relative  backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full mb-4 group-hover:w-16 transition-all duration-300`} />
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 transition-all duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Technology Stack */}
              <div className="space-y-4">
                {category.stack.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="flex items-center justify-between p-4 bg-gray-700/30 rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 group/tech hover:bg-gray-700/50"
                    style={{ animationDelay: `${techIndex * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl transform group-hover/tech:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {tech.name}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {tech.level}
                        </div>
                      </div>
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            dot <= (tech.level === 'Expert' ? 3 : tech.level === 'Avancé' ? 2 : 1)
                              ? 'bg-orange-500'
                              : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects Counter */}
              <div className="mt-6 pt-4 border-t border-gray-700/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Projets livrés</span>
                  <span className="text-orange-400 font-semibold">{category.projects}</span>
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              {/* <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} /> */}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Applications Livrées' },
            { number: '95%', label: 'Satisfaction Client' },
            { number: '3+', label: 'Années d\'Expérience' },
            { number: '15K+', label: 'Utilisateurs Actifs' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
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

export default Expertise;