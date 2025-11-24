
import React from 'react';
import EnhancedHero from '@/components/mobile/enhanced/EnhancedHero';
import Features from '@/components/mobile/enhanced/Features';
import Expertise from '@/components/mobile/enhanced/Expertise';
import AppShowcase from '@/components/mobile/enhanced/AppShowcase';
import CallToAction from '@/components/mobile/enhanced/CallToAction';
import Header from '@/components/shared/Header';

export default function MobilePage() {
  return (
    <div>
       <Header />
      <EnhancedHero />
      <Features />
      <Expertise />
      {/* <AppShowcase /> */}
      <CallToAction />
    </div>
  );
}
