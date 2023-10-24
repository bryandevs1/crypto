// Container.js
import './Container.css';

import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';

import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import FloatingCartButton from './FloatingCart'; // Import the new component

const GET_PRODUCTS = gql`
  query Products {
    products {
      image {
        url
      }
      tag
    }
  }
`;

const Container = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Add state for cart open/close

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const items = data.products;

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item !== itemToRemove);
    setCart(updatedCart);
  };

  // Function to toggle the cart panel
  const toggleCartPanel = (isOpen) => {
    setIsCartOpen(isOpen);
  };

  return (
    <div className="container-section ml-20 lg:ml-20 pt-10">
      <h1 className="text-5xl pb-2 flex text-center">
        <p className="font-bold fo">Cart </p> (Items Added: {cart.length})
      </h1>
      <div className="lg:grid grid-cols-1 lg:gap-16 p-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <Item key={index} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      {/* Add the FloatingCartButton component */}
      <FloatingCartButton onClick={toggleCartPanel} />
      {isCartOpen && (
        <div className="cart-panel">
          <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
        </div>
      )}
    </div>
  );
};

export default Container;
