import CallToAction from '@/components/projects/CallToAction';
import Hero from '@/components/projects/Hero';
import ProjectGrid from '@/components/projects/ProjectGrid';
import Header from '@/components/shared/Header'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectGrid />
      <CallToAction />
    </div>
  )
}
