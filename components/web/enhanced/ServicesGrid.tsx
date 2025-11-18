

import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Corporate Websites',
    description: 'Stunning, responsive websites that tell your brand\'s story and captivate your audience.',
    icon: '/window.svg',
  },
  {
    title: 'Web Applications',
    description: 'Powerful, custom-built web apps to streamline your business processes and engage your users.',
    icon: '/file.svg',
  },
  {
    title: 'E-commerce Platforms',
    description: 'Scalable and secure e-commerce solutions to sell your products and grow your online business.',
    icon: '/globe.svg', // Re-using for now
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Image src={service.icon} alt={service.title} width={64} height={64} className="mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
