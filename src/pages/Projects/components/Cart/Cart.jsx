import './Cart.css';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = (props) => {
  const { cart, handleRemoveFromCart } = props;
  // Function to send image URLs to the server
  const sendImagesToServer = () => {
    const imageUrls = cart.map((item) => item.image.url);
    console.log('Sending image URLs to the server:', imageUrls);

    fetch('http://localhost:5000/sendImages', {
      // Update the URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ images: imageUrls }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log('Server response:', data);
        // Check for success or error in the response and handle accordingly
      })
      .catch((error) => {
        console.error('Error sending images:', error);
        // Handle the error
      });
  };

  return (
    <div>
      <h1 className="text-5xl pb-2 flex text-center">
        <p className="font-bold fo">Cart </p> (Items Added:{' '}
        <b className="text-green-400">{cart.length})</b>
      </h1>
      <div className="lg:grid lg:grid-cols-3 gap-5">
        {cart.map((item, index) => (
          <div key={index} className="cart-item bg-none">
            <img className="image-cover" src={item.image.url} alt="" />
            <button
              className="remove-from-cart-button mt-3 -mb-20 text-center text-gray-800 bg-red-800 hover-bg-white transition duration-150 ease-in-out js mt-1 px-10 py-4 rounded-3xl"
              onClick={() => handleRemoveFromCart(item)}
            >
              <FontAwesomeIcon icon={faTrash} className="pr-3 " />
              Delete{' '}
            </button>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={sendImagesToServer}
          className="text-gray-800 bg-green-400 hover-bg-white transition duration-150 ease-in-out mt-4 px-8 py-3 text-center rounded-3xl mt-6"
        >
          <i className="fas fa-check-circle"></i> SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Cart;
