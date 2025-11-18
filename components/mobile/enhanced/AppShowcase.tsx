
import React from 'react';
import Image from 'next/image';

const AppShowcase = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">A Glimpse of Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <Image src="/phone-mockup.svg" alt="App Screenshot 1" width={300} height={600} />
          </div>
          <div className="flex justify-center">
            <Image src="/phone-mockup.svg" alt="App Screenshot 2" width={300} height={600} />
          </div>
          <div className="flex justify-center">
            <Image src="/phone-mockup.svg" alt="App Screenshot 3" width={300} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
