import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'awd-pay',
    title: 'AWDPAY',
    description: 'Payment service that simplifies online payments for businesses and individuals.',
    longDescription:
      'AWDPAY is a comprehensive payment service that enables businesses and individuals to process online payments efficiently. It provides a user-friendly interface for managing transactions, tracking payments, and handling financial operations with enhanced security features.',
    image: '/projects/awdpay.png',
    technologies: ['Payment Processing', 'Security', 'TypeScript', 'React', 'Node.js'],
    link : 'https://awdpay.com'
  },
  {
    id: '2',
    slug: 'awd-pay-apis',
    title: 'AWDPAY APIs',
    description: 'Payment APIs with deposit, withdrawal, and transfer functions.',
    longDescription:
      'AWDPAY APIs offer three major functions: payment, withdrawal, and transfer, providing a faster, more secure, and flexible experience. With integrated functions, you can also trigger deposits, withdrawals, transfers, and purchases without leaving your merchant site.',
    image: '/projects/awdpay-api.png',
    technologies: ['API Integration', 'REST APIs', 'Payment Processing', 'Security', 'TypeScript'],
    link: 'https://docs.awdpay.com/'
  },
  {
    id: '3',
    slug: 'pdf-tools',
    title: 'AWDPDF Tools',
    description: 'Simple, reliable, and 100% free PDF tools.',
    longDescription:
      'All your essential PDF functionalities gathered in one place, easy to use and accessible with one click. A comprehensive suite of tools for all your PDF manipulation needs including merging, splitting, converting, and editing PDF documents.',
    image: '/projects/awdpdf.png',
    technologies: ['PDF Processing', 'JavaScript', 'React', 'Cloud Storage', 'File Handling'],
    link: 'https://awdpdf.com/'
  },
  {
    id: '4',
    slug: 'codewigs',
    title: 'Codewigs',
    description: 'Design and create exceptional projects with ready-to-use components.',
    longDescription:
      'Purchase high-quality scripts, themes, and plugins that are ready to use! Codewigs helps developers and designers create outstanding projects with pre-built components, templates, and libraries to accelerate development workflows.',
    image: '/projects/codewhigs.png',
    technologies: ['Component Library', 'JavaScript', 'CSS', 'React', 'Vue.js', 'Templates'],
    link: 'https://www.codewigs.com/'
  },
];


export const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
  ];