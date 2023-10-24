import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Children } from 'react';

import styles from './MainLayout.module.scss';

const cn = classNames.bind(styles);

export default function MainLayout({ children }) {
  return (
    <div className={cn('main-layout')}>
      {Children.map(children, (child, index) => (
        <section
          className={cn(index !== 0 ? 'main-layout__section' : 'main-layout__hero')}
        >
          {child}
        </section>
      ))}
    </div>
  );
}

MainLayout.proptTypes = {
  children: PropTypes.node.isRequired,
};
