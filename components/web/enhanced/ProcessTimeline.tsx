
import React from 'react';

const steps = [
  {
    name: 'Phase 1: Discovery',
    description: 'We dive deep into your business goals, target audience, and project requirements to build a solid foundation.',
  },
  {
    name: 'Phase 2: UI/UX Design',
    description: 'Our design team creates wireframes, mockups, and prototypes for a seamless and intuitive user experience.',
  },
  {
    name: 'Phase 3: Development',
    description: 'Our developers write clean, efficient, and scalable code to bring the designs to life.',
  },
  {
    name: 'Phase 4: Testing & QA',
    description: 'We conduct rigorous testing to ensure your application is bug-free, performant, and secure.',
  },
  {
    name: 'Phase 5: Deployment & Support',
    description: 'We deploy your application and provide ongoing support and maintenance to ensure its success.',
  },
];

const ProcessTimeline = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 bg-gray-700 hidden md:block"></div>
          {steps.map((step, index) => (
            <div key={step.name} className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className={`order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <h3 className="font-bold text-white text-xl mb-2">{step.name}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
