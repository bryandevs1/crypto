import NewsCard from '@components/molecules/NewsCard';
import { newsCards } from '@shared';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionHomeNews.module.scss';

const cn = classNames.bind(styles);

export default function SectionHomeNews() {
  return (
    <div className={cn('news')}>
      <div className={cn('news__text-container')}>
        <h2 className={cn('news__title')}>Featured Items</h2>
        <p className={cn('news__description')}>
          Explore a World of Exclusive Deals and Discounts - Shop Now for a Wide Selection
          of High-Quality Products!
        </p>
      </div>
      <div className={cn('news__cards-container')}>
        {newsCards.slice(0, 3).map((newsCard) => (
          <NewsCard key={newsCard.id} cardInfo={newsCard} />
        ))}
      </div>
    </div>
  );
}
