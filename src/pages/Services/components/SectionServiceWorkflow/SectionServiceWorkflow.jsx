import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionServiceWorkflow.module.scss';
import texts from './text/workflowTexts.json';

const cn = classNames.bind(styles);

export default function SectionServiceWorkflow() {
  return (
    <div className={cn('workflow')}>
      <h2 className={cn('workflow__title')}>How We Work</h2>
      <p className={cn('workflow__description')}>
        Revealing Our Comprehensive Approach: How We Work from Concept to Perfection
      </p>
      <div className={cn('workflow-steps')}>
        {texts.map((text) => (
          <div key={text.id} className={cn('workflow-step')}>
            <div className={cn('text-side')}>
              <div className={cn('text-side__icon-container')}>
                <img src={text.iconUrl} alt="" className={cn('text-side__icon')} />
                <p className={cn('text-side__number')}>{text.step}</p>
              </div>
              <h3 className={cn('text-side__title')}>{text.title}</h3>
              <p className={cn('text-side__description')}>{text.description}</p>
            </div>
            <CustomLazyLoadImage
              blurhash={text.blurhash}
              imgUrl={text.imgUrl}
              containerClass={cn('workflow-step__image')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
