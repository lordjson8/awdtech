import Header from '@/components/shared/Header';
import Hero from '@/components/shared/Hero';
import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <>
  <Header />
  <Hero />
  </>;
}

// import {getTranslations} from 'next-intl/server';
 
// export default async function HomePage() {
//   const t = await getTranslations('HomePage');
//   return <h1>{t('title')}</h1>;
// }