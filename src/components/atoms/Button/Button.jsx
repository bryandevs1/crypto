import { Arrow } from '@assets/svg';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.module.scss';

const cn = classNames.bind(styles);

export default function Button({ children, styleType, type, onClick }) {
  const customBtnClass = styleType ? `button__${styleType}` : '';
  const customImgClass = styleType ? `path__${styleType}` : '';

  return (
    <button onClick={onClick} type={type} className={cn('button', customBtnClass)}>
      {children}
      <Arrow svgClassName={cn('image')} pathClassName={cn('path', customImgClass)} />
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  styleType: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
