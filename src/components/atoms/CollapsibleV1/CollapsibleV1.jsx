import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Minus, Plus } from '@assets/svg';
import styles from './CollapsibleV1.module.scss';

const cn = classNames.bind(styles);

export default function CollapsibleV1({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <details onToggle={handleOpen} className={cn('chevron')}>
      <summary className={cn('chevron__title')}>
        {title}
        <div
          className={cn('chevron__icon-container', {
            'chevron__icon-container--expanded': isOpen,
          })}
        >
          {isOpen ? <Minus /> : <Plus />}
        </div>
      </summary>
      <p className={cn('chevron__text')}>{children} </p>
    </details>
  );
}

CollapsibleV1.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
