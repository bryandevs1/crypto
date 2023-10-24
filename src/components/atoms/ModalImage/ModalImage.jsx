import useMouseMove from '@hooks';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from './ModalImage.module.scss';

const cn = classNames.bind(styles);

export default function ModalImage({ image, alt, caption }) {
  const [isMaximized, setIsMaximized] = useState(false);
  const { handleMouseMove, isMoving } = useMouseMove();

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  useEffect(() => {
    const maximizeImage = (e) => e.key === 'f' && handleMaximize();

    document.addEventListener('keyup', maximizeImage);

    return () => {
      document.removeEventListener('keyup', maximizeImage);
    };
  }, []);

  return (
    <figure className={cn('image')} onMouseMove={handleMouseMove}>
      <div
        className={cn('image__container', {
          'image__container--maximized': isMaximized,
        })}
        onClick={handleMaximize}
      >
        <img src={image} alt={alt} className={cn('image__wrapper')} />
      </div>
      <figcaption
        className={cn('image__figcaption', {
          'image__figcaption--animated': !isMoving,
          'image__figcaption--maximized': isMaximized,
        })}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

ModalImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
