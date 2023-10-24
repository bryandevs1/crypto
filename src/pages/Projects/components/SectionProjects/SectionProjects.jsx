import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import { CircleLink } from '@components/atoms/CustomLink';
import PagePagination from '@components/molecules/PagePagination';
import SlidingButton from '@components/molecules/SlidingButton';
import { buttonsCategories } from '@shared/constants/texts';
import { filterProjects } from '@shared/functions/dataFilter';
import { projects } from '@shared/projects';
import classNames from 'classnames/bind';
import React, { useState } from 'react';

import styles from './SectionProjects.module.scss';

const cn = classNames.bind(styles);

export default function SectionProjects() {
  const initialProjects = filterProjects(projects, buttonsCategories.BATHROOM);
  const projectsPerPage = 8;

  const [currentProjects, setCurrentProjects] = useState(initialProjects);
  const [currentPage, setCurrentPage] = useState(1);

  const amountOfPages = Math.ceil(currentProjects.length / projectsPerPage);

  const handleFilter = (category) => {
    setCurrentProjects(filterProjects(projects, category));
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const displayedProjects = currentProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  // TODO: Need to make it so that when we change page it scroll to the top of projects section
  // With current solution it scrolls to the top of the whole page which I think is a bad UX
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }, [currentPage]);

  return (
    <div className={cn('projects')}>
      <SlidingButton onClick={handleFilter} setCurrentPage={setCurrentPage} />
      <div className={cn('projects__cards')}>
        {displayedProjects.map((project) => (
          <div key={project.id} className={cn('project-card')}>
            <CustomLazyLoadImage
              blurhash={project.blurhash}
              imgUrl={project.imgUrl}
              containerClass={cn('project-card__image-wrapper')}
            />
            <div className={cn('project-card__bottom-container')}>
              <span className={cn('project-card__title-category')}>
                <p className={cn('project-card__title')}>{project.title}</p>
                <p className={cn('project-card__category')}>
                  {project.serviceCategory} / Artchitecture
                </p>
              </span>
              <CircleLink path={`/projects/${project.projectId}`} size="large" />
            </div>
          </div>
        ))}
      </div>
      <PagePagination
        amountOfPages={amountOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
