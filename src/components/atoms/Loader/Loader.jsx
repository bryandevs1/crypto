import classNames from 'classnames/bind';
import React from 'react';

import styles from './Loader.module.scss';

const cn = classNames.bind(styles);

export default function Loader() {
  return (
    <div className={cn('loader-wrapper')}>
      <span className={cn('loader')}></span>
    </div>
  );
}
