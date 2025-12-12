import React from "react";

const technologies = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  { name: "Next.js", description: "The React framework for production." },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: "Python",
    description: "A versatile programming language for web development.",
  },
];

const Technologies = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
