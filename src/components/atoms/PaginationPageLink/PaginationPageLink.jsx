import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './PaginationPageLink.module.scss';

const cn = classNames.bind(styles);

export default function PaginationPageLink({ linkIndicator, onClick, disabled, active }) {
  if (disabled) {
    return <span className={cn('page-link--disabled')}>{linkIndicator}</span>;
  }

  return (
    <a
      aria-current={active ? 'page' : undefined}
      onClick={() => onClick()}
      className={cn('page-link', {
        'page-link--active': active,
      })}
    >
      {linkIndicator}
    </a>
  );
}

PaginationPageLink.propTypes = {
  linkIndicator: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};
