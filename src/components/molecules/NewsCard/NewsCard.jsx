import { gql, useQuery } from '@apollo/client';
import { CircleLink } from '@components/atoms/CustomLink';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './NewsCard.module.scss';

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

export default function NewsCard({ addToCart }) {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products;

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className={cn('news-card')}>
      {products.map((item, index) => (
        <div className={cn('news-card__top-container')} key={index}>
          <img src={item.image.url} alt="" className={cn('news-card__img')} />
          <p className={cn('news-card__tag')}>{item.tag}</p>
          <div className={cn('news-card__bottom-container')}>
            <p>{item.tag}</p>
            <CircleLink path={`/blogs/${item.tag}`} className={cn('news-card__link')} />
          </div>
        </div>
      ))}
    </div>
  );
}

NewsCard.propTypes = {
  cardInfo: PropTypes.object,
};

// NewsCard.js
