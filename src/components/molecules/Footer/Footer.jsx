import FooterListCard from '@components/atoms/FooterListCard';
import FooterSocialCard from '@components/atoms/FooterSocialCard';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Footer.module.scss';
import { contactInfo, pageLinks, socialInfo } from './text';

const cn = classNames.bind(styles);

export default function Footer({ className }) {
  return (
    <footer className={cn('footer', className)}>
      <div className={cn('footer__links-wrapper')}>
        <FooterSocialCard socialInfo={socialInfo} />
        {pageLinks.map((link) => {
          return (
            <FooterListCard key={link.title} links={link.links} title={link.title} />
          );
        })}
        <FooterListCard contactInfo={contactInfo} />
      </div>
      <div className={cn('footer__copyright')}>Copyright © Forte Imperiali 2023</div>
    </footer>
  );
}

Footer.proptTypes = {
  className: PropTypes.string,
};
