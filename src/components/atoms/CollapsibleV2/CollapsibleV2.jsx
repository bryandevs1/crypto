import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Chevron } from '@assets/svg';
import styles from './CollapsibleV2.module.scss';

const cn = classNames.bind(styles);

export default function CollapsibleV2({ title, children: text }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <details onToggle={handleOpen} className={cn('chevron')}>
      <summary
        className={cn('chevron__title', {
          'chevron__title--expanded': isOpen,
        })}
      >
        {title}
        <Chevron
          className={cn('chevron__icon', {
            'chevron__icon--expanded': isOpen,
          })}
        />
      </summary>
      <p className={cn('chevron__text')}>{text} </p>
    </details>
  );
}

CollapsibleV2.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
