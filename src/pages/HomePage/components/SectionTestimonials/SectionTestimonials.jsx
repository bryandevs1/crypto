import TestimonialCard from '@components/molecules/TestimonialCard';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionTestimonials.module.scss';
import testimonialsInfo from './text/testimonialsText.json';

const cn = classNames.bind(styles);

export default function SectionTestimonials() {
  return (
    <div className={cn('testimonials')}>
      <h2 className={cn('testimonials__title')}>What the People Thinks About Us</h2>
      <div className={cn('testimonials__cards')}>
        {testimonialsInfo.map((testimonialInfo) => (
          <TestimonialCard key={testimonialInfo.id} cardInfo={testimonialInfo} />
        ))}
      </div>
    </div>
  );
}
