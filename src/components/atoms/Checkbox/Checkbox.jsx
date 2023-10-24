import classNames from 'classnames/bind';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Checkbox.module.scss';

const cn = classNames.bind(styles);

export default function Checkbox({ label, className, ...props }) {
  const [field, meta] = useField(props);

  const error = meta.touched && meta.error;
  return (
    <div className={cn('checkbox', className)}>
      <label htmlFor={field.name} className={cn('checkbox__label')}>
        <input
          type="checkbox"
          name={field.name}
          id={field.name}
          {...field}
          {...props}
          className={cn('checkbox__input', {
            'checkbox__input--has-error': error,
          })}
          aria-describedby={`${meta.name}-error`}
        />
        {label}
      </label>
      {error && (
        <span id={`${field.name}-error`} className={cn('checkbox__error-msg')}>
          {meta.error}
        </span>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
};
