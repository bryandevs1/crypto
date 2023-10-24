import ContactForm from '@components/molecules/ContactForm';
import { socialInfo } from '@components/molecules/Footer/text/socialAndContact';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SectionContactUs.module.scss';
import { contactCard, formTexts } from './texts';

const cn = classNames.bind(styles);

export default function SectionContactUs() {
  return (
    <div>
      <h2 className={cn('contact__title')}>
        We love meeting new people and helping them
      </h2>
      <div className={cn('contact__content')}>
        <div className={cn('card')}>
          <ul className={cn('card__list')}>
            {contactCard.map((item) => (
              <li key={item.id} className={cn('card__list__item')}>
                <div className={cn('card__list__icon')}>
                  <img src={item.iconUrl} alt="" />
                </div>
                <p className={cn('card__list__text')}>{item.text}</p>
              </li>
            ))}
          </ul>
          <ul className={cn('card__social-icons-list')}>
            {socialInfo.socialIcons.map((socialIcon) => (
              <li key={socialIcon.imgUrl} className={cn('card__social-icons')}>
                <Link to={socialIcon.link}>
                  <img src={socialIcon.imgUrl} alt="" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm text={formTexts} />
      </div>
    </div>
  );
}
