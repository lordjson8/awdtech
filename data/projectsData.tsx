export const technologiesData = {
  react: { name: 'React', color: 'bg-blue-500', textColor: 'text-blue-100' },
  nextjs: { name: 'Next.js', color: 'bg-black', textColor: 'text-gray-100' },
  vue: { name: 'Vue.js', color: 'bg-green-500', textColor: 'text-green-100' },
  angular: { name: 'Angular', color: 'bg-red-500', textColor: 'text-red-100' },
  node: { name: 'Node.js', color: 'bg-green-600', textColor: 'text-green-100' },
  typescript: { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-blue-100' },
  tailwind: { name: 'Tailwind CSS', color: 'bg-teal-400', textColor: 'text-teal-900' },
  figma: { name: 'Figma', color: 'bg-purple-500', textColor: 'text-purple-100' },
  swift: { name: 'Swift', color: 'bg-orange-500', textColor: 'text-orange-100' },
  kotlin: { name: 'Kotlin', color: 'bg-purple-600', textColor: 'text-purple-100' },
  aws: { name: 'AWS', color: 'bg-yellow-500', textColor: 'text-yellow-900' },
  firebase: { name: 'Firebase', color: 'bg-orange-400', textColor: 'text-orange-900' },
  mongodb: { name: 'MongoDB', color: 'bg-green-500', textColor: 'text-green-100' },
  postgresql: { name: 'PostgreSQL', color: 'bg-blue-700', textColor: 'text-blue-100' },
  docker: { name: 'Docker', color: 'bg-blue-500', textColor: 'text-blue-100' },
  kubernetes: { name: 'Kubernetes', color: 'bg-blue-600', textColor: 'text-blue-100' }
};

export const filtersData = [
  { id: 'all', label: 'All Projects', count: 18, icon: '🌐' },
  { id: 'web', label: 'Web Applications', count: 8, icon: '💻' },
  { id: 'mobile', label: 'Mobile Apps', count: 6, icon: '📱' },
  { id: 'uiux', label: 'UI/UX Design', count: 4, icon: '🎨' }
];

export const projectsData = [
  {
    id: 1,
    title: 'Enterprise E-Commerce Platform',
    category: 'web',
    type: 'Full-Stack Solution',
    description: 'Scalable e-commerce platform serving 50K+ daily users with real-time inventory, AI-powered recommendations, and multi-vendor support.',
    image: '/projects/ecommerce-platform.jpg',
    year: '2024',
    client: 'RetailCorp International',
    technologies: ['react', 'nextjs', 'node', 'typescript', 'mongodb', 'aws', 'docker'],
    duration: '9 months',
    teamSize: 8,
    liveUrl: 'https://retailcorp.com',
    githubUrl: 'https://github.com/retailcorp/platform',
    caseStudyUrl: '/case-studies/retailcorp',
    challenges: [
      'Real-time inventory synchronization across 500+ locations',
      'Payment gateway integration supporting 15+ currencies',
      'Performance optimization for 95+ Lighthouse scores',
      'Microservices architecture with event-driven design'
    ],
    results: {
      conversion: '+42%',
      performance: '98/100',
      loadTime: '0.8s',
      revenue: '+$15M'
    },
    responsibilities: [
      'Technical architecture and system design',
      'Team leadership and code review processes',
      'Performance optimization and monitoring',
      'CI/CD pipeline implementation'
    ],
    featured: true,
    award: 'WebAward 2024 - Best E-Commerce'
  },
  {
    id: 2,
    title: 'AI Fitness Coaching App',
    category: 'mobile',
    type: 'Cross-Platform Mobile',
    description: 'Intelligent fitness platform using machine learning for personalized workout plans, form analysis, and progress tracking.',
    image: '/projects/fitness-app.jpg',
    year: '2024',
    client: 'FitTech Innovations',
    technologies: ['react', 'typescript', 'node', 'firebase', 'aws'],
    duration: '7 months',
    teamSize: 5,
    liveUrl: 'https://apps.apple.com/fittech-app',
    githubUrl: null,
    caseStudyUrl: '/case-studies/fittech',
    challenges: [
      'Real-time pose detection using device ML capabilities',
      'Offline functionality with sync conflict resolution',
      'Battery optimization for continuous tracking',
      'Cross-platform consistency (iOS/Android)'
    ],
    results: {
      rating: '4.9/5',
      downloads: '250K+',
      retention: '72%',
      storeFeatured: 'App Store x3'
    },
    responsibilities: [
      'Mobile architecture and performance optimization',
      'AI integration and algorithm development',
      'App store deployment and compliance',
      'User analytics implementation'
    ],
    featured: true
  },
  // Add more projects...
];