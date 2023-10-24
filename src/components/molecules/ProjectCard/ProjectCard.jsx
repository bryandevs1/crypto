import { CircleLink } from '@components/atoms/CustomLink';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './ProjectCard.module.scss';

const cn = classNames.bind(styles);

export default function ProjectCard({ cardInfo, children }) {
  const [cart, setCart] = useState([]);
  const { title, serviceCategory, projectId } = cardInfo;
  const addToCart = (projectId) => {
    setCart([...cart, projectId]);
  };

  return (
    <>
      {children}
      <div className={cn('project-card__bottom-container')}>
        <span className={cn('project-card__title-category')}>
          <p className={cn('project-card__title')}>
            {title}({cart.length})
          </p>
          <p className={cn('project-card__category')}>
            {serviceCategory} / Artchitecture
          </p>
        </span>
        <button onClick={() => addToCart(projectId)}></button>
        <CircleLink> </CircleLink>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  cardInfo: PropTypes.object,
  children: PropTypes.node,
};
