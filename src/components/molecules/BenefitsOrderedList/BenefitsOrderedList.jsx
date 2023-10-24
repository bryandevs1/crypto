import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './BenefitsOrderedList.module.scss';

const cn = classNames.bind(styles);

export default function BenefitsOrderedList({ benefitLists }) {
  return (
    <>
      {benefitLists.map((benefitList, i) => (
        <div key={i} className={cn('benefits-list')}>
          <h2 className={cn('benefits-list__title')}>{benefitList.title}</h2>
          <ol className={cn('ordered-list')}>
            {benefitList.items.map((listItem, i) => (
              <li key={i} className={cn('ordered-list__item')}>
                <p className={cn('ordered-list__text')}>{listItem}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
}

BenefitsOrderedList.propTypes = {
  benefitLists: PropTypes.array.isRequired,
};
