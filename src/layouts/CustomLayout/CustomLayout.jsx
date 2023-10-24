import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Children } from 'react';

import styles from './CustomLayout.module.scss';

const cn = classNames.bind(styles);

export default function CustomLayout({ children }) {
  return (
    <div className={cn('custom-layout')}>
      {Children.map(children, (child, index) => (
        <section
          className={cn(
            index !== 0 ? 'custom-layout__section' : 'custom-layout__section-wide',
          )}
        >
          {child}
        </section>
      ))}
    </div>
  );
}

CustomLayout.proptTypes = {
  children: PropTypes.node.isRequired,
};
