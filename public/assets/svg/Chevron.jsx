import React from 'react';
import PropTypes from 'prop-types';

export default function Chevron({ className }) {
  return (
    <svg
      className={className}
      width="8"
      height="17"
      viewBox="0 0 8 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.999526 15.1858L6.94238 8.50008L0.999525 1.81436"
        stroke="#292F36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Chevron.propTypes = {
  className: PropTypes.string,
};
