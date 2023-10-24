import Button from '@components/atoms/Button';
import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';

import phoneIcon from '/assets/svg/phone-icon.svg';

import styles from './SectionEstimate.module.scss';

const cn = classNames.bind(styles);

export default function SectionEstimate({ imageInfo }) {
  const { blurhash, image } = imageInfo;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <div className={cn('estimate')}>
      <div className={cn('estimate__text-container')}>
        <h2 className={cn('estimate__title')}>
          We skillfully craft the art of elegant living with style.
        </h2>
        <p className={cn('estimate__description')}>
          From conceptualization to execution, our team at Forte Imperiali Interior
          meticulously designs spaces that harmonize functionality, aesthetics, and your
          unique vision, ensuring an environment that truly feels like home
        </p>
        <div className={cn('estimate__phone-container')}>
          <div className={cn('estimate__circle')}>
            <img
              href="mailto:smantha057@gmail.com"
              src={phoneIcon}
              alt=""
              className={cn('estimate__circle__img')}
            />
          </div>
          <span className={cn('estimate__phone-text-container')}>
            <p className={cn('estimate__phone')}>+2347060827255</p>
            <p className={cn('estimate__phone-text')}>Call Us Anytime</p>
          </span>
        </div>
        <Button onClick={handleNavigate}>Get A Free Estimate</Button>
      </div>
      <CustomLazyLoadImage
        blurhash={blurhash}
        imgUrl={image}
        containerClass={cn('image-wrapper')}
      />
    </div>
  );
}

SectionEstimate.propTypes = {
  imageInfo: PropTypes.object.isRequired,
};
