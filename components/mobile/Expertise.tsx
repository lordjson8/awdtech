import React from "react";

const technologies = [
  {
    name: "Flutter",
    description:
      "Cross-platform development for beautiful, natively compiled applications.",
  },
  {
    name: "React Native",
    description: "Build native mobile apps using JavaScript and React.",
  },
  {
    name: "Android",
    description:
      "Native Android development for maximum performance and flexibility.",
  },
  {
    name: "iOS",
    description:
      "Native iOS development for seamless integration with the Apple ecosystem.",
  },
];

const Expertise = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
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

export default Expertise;
