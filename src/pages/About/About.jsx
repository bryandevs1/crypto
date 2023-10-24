import Hero from '@components/molecules/Hero';
import SectionCommaV1 from '@components/organizm/SectionCommaV1';
import SectionMessageForm from '@components/organizm/SectionMessageForm';
import SectionTeamCards from '@components/organizm/SectionTeamCards';
import CustomLayout from '@layouts/CustomLayout';
import MainLayout from '@layouts/MainLayout';
import heroImages from '@shared/lazyLoadImages/heroImages.json';
import React from 'react';

import SectionAboutWorkflow from './components/SectionAboutWorkflow';

export default function About() {
  const { about } = heroImages;

  return (
    <>
      <MainLayout>
        <Hero title={'About Us'} img={about.image} blurhash={about.blurhash} />
        <SectionCommaV1 />
        <SectionAboutWorkflow />
      </MainLayout>
      <CustomLayout>
        <SectionMessageForm />
      </CustomLayout>
    </>
  );
}
