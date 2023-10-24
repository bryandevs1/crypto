import ProjectDetailsCard from '@components/atoms/ProjectDetailsCard';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './SectionProjectDetails.module.scss';

const cn = classNames.bind(styles);

export default function SectionProjectDetails({ project }) {
  return (
    <div className={cn('project-details')}>
      <ProjectDetailsCard details={project.details} />
      <div className={cn('project-details__description')}>
        <h1 className={cn('project-details__description__title')}>{project.title}</h1>
        <p className={cn('project-details__description__text')}>{project.description}</p>
      </div>
    </div>
  );
}

SectionProjectDetails.propTypes = {
  project: PropTypes.object,
};
