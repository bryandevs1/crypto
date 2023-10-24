import PageLogo from '@components/atoms/PageLogo';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FooterSocialCard.module.scss';

const cn = classNames.bind(styles);

export default function FooterSocialCard({ socialInfo }) {
  const { description, socialIcons } = socialInfo;

  return (
    <div>
      <PageLogo />
      <p className={cn('social-card__description')}>{description}</p>
      <ul className={cn('social-card__social-links')}>
        {socialIcons.map((socialIcon) => {
          return (
            <li key={socialIcon.imgUrl} className={cn('social-card__social-option')}>
              <Link to={socialIcon.link} className={cn('link')}>
                <img src={socialIcon.imgUrl} alt="" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FooterSocialCard.propTypes = {
  socialInfo: PropTypes.object.isRequired,
};
