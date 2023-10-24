import PageLogo from '@components/atoms/PageLogo';
import Navbar from '@components/molecules/Navbar';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Header.module.scss';

const cn = classNames.bind(styles);

export default function Header({ className }) {
  return (
    <header className={cn('header', className)}>
      <PageLogo />
      <Navbar />
    </header>
  );
}

Header.proptTypes = {
  className: PropTypes.string,
};
