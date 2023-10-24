import { SearchIcon } from '@assets/svg';
import ModalImage from '@components/atoms/ModalImage';
import Modal from '@components/molecules/Modal';
import className from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './SectionProjectDetailsImage.module.scss';

const cn = className.bind(styles);

export default function SectionProjectDetailsImage({ image, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn(className)}>
      <button
        onClick={handleModalOpen}
        className={cn('modal-button')}
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className={cn('modal-button__icon-container')}>
          <SearchIcon className={cn('modal-button__icon')} />
        </div>
      </button>
      {isOpen && (
        <Modal ariaLabel="img" isOpen={isOpen} onClose={handleModalClose}>
          <ModalImage alt="altText" caption="This is Caption" image={image} />
        </Modal>
      )}
    </div>
  );
}

SectionProjectDetailsImage.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};
