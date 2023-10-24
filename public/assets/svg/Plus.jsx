import React from 'react';
import PropTypes from 'prop-types';

export default function Plus({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="8.74228e-08" y1="9" x2="18" y2="9" stroke="#292F36" strokeWidth="2" />
      <line x1="9" y1="18" x2="9" stroke="#292F36" strokeWidth="2" />
    </svg>
  );
}

Plus.propTypes = {
  className: PropTypes.string,
};
