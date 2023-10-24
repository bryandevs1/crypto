import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import { CircleLink } from '@components/atoms/CustomLink';
import { newsCards } from '@shared';
import { formatDate } from '@shared/functions/dateFormatter.js';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionBlogsIntro.module.scss';

const cn = classNames.bind(styles);

export default function SectionBlogsIntro() {
  const findLatestNewsCard = (newsCards) => {
    if (Array.isArray(newsCards) && newsCards.length > 0) {
      const newsCard = newsCards.reduce((a, b) =>
        formatDate(a.postDate) > formatDate(b.postDate) ? a : b,
      );
      return newsCard;
    }
  };

  const latestNewsCard = findLatestNewsCard(newsCards);

  const { blurhash, imgUrl, title, description, postDate, blogId } = latestNewsCard;

  return (
    <div className={cn('intro')}>
      <h2 className={cn('intro__title')}>Our Latest Product</h2>
      <div className={cn('latest-card')}>
        <CustomLazyLoadImage
          imgUrl={imgUrl}
          blurhash={blurhash}
          containerClass={cn('latest-card__image-container')}
        />
        <div className={cn('latest-card__text-side')}>
          <h3 className={cn('latest-card__text-side__title')}>{title}</h3>
          <p className={cn('latest-card__text-side__description')}>{description}</p>
          <div className={cn('latest-card__text-side__button-container')}>
            {postDate}
            <CircleLink path={`/blogs/${blogId}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
