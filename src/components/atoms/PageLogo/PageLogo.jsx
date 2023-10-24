import NavLogo from '@assets/svg/NavLogo';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PageLogo.module.scss';

const cn = classNames.bind(styles);

export default function PageLogo() {
  return (
    <Link to="/" className={cn('page-logo')}>
      <NavLogo />
      Forte Imperiali
    </Link>
  );
}
