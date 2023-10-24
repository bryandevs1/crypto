import { ArrowLink } from '@components/atoms/CustomLink';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ServiceCard.module.scss';

const cn = classNames.bind(styles);

export default function ServiceCard({ text }) {
  const { cardTitle, description, serviceId } = text;

  return (
    <div className={cn('service-card')}>
      <h4 className={cn('service-card__title')}>{cardTitle}</h4>
      <p className={cn('service-card__description')}>{description}</p>
      <ArrowLink
        linkClassName={cn('arrow-text')}
        path={`/services/${serviceId}`}
        arrowIconClassName={cn('arrow-animation')}
      >
        Read More
      </ArrowLink>
    </div>
  );
}

ServiceCard.propTypes = {
  text: PropTypes.object,
};
