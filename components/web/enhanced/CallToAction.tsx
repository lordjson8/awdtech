
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-gray-800 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Have a project in mind? We'd love to hear about it.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
