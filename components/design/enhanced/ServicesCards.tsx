
import React from 'react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful interfaces for web and mobile applications.',
    icon: '🎨', // Placeholder
  },
  {
    title: 'Branding & Identity',
    description: 'Building strong, memorable brands that connect with your audience.',
    icon: '🏢', // Placeholder
  },
  {
    title: 'Prototyping & Testing',
    description: 'Creating interactive prototypes and conducting user testing to validate design decisions.',
    icon: '🧪', // Placeholder
  },
];

const ServicesCards = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
