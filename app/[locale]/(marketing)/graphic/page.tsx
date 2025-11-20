
import React from 'react';
import EnhancedHero from '@/components/design/enhanced/EnhancedHero';
import ServicesCards from '@/components/design/enhanced/ServicesCards';
import DesignProcess from '@/components/design/enhanced/DesignProcess';

import Tools from '@/components/design/enhanced/Tools';
import PortfolioHighlight from '@/components/design/enhanced/PortfolioHighlight';

import CallToAction from '@/components/design/enhanced/CallToAction';
import Header from '@/components/shared/Header';

export default function DesignPage() {
  return (
    <div className="bg-black">
      <Header />
      <EnhancedHero />
      <ServicesCards />
      <DesignProcess />
      <Tools />
      <PortfolioHighlight />
      <CallToAction />
    </div>
  );
}
