import Features from '@/components/home/Features';
import PartnersSection from '@/components/home/Partners';
import Stats from '@/components/home/Stats';
import Team from '@/components/home/Team';
import Header from '@/components/shared/Header';
import Hero from '@/components/shared/Hero';
import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <>
  <Header />
  <Hero />
  <Stats />
  <Features />
  <Team />
  <PartnersSection />
  </>;
}

// import {getTranslations} from 'next-intl/server';
 
// export default async function HomePage() {
//   const t = await getTranslations('HomePage');
//   return <h1>{t('title')}</h1>;
// }