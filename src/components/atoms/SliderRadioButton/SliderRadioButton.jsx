import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SliderRadioButton.module.scss';

const cn = classNames.bind(styles);

export default function SliderRadioButton({ text, className, onClick }) {
  return (
    <>
      <input
        id={text.id}
        onClick={onClick}
        type="radio"
        value={text.value}
        className={cn('input')}
        name={'categories'}
      />
      <label className={className} htmlFor={text.id}>
        {text.value}
      </label>
    </>
  );
}

SliderRadioButton.propTypes = {
  text: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
