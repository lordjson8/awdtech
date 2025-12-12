import React from "react";

const steps = [
  {
    name: "1. Planning & Strategy",
    description:
      "We define your project goals, target audience, and create a roadmap for success.",
  },
  {
    name: "2. Design & Development",
    description:
      "We design a user-centric interface and build a robust, scalable application.",
  },
  {
    name: "3. Testing & Launch",
    description:
      "We thoroughly test your application and deploy it to our high-performance servers.",
  },
];

const Approach = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
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

export default Approach;
