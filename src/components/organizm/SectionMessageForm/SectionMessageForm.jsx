import MessageForm from '@components/molecules/MessageForm';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionMessageForm.module.scss';
import formTexts from './texts/formTexts.json';

const cn = classNames.bind(styles);

export default function SectionMessageForm() {
  return (
    <div className={cn('section__message')}>
      <h2 className={cn('section__message__title')}>
        Creative project? Let&apos;s have a productive talk.
      </h2>
      <MessageForm text={formTexts} />
    </div>
  );
}
