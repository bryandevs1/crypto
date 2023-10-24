import Hero from '@components/molecules/Hero';
import MainLayout from '@layouts/MainLayout';
import heroImages from '@shared/lazyLoadImages/heroImages.json';
import React from 'react';

import SectionBlogsIntro from '../Blogs/components/SectionBlogsIntro';
import SectionBlogsNews from '../Blogs/components/SectionBlogsNews';
import Container from './components/Container/Container';
import SectionProjects from './components/SectionProjects';

export default function Projects() {
  const { projects } = heroImages;

  return (
    <>
      <MainLayout>
        <Hero title={'Our Projects'} img={projects.image} blurhash={projects.blurhash} />
        <SectionBlogsIntro />
        <SectionBlogsNews />
      </MainLayout>
      {/* <Container /> */}
    </>
  );
}
