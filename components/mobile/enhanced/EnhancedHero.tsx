
import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/Container';

const EnhancedHero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold md:text-6xl leading-tight">
              Your Vision, in the Palm of Their Hands
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400">
              We build beautiful, high-performance mobile apps for iOS and Android that your users will love.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/phone-mockup.svg" alt="Mobile App" width={300} height={600} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EnhancedHero;
