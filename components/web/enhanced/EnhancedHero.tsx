
import React from 'react';
import Image from 'next/image';

const EnhancedHero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold md:text-6xl leading-tight">
              Innovative Web Solutions for the Modern Era
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400">
              We don't just build websites, we build digital experiences that drive growth and user engagement.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/globe.svg" alt="Web Development" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
