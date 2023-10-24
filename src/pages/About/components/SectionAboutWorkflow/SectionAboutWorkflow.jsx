import Button from '@components/atoms/Button';
import CustomLazyLoadImage from '@components/atoms/CustomLazyLoadImage';
import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate } from 'react-router';

import styles from './SectionAboutWorkflow.module.scss';
import texts from './text/workflowTexts.json';

const cn = classNames.bind(styles);

export default function SectionAboutWorkflow() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <div className={cn('workflow')}>
      {texts.map((text) => (
        <div key={text.id} className={cn('workflow-single')}>
          <div className={cn('workflow-single__text-container')}>
            <h2 className={cn('workflow-single__title')}>{text.title}</h2>
            <p className={cn('workflow-single__description')}>{text.description}</p>
            <Button onClick={() => handleNavigate(text.buttonLink)}>
              {text.buttonTitle}
            </Button>
          </div>
          <CustomLazyLoadImage
            blurhash={text.blurhash}
            imgUrl={text.imgUrl}
            containerClass={cn('workflow-single__image-container')}
          />
        </div>
      ))}
    </div>
  );
}
