import React from "react";

const services = [
  "Wireframing",
  "Prototyping",
  "Branding",
  "User Research",
  "Usability Testing",
  "Design Systems",
];

const Services = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service) => (
            <div
              key={service}
              className="bg-gray-700 text-white py-2 px-4 rounded-full text-lg"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
