import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ProjectDetailsCard.module.scss';

const cn = classNames.bind(styles);

export default function ProjectDetailsCard({ details }) {
  return (
    <div className={cn('project-details__list-wrapper')}>
      <ul className={cn('project-details__list')}>
        {details.map((detail) => (
          <li key={detail.title} className={cn('project-details__list-item')}>
            <h2 className={cn('project-details__list-item__title')}>{detail.title}</h2>
            <p className={cn('project-details__list-item__text')}>{detail.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProjectDetailsCard.propTypes = {
  details: PropTypes.array,
};
