
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Container from '@/components/shared/Container';

const CallToAction = () => {
  return (
    <section className="bg-gray-900 py-20">
      <Container>
        <div className="bg-gray-800 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your App?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let&apos;s discuss your project and how we can bring your app to life.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
