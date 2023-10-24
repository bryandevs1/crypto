import classNames from 'classnames/bind';
import React from 'react';

import imagesUrl from './imgsUrl.json';
import styles from './SectionClients.module.scss';

const cn = classNames.bind(styles);

export default function SectionClients() {
  return (
    <div className={cn('clients')}>
      {imagesUrl.map((imageUrl) => (
        <img
          className={cn('clients__images')}
          key={imageUrl.imgUrl}
          src={imageUrl.imgUrl}
          alt=""
        />
      ))}
    </div>
  );
}
