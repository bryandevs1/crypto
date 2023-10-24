import ServiceCard from '@components/molecules/ServiceCard';
import { serviceCards } from '@shared';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionServices.module.scss';

const cn = classNames.bind(styles);

export default function SectionServices() {
  return (
    <div className={cn('services')}>
      {serviceCards.map((serviceCard) => (
        <ServiceCard key={serviceCard.id} text={serviceCard} />
      ))}
    </div>
  );
}
