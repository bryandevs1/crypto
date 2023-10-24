import { BurgerIcon, CloseIcon } from '@assets/svg';
import ROUTES from '@shared/routes';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const cn = classNames.bind(styles);

export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    return isBurgerOpen
      ? document.body.classList.add(cn('no-scroll'))
      : document.body.classList.remove(cn('no-scroll'));
  }, [isBurgerOpen]);
  return (
    <>
      <button
        className={cn('nav-button')}
        onClick={() => setIsBurgerOpen((prev) => !prev)}
      >
        {isBurgerOpen ? <CloseIcon /> : <BurgerIcon />}
      </button>
      <nav
        className={cn(
          'navigation',
          { 'navigation--expanded': isBurgerOpen },
          { 'navigation--closed': !isBurgerOpen },
        )}
      >
        <ul className={cn('navigation__wrapper')}>
          {ROUTES.filter((route) => route.nav).map((route) => (
            <li key={route.title} className={cn('navigation__option')}>
              <NavLink
                className={cn('navigation__link')}
                onClick={() => setIsBurgerOpen(false)}
                to={route.path}
              >
                {route.titlle}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
