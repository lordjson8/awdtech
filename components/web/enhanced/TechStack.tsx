import React from 'react';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiRedis, SiKubernetes, SiVercel, SiPython, SiDjango, SiFastapi, SiExpress } from 'react-icons/si';
import { DiAws } from 'react-icons/di';


const techCategories = [
  {
    name: 'Frontend',
    stack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    name: 'Backend',
    stack: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
    ],
  },
  {
    name: 'Database',
    stack: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Redis', icon: <SiRedis /> },
    ],
  },
  {
    name: 'DevOps',
    stack: [
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'AWS', icon: <DiAws /> },
        { name: 'Vercel', icon: <SiVercel /> },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Technology Stack</h2>
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

export default TechStack;