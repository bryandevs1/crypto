import className from 'classnames/bind';
import React from 'react';

import styles from './AfterSubmitMessage.module.scss';

const cn = className.bind(styles);

export default function AfterSubmitMessage() {
  return (
    <div className={cn('message')}>
      <p className={cn('message__text')}>
        <span className={cn('message__colored-text')}>Your message has been sent</span>
        We will contact you as soon as possible
      </p>
    </div>
  );
}
