import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/heroImages/1694260312232.png'

export default function NavLogo({ className }) {
  return (
    <img
      className={className}
      width="94"
      height="64"
      src={logo}
    >
    </img>
  );
}

NavLogo.propTypes = {
  className: PropTypes.string,
};
