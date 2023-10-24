import React from 'react';
import PropTypes from 'prop-types';

export default function Minus({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="8.74228e-08" y1="1" x2="18" y2="1" stroke="#292F36" strokeWidth="2" />
    </svg>
  );
}

Minus.propTypes = {
  className: PropTypes.string,
};
