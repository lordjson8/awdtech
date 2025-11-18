
import React from 'react';

const steps = [
  {
    number: '01',
    name: 'Understand',
    description: 'We start by understanding your business, your goals, and your users\' needs.',
  },
  {
    number: '02',
    name: 'Explore',
    description: 'We explore different ideas and concepts through sketching, wireframing, and mood boarding.',
  },
  {
    number: '03',
    name: 'Create',
    description: 'We bring the best ideas to life through high-fidelity mockups and interactive prototypes.',
  },
  {
    number: '04',
    name: 'Refine',
    description: 'We gather feedback, test our designs with real users, and iterate until we get it right.',
  },
];

const DesignProcess = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.name} className="p-6">
              <div className="text-5xl font-bold text-gray-700">{step.number}</div>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">{step.name}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
