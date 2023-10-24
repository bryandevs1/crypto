import './Item.css';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FancyBox from 'react-fancybox';
import Modal from 'react-modal'; // Import the react-modal library

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
    zIndex: 1,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none', // No background color
  },
};

const Item = (props) => {
  const { tag, image } = props.item;
  const { handleAddToCart, item } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="item-cart bg-gold-200 hover-bg-gray-700 rounded m-3 p-10 transform hover:-translate-y-2 to-hover transition duration-300">
      <a onClick={openModal} className="art-port-cover">
        <img src={image.url} alt="post" />
      </a>
      <button
        onClick={() => handleAddToCart(item)}
        className="mt-5 lg:-mb-20 mb-5 text-center text-gray-800 bg-green-400 hover-bg-white transition duration-150 ease-in-out mt-1 px-10 py-4 rounded-3xl"
      >
        {' '}
        <FontAwesomeIcon icon={faShoppingCart} /> I want this!
      </button>

      {/* Modal to display the full-sized image */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Full-sized Image"
      >
        <img src={image.url} alt="Full-sized Image" />
        <a onClick={closeModal} className="close-button">
          &times;
        </a>
      </Modal>
    </div>
  );
};

export default Item;
