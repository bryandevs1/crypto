import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import facebookIcon from '/assets/svg/socialMediaIcons/facebook.svg';
import instagramIcon from '/assets/svg/socialMediaIcons/instagram.svg';
import linkedinIcon from '/assets/svg/socialMediaIcons/linkedin.svg';
import twitterIcon from '/assets/svg/socialMediaIcons/twitter.svg';

import styles from './TeamMemberCard.module.scss';

const cn = classNames.bind(styles);

export default function TeamMemberCard({ text }) {
  const { name, country, profession, phone, email, imgUrl, blurhash, socialMedia } = text;
  const { facebookLink, twitterLink, linkedinLink, instagramLink } = socialMedia;

  return (
    <div className={cn('employee-card')}>
      <div className={cn('employee-card__wrapper')}>
        <div className={cn('card-back')}>
          <p className={cn('card-back__name')}>{name}</p>
          <p className={cn('card-back__profession-country')}>
            {profession}, {country}
          </p>
          <ul className={cn('social-media')}>
            <li>
              <Link to={facebookLink}>
                <img src={facebookIcon} alt="" />
              </Link>
            </li>
            <li>
              <Link to={twitterLink}>
                <img src={twitterIcon} alt="" />
              </Link>
            </li>
            <li>
              <Link to={linkedinLink}>
                <img src={linkedinIcon} alt="" />
              </Link>
            </li>
            <li>
              <Link to={instagramLink}>
                <img src={instagramIcon} alt="" />
              </Link>
            </li>
          </ul>
          <p className={cn('card-back__phone')}>{phone}</p>
          <p className={cn('card-back__email')}>{email}</p>
        </div>
        <CustomLazyLoadImage
          blurhash={blurhash}
          imgUrl={imgUrl}
          containerClass={cn('card-front')}
        />
      </div>
    </div>
  );
}

TeamMemberCard.propTypes = {
  text: PropTypes.object,
};
