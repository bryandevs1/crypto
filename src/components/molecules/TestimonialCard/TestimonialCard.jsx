import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './TestimonialCard.module.scss';

const cn = classNames.bind(styles);

export default function TestimonialCard({ cardInfo }) {
  const { imgUrl, name, address, comment } = cardInfo;

  return (
    <div className={cn('testimonial-card')}>
      <div className={cn('testimonial-card__top-container')}>
        <img className={cn('testimonial-card__img')} src={imgUrl} alt="" />
        <span className={cn('testimonial-card__name-address')}>
          <p className={cn('testimonial-card__name')}>{name}</p>
          <p className={cn('testimonial-card__address')}>{address}</p>
        </span>
      </div>
      <p className={cn('testimonial-card__comment')}>{comment}</p>
    </div>
  );
}

TestimonialCard.propTypes = {
  cardInfo: PropTypes.object,
};
