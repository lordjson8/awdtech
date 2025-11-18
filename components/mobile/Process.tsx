
import React from 'react';

const steps = [
  {
    name: '1. Discovery & Design',
    description: 'We work with you to understand your vision and design a beautiful, intuitive user interface.',
  },
  {
    name: '2. Development',
    description: 'Our expert developers bring the design to life with clean, efficient code.',
  },
  {
    name: '3. Testing & Deployment',
    description: 'We rigorously test your app to ensure it is bug-free and ready for launch.',
  },
];

const Process = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.name} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">{step.name}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
