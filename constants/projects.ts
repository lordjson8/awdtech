import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'awd-ecommerce',
    title: 'AWD E-commerce',
    description: 'A modern e-commerce platform with a focus on user experience.',
    longDescription:
      'The AWD E-commerce platform is a comprehensive solution for businesses looking to sell their products online. It includes features like product management, order processing, and customer accounts. The platform is built with a modern tech stack to ensure performance and scalability.',
    image: '/awd-ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: '2',
    slug: 'awd-education',
    title: 'AWD Education',
    description: 'An online learning platform for students and teachers.',
    longDescription:
      'AWD Education is a platform designed to facilitate online learning. It provides tools for teachers to create courses, manage students, and conduct assessments. Students can access course materials, submit assignments, and interact with their peers and instructors.',
    image: '/awd-education.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: '3',
    slug: 'awd-hotellerie',
    title: 'AWD Hotel Management',
    description: 'A system for managing hotel bookings and operations.',
    longDescription:
      'The AWD Hotel Management system helps hotels streamline their operations. It includes modules for booking management, room allocation, guest services, and billing. The system is designed to be user-friendly for hotel staff and provide a seamless experience for guests.',
    image: '/awd-hotellerie.jpg',
    technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: '4',
    slug: 'awd-immobilier',
    title: 'AWD Real Estate',
    description: 'A platform for browsing and managing real estate listings.',
    longDescription:
      'AWD Real Estate is a platform that connects buyers, sellers, and agents. It allows users to search for properties, view listings with detailed information, and contact agents. The platform also provides tools for agents to manage their listings and interact with clients.',
    image: '/awd-immobilier.jpg',
    technologies: ['Vue.js', 'Firebase', 'Google Maps API'],
  },
];
