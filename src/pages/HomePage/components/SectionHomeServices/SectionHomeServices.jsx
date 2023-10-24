import ServiceCard from '@components/molecules/ServiceCard';
import { serviceCards } from '@shared';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionHomeServices.module.scss';

const cn = classNames.bind(styles);

export default function SectionHomeServices() {
  return (
    <div className={cn('services')}>
      {serviceCards.slice(0, 3).map((serviceCard) => (
        <ServiceCard key={serviceCard.id} text={serviceCard} />
      ))}
    </div>
  );
}
