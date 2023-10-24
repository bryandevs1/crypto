import Hero from '@components/molecules/Hero';
import MainLayout from '@layouts/MainLayout';
import heroImages from '@shared/lazyLoadImages/heroImages.json';
import React from 'react';

import SectionContactUs from './components/SectionContactUs/';
import SectionMap from './components/SectionMap';

export default function Contact() {
  const { contact } = heroImages;

  return (
    <MainLayout>
      <Hero blurhash={contact.blurhash} img={contact.image} title={'Contact Us'} />
      <SectionContactUs />
      <SectionMap />
    </MainLayout>
  );
}
