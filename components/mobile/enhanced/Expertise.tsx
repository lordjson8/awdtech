
import React from 'react';
import { FaSwift, FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiDart, SiFirebase, SiGraphql } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import Container from '@/components/shared/Container';

const techCategories = [
  {
    name: 'Native iOS',
    stack: [
      { name: 'Swift', icon: <FaSwift /> },
      { name: 'Objective-C', icon: <span className="text-2xl"></span> },
      { name: 'Xcode', icon: <span className="text-2xl">🛠️</span> },
    ],
  },
  {
    name: 'Native Android',
    stack: [
      { name: 'Kotlin', icon: <SiKotlin /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Android Studio', icon: <span className="text-2xl">🤖</span> },
    ],
  },
  {
    name: 'Cross-Platform',
    stack: [
      { name: 'React Native', icon: <FaReact /> },
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Dart', icon: <SiDart /> },
    ],
  },
  {
    name: 'Backend & API',
    stack: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'AWS Amplify', icon: <DiAws /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
    ],
  },
];

const Expertise = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Mobile Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category) => (
            <div key={category.name} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.stack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
                    <span className="text-2xl text-cyan-400">{tech.icon}</span>
                    <span className="text-white text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
