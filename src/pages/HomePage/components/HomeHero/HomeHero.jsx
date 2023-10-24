import Button from '@components/atoms/Button';
import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import heroImages from '@shared/lazyLoadImages/heroImages.json';
import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './HomeHero.module.scss';

const cn = classNames.bind(styles);

export default function HomeHero() {
  const navigate = useNavigate();
  const { home } = heroImages;

  const handleNavigate = () => {
    navigate('/services');
  };

  return (
    <div className={cn('hero')}>
      <CustomLazyLoadImage
        blurhash={home.blurhash}
        imgUrl={home.image}
        containerClass={cn('hero__img')}
      />
      <div className={cn('hero__title-container')}>
        <h1 className={cn('hero__title')}>Let Your Home Be Unique</h1>
        <p className={cn('hero__description')}>
          Unleash creativity, let your home reflect your unique style and personality,
          making it a one-of-a-kind sanctuary of self-expression.
        </p>
        <Button onClick={handleNavigate}>Get Started</Button>
      </div>
    </div>
  );
}
