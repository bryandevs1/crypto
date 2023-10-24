import Button from '@components/atoms/Button';
import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate } from 'react-router';

import imageUrl from '/assets/images/rest-place.jpg';

import styles from './SectionGlimpseOfPortfolio.module.scss';

const cn = classNames.bind(styles);

export default function SectionGlimpseOfPortfolio() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/projects');
  };

  return (
    <div className={cn('section')}>
      <div className={cn('section__text-container')}>
        <h2 className={cn('section__title')}>
          We love design.That&apos;s how we got here.
        </h2>
        <p className={cn('section__description')}>
          It is a long established fact that a reader will be distracted by the of
          readable content .
        </p>
        <Button onClick={handleNavigate}>Our Portfolio</Button>
      </div>
      <img src={imageUrl} alt="" className={cn('section__image')} />
    </div>
  );
}
