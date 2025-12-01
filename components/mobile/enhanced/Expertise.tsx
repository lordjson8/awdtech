'use client';
import { FaSwift, FaJava, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiDart, SiFirebase, SiGraphql, SiXcode, SiAndroidstudio } from 'react-icons/si';
import Container from '@/components/shared/Container';
import { useTranslations } from 'next-intl';

const Expertise = () => {
  const t = useTranslations('MobilePage.Expertise');

  const techCategories = [
    {
      name: t('ios.name'),
      description: t('ios.description'),
      stack: [
        { name: 'Swift', icon: <FaSwift className="text-orange-500" />, level: t('ios.levelExpert') },
        { name: 'Objective-C', icon: <span className="text-lg text-gray-600 dark:text-gray-400"></span>, level: t('ios.levelAdvanced') },
        { name: 'Xcode', icon: <SiXcode className="text-blue-500" />, level: t('ios.levelExpert') },
      ],
      gradient: 'from-blue-500 to-purple-600',
      projects: t('ios.projects')
    },
    {
      name: t('android.name'),
      description: t('android.description'),
      stack: [
        { name: 'Kotlin', icon: <SiKotlin className="text-purple-500" />, level: t('android.levelExpert') },
        { name: 'Java', icon: <FaJava className="text-red-500" />, level: t('android.levelAdvanced') },
        { name: 'Android Studio', icon: <SiAndroidstudio className="text-green-500" />, level: t('android.levelExpert') },
      ],
      gradient: 'from-green-500 to-emerald-600',
      projects: t('android.projects')
    },
    {
      name: t('crossPlatform.name'),
      description: t('crossPlatform.description'),
      stack: [
        { name: 'React Native', icon: <FaReact className="text-cyan-400" />, level: t('crossPlatform.levelExpert') },
        { name: 'Flutter', icon: <SiFlutter className="text-blue-400" />, level: t('crossPlatform.levelAdvanced') },
        { name: 'Dart', icon: <SiDart className="text-blue-600" />, level: t('crossPlatform.levelAdvanced') },
      ],
      gradient: 'from-cyan-500 to-blue-600',
      projects: t('crossPlatform.projects')
    },
    {
      name: t('backendCloud.name'),
      description: t('backendCloud.description'),
      stack: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: t('backendCloud.levelExpert') },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: t('backendCloud.levelExpert') },
        { name: 'AWS', icon: <FaAws className="text-orange-500" />, level: t('backendCloud.levelAdvanced') },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" />, level: t('backendCloud.levelIntermediate') },
      ],
      gradient: 'from-orange-500 to-red-600',
      projects: t('backendCloud.projects')
    },
  ];

  const stats = [
    { number: '50+', label: t('stats.deliveredApps') },
    { number: '95%', label: t('stats.clientSatisfaction') },
    { number: '3+', label: t('stats.yearsExperience') },
    { number: '15K+', label: t('stats.activeUsers') },
  ];

  const getLevelValue = (level: string) => {
    if (level === t('ios.levelExpert') || level === t('android.levelExpert') || level === t('crossPlatform.levelExpert') || level === t('backendCloud.levelExpert')) return 3;
    if (level === t('ios.levelAdvanced') || level === t('android.levelAdvanced') || level === t('crossPlatform.levelAdvanced') || level === t('backendCloud.levelAdvanced')) return 2;
    if (level === t('backendCloud.levelIntermediate')) return 1;
    return 0;
  };

  return (
    <section className="relative bg-white dark:bg-gray-900 py-24 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-orange-500/5 dark:bg-transparent via-transparent to-transparent" />
      
      <div className='max-w-7xl mx-auto px-6'>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          />
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="group relative bg-white dark:bg-gray-800 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/10"
            >
              <div className="mb-6">
                <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full mb-4 group-hover:w-16 transition-all duration-300`} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 dark:group-hover:from-orange-400 dark:group-hover:to-orange-600 transition-all duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.stack.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-2xl border border-gray-200 dark:border-gray-600/30 hover:border-gray-300 dark:hover:border-gray-500/50 transition-all duration-300 group/tech hover:bg-gray-100 dark:hover:bg-gray-700/50"
                    style={{ animationDelay: `${techIndex * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl transform group-hover/tech:scale-110 transition-transform duration-300">
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
                    
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            dot <= getLevelValue(tech.level)
                              ? 'bg-orange-500'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{t('projectsDelivered')}</span>
                  <span className="text-orange-500 dark:text-orange-400 font-semibold">{category.projects}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-orange-500 mb-2">
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

export default Expertise;