import './FloatingCart.css';

import React, { useState } from 'react';
const FloatingCartButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    onClick(!isOpen);
  };

  return (
    <div className={`floating-cart-button ${isOpen ? 'open' : ''}`} onClick={toggleCart}>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default FloatingCartButton;
