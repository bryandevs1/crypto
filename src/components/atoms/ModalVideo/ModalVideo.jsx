import className from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ModalVideo.module.scss';

const cn = className.bind(styles);

export default function ModalVideo({ videoUrl }) {
  return (
    <section className={cn('modal-video')}>
      <iframe
        className={cn('modal-video__iframe')}
        loading="lazy"
        width="800"
        height="500"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}

ModalVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};
