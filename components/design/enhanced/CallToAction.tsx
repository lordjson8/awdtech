
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Have an idea?</h2>
        <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
          Let's turn your idea into a beautiful and functional digital product. We'd love to hear from you.
        </p>
        <Button size="lg" variant="outline" asChild>
          <Link href="/contact">Start a Project</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
