import Button from '@components/atoms/Button';
import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SectionError.module.scss';

const cn = classNames.bind(styles);

export default function SectionError({
  title,
  description,
  buttonText,
  imgUrl,
  blurhash,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <section className={cn('section')}>
      <div className={cn('section__left-side')}>
        <div className={cn('text-container')}>
          <h1 className={cn('text-container__title')}>{title}</h1>
          <p className={cn('text-container__description')}>{description}</p>
          <Button onClick={handleNavigate}>{buttonText}</Button>
        </div>
      </div>
      <CustomLazyLoadImage
        blurhash={blurhash}
        imgUrl={imgUrl}
        containerClass={cn('section__image-container')}
      />
    </section>
  );
}

SectionError.proptTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  imgUrl: PropTypes.string,
  blurhash: PropTypes.string,
};
