import { VideoPlayIcon } from '@assets/svg';
import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import ModalVideo from '@components/atoms/ModalVideo';
import Modal from '@components/molecules/Modal';
import className from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './SectionServiceVideo.module.scss';

const cn = className.bind(styles);

export default function SectionServiceVideo({ thumbnail, videoUrl, blurhash }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen} className={cn('modal-button')}>
        <CustomLazyLoadImage blurhash={blurhash} imgUrl={thumbnail} />
        <div className={cn('modal-button__play-icon-container')}>
          <VideoPlayIcon className={cn('modal-button__icon')} />
        </div>
      </button>
      {isOpen && (
        <Modal ariaLabel="video" isOpen={isOpen} onClose={handleModalClose}>
          <ModalVideo videoUrl={videoUrl} />
        </Modal>
      )}
    </div>
  );
}

SectionServiceVideo.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  blurhash: PropTypes.string.isRequired,
};
