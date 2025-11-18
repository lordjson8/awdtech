
import React from 'react';
import EnhancedHero from '@/components/mobile/enhanced/EnhancedHero';
import Features from '@/components/mobile/enhanced/Features';
import Expertise from '@/components/mobile/enhanced/Expertise';
import AppShowcase from '@/components/mobile/enhanced/AppShowcase';
import CallToAction from '@/components/mobile/enhanced/CallToAction';

export default function MobilePage() {
  return (
    <div>
      <EnhancedHero />
      <Features />
      <Expertise />
      <AppShowcase />
      <CallToAction />
    </div>
  );
}
