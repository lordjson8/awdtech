
import React from 'react';

const philosophies = [
  {
    name: 'User-Centered',
    description: 'We put your users at the heart of our design process to create products they love.',
  },
  {
    name: 'Clarity & Simplicity',
    description: 'We believe that good design is invisible. We strive for clarity and simplicity in everything we do.',
  },
  {
    name: 'Consistency',
    description: 'We create consistent and predictable experiences to reduce cognitive load and improve usability.',
  },
];

const Philosophy = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Design Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((philosophy) => (
            <div key={philosophy.name} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">{philosophy.name}</h3>
              <p className="text-gray-400">{philosophy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
