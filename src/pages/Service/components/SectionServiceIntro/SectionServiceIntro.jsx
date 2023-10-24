import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SectionServiceIntro.module.scss';

const cn = classNames.bind(styles);

export default function SectionServiceIntro({ introInfo }) {
  const { introTitle, text, shortSummary } = introInfo;

  return (
    <div className={cn('service-intro')}>
      <h2 className={cn('service-intro__title')}>{introTitle}</h2>
      <p className={cn('service-intro__text')}>
        <span className={cn('service-intro__highlighted-text')}>{shortSummary}</span>
        {text}
      </p>
    </div>
  );
}

SectionServiceIntro.propTypes = {
  introInfo: PropTypes.object,
};
