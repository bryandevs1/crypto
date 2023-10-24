import PaginationPageLink from '@components/atoms/PaginationPageLink';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './PagePagination.module.scss';

const cn = classNames.bind(styles);

export default function PagePagination({ currentPage, amountOfPages, setCurrentPage }) {
  let startPageIndex;
  let endPageIndex;

  if (amountOfPages <= 3) {
    startPageIndex = 0;
    endPageIndex = amountOfPages;
  } else {
    if (currentPage <= 2) {
      startPageIndex = 0;
      endPageIndex = 3;
    } else if (currentPage + 1 >= amountOfPages) {
      startPageIndex = amountOfPages - 3;
      endPageIndex = amountOfPages;
    } else {
      startPageIndex = currentPage - 2;
      endPageIndex = currentPage + 1;
    }
  }

  const amountOfPagesArray = [...Array(amountOfPages + 1).keys()].slice(1);
  const displayedPages = amountOfPagesArray.slice(startPageIndex, endPageIndex);

  return (
    <nav className={cn('page-pagination')}>
      {displayedPages.map((pageNum, index) => (
        <PaginationPageLink
          linkIndicator={pageNum}
          key={index}
          active={pageNum === currentPage}
          onClick={() => setCurrentPage(pageNum)}
        />
      ))}
      <PaginationPageLink
        linkIndicator=">"
        disabled={currentPage === amountOfPages}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      />
    </nav>
  );
}

PagePagination.propTypes = {
  setCurrentPage: PropTypes.func,
  amountOfPages: PropTypes.number,
  currentPage: PropTypes.number,
};
