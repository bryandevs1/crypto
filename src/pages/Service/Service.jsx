import Hero from '@components/molecules/Hero';
import SectionAchievments from '@components/organizm/SectionAchievments';
import SectionClients from '@components/organizm/SectionClients';
import CustomLayout from '@layouts/CustomLayout/CustomLayout';
import MainLayout from '@layouts/MainLayout';
import { serviceCards } from '@shared';
import heroImages from '@shared/lazyLoadImages/heroImages.json';
import classNames from 'classnames/bind';
import React from 'react';
import { useParams } from 'react-router-dom';

import SectionGlimpseOfPortfolio from './components/SectionGlimpseOfPortfolio';
import SectionServiceBenefits from './components/SectionServiceBenefits';
import SectionServiceIntro from './components/SectionServiceIntro';
import SectionServiceVideo from './components/SectionServiceVideo';
import styles from './Service.module.scss';

const cn = classNames.bind(styles);

export default function Service() {
  const { service } = heroImages;
  const { serviceId } = useParams();

  const serviceInfo = serviceCards.find(
    (serviceCard) => serviceCard.serviceId === serviceId,
  );

  return (
    <>
      <MainLayout>
        <Hero
          title={serviceInfo.cardTitle}
          img={service.image}
          blurhash={service.blurhash}
        />
        <SectionServiceIntro introInfo={serviceInfo} />
        <SectionClients />
        <SectionServiceVideo
          thumbnail={serviceInfo.thumbnail}
          videoUrl={serviceInfo.videoUrl}
          blurhash={serviceInfo.blurhash}
        />
        <SectionServiceBenefits />
        <SectionGlimpseOfPortfolio />
      </MainLayout>
      <CustomLayout>
        <SectionAchievments className={cn('section-achievments')} />
      </CustomLayout>
    </>
  );
}
