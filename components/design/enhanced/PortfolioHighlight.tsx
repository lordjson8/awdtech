
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Project A',
    category: 'Branding',
    image: '/placeholder.svg', // Placeholder
  },
  {
    title: 'Project B',
    category: 'UI/UX Design',
    image: '/placeholder.svg', // Placeholder
  },
  {
    title: 'Project C',
    category: 'Web Design',
    image: '/placeholder.svg', // Placeholder
  },
];

const PortfolioHighlight = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative">
              <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlight;
