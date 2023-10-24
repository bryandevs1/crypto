import { Chevron } from '@assets/svg';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './FooterListCard.module.scss';

const cn = classNames.bind(styles);

export default function FooterListCard({ title, links, contactInfo }) {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!links) {
    return (
      <div className={cn('page-links')}>
        <button onClick={() => setIsOpen(!isOpen)} className={cn('page-links__button')}>
          <h3 className={cn('page-links__title')}>
            {contactInfo.title}
            <Chevron
              className={cn('page-links__chevron-icon', {
                'page-links__chevron-icon--expanded': isOpen,
              })}
            />
          </h3>
        </button>
        <ul
          className={cn('page-links__list', {
            'page-links__list--expanded': isOpen,
          })}
        >
          <li>
            <p className={cn('page-links__contact-text')}>{contactInfo.address}</p>
          </li>
          <li>
            <p className={cn('page-links__contact-text')}>{contactInfo.email}</p>
          </li>
          <li>
            <p className={cn('page-links__contact-text')}>{contactInfo.phone}</p>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={cn('page-links__container')}>
      <button onClick={() => setIsOpen(!isOpen)} className={cn('page-links__button')}>
        <h3 className={cn('page-links__title')}>
          {title}
          <Chevron
            className={cn('page-links__chevron-icon', {
              'page-links__chevron-icon--expanded': isOpen,
            })}
          />
        </h3>
      </button>
      <ul
        className={cn('page-links__list', {
          'page-links__list--expanded': isOpen,
        })}
      >
        {links.map((link) => {
          return (
            <li key={link.title}>
              <Link to={link.link} className={cn('page-links__link')}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FooterListCard.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
  contactInfo: PropTypes.object,
};
