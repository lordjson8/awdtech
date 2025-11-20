
import React from 'react';
import EnhancedHero from '@/components/web/enhanced/EnhancedHero';
import ServicesGrid from '@/components/web/enhanced/ServicesGrid';
import TechStack from '@/components/web/enhanced/TechStack';
import ProcessTimeline from '@/components/web/enhanced/ProcessTimeline';
import CallToAction from '@/components/web/enhanced/CallToAction';
import Header from '@/components/shared/Header';

export default function WebPage() {
  return (
    <div>
       <Header />
      <EnhancedHero />
      <ServicesGrid />
      <TechStack />
      {/* <ProcessTimeline /> */}
      <CallToAction />
    </div>
  );
}
