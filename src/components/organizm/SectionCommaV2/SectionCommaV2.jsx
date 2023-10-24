import classNames from 'classnames/bind';
import React from 'react';

import { CommaIcon } from '@assets/svg';
import styles from './SectionCommaV2.module.scss';

const cn = classNames.bind(styles);

export default function SectionCommaV2() {
  return (
    <div className={cn('section-comma')}>
      <div className={cn('section-comma__container')}>
        <CommaIcon className={cn('section-comma__icon')} />
        <p className={cn('section-comma__text')}>
          The details are not the details. They make the design.
        </p>
      </div>
    </div>
  );
}
