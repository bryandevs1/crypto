import { gql, useQuery } from '@apollo/client';
import NewsCard from '@components/molecules/NewsCard';
import PagePagination from '@components/molecules/PagePagination';
import { newsCards } from '@shared';
import classNames from 'classnames/bind';
import React, { useState } from 'react';

import styles from './SectionBlogsNews.module.scss';

const cn = classNames.bind(styles);

const GET_PRODUCTS = gql`
  query Products {
    products {
      image {
        url
      }
      tag
    }
  }
`;

export default function SectionBlogsNews() {
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const newsCards = data.products;

  const amountOfPages = Math.ceil(newsCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const displayedCards = newsCards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className={cn('news')}>
      <h2 className={cn('news__title')}>All Products</h2>
      <div className={cn('news__cards')}>
        {displayedCards.map((card, index) => (
          <NewsCard key={index} cardInfo={card} />
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
