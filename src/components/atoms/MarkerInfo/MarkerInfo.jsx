import PageLogo from '@components/atoms/PageLogo';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './MarkerInfo.module.scss';
import markerText from './markerText.json';

const cn = classNames.bind(styles);

export default function MarkerInfo() {
  return (
    <div>
      <PageLogo />
      {markerText.map((text) => (
        <p key={text.id} className={cn('marker-info')}>
          <span className={cn('marker-info__title')}>{text.label}</span>
          {text.description}
        </p>
      ))}
    </div>
  );
}
