import { CommaIcon } from '@assets/svg/';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionCommaV1.module.scss';

const cn = classNames.bind(styles);

export default function SectionCommaV1() {
  return (
    <div className={cn('section-comma')}>
      <CommaIcon />
      <p className={cn('section-comma__text')}>
        A room should never allow the eye to settle in one place. It should smile at you
        and create fantasy.
      </p>
      <p className={cn('section-comma__author')}>- Juan Montoya</p>
    </div>
  );
}
