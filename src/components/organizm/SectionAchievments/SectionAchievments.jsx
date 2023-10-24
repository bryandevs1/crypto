import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SectionAchievments.module.scss';
import achievments from './texts/achievments.json';

const cn = classNames.bind(styles);

export default function SectionAchievments({ className }) {
  return (
    <div className={cn('achievments', className)}>
      <div className={cn('achievments__container')}>
        {achievments.map((achievment, i) => (
          <div key={i} className={cn('achievment')}>
            <span className={cn('achievment__text-container')}>
              <p className={cn('achievment__amount')}>{achievment.amount}</p>
              <p className={cn('achievment__description')}>{achievment.description}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

SectionAchievments.proptTypes = {
  classNames: PropTypes.string,
};
