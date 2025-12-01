
import ContactForm from '@/components/contact/ContactForm';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import React from 'react';

export default function ContactPage() {
  return (
    <div>
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    
    </div>
  );
}
