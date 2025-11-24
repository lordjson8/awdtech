import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Container from '@/components/shared/Container';

const CallToAction = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
      <Container>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à Créer Votre Application ?
          </h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble une application qui impressionnera vos utilisateurs.
          </p>
          <Button 
            size="lg" 
            asChild
            className="bg-white text-orange-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-orange-400 dark:hover:bg-gray-800 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/contact">
              Obtenir un Devis Gratuit
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;