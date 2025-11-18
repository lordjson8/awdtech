
import React from 'react';

const tools = [
  { name: 'Figma', description: 'The collaborative interface design tool.' },
  { name: 'Sketch', description: 'A design toolkit built to help you create your best work.' },
  { name: 'Adobe XD', description: 'The all-in-one UX/UI solution for designing websites, mobile apps, and more.' },
  { name: 'Illustrator', description: 'The industry-standard vector graphics software.' },
];

const Tools = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
