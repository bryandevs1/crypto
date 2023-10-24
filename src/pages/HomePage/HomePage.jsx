import SectionAchievments from '@components/organizm/SectionAchievments';
import SectionClients from '@components/organizm/SectionClients';
import SectionJoinTeam from '@components/organizm/SectionJoinTeam';
import CustomLayout from '@layouts/CustomLayout/CustomLayout';
import MainLayout from '@layouts/MainLayout';
import homePageImages from '@shared/lazyLoadImages/homePageImages.json';
import classNames from 'classnames/bind';
import React from 'react';

import HomeHero from './components/HomeHero';
import SectionEstimate from './components/SectionEstimate';
import SectionHomeNews from './components/SectionHomeNews';
import SectionHomeProjects from './components/SectionHomeProjects';
import SectionHomeServices from './components/SectionHomeServices';
import SectionTestimonials from './components/SectionTestimonials';
import styles from './HomePage.module.scss';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <HomeHero />
        <SectionHomeServices />
        <SectionEstimate imageInfo={homePageImages.estimate} />
        <SectionClients />
        <SectionHomeProjects />
      </MainLayout>
      <CustomLayout>
        <SectionAchievments className={cn('section-achievments')} />
        <SectionHomeNews />
        <SectionJoinTeam className={cn('join-team')} />
      </CustomLayout>
    </>
  );
}
