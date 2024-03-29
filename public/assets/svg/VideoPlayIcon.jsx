import React from 'react';
import PropTypes from 'prop-types';

export default function VideoPlayIcon({ className }) {
  return (
    <svg
      className={className}
      width="21"
      height="32"
      viewBox="0 0 21 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.94101 31.4289L20.1666 17.7781C20.428 17.558 20.6378 17.2851 20.7817 16.9779C20.9255 16.6708 21 16.3368 21 15.9987C21 15.6607 20.9255 15.3266 20.7817 15.0195C20.6378 14.7123 20.428 14.4394 20.1666 14.2194L3.94101 0.568572C2.39226 -0.734201 0 0.345909 0 2.34792V29.6534C0 31.6554 2.39226 32.7355 3.94101 31.4289Z"
        fill="#CDA274"
      />
    </svg>
  );
}

VideoPlayIcon.propTypes = {
  className: PropTypes.string,
};
