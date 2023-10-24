import SliderRadioButton from '@components/atoms/SliderRadioButton';
import { buttonsCategories } from '@shared/constants/texts';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './SlidingButton.module.scss';
import { buttonsInfo } from './texts/texts';

const cn = classNames.bind(styles);

export default function SlidingButton({ onClick, setCurrentPage }) {
  const [currentMovement, setCurrentMovement] = useState(null);
  const { BATHROOM, BEDROOM, KITCHEN, LIVINGAREA } = buttonsCategories;
  const [currentlyActive, setCurrentlyActive] = useState(BATHROOM);

  const movement = (value) => setCurrentMovement(value);
  const slideAndFilter = (category, slidePosition) => {
    movement(slidePosition);
    setTimeout(() => {
      onClick(category);
      setCurrentPage(1);
    }, 500);
  };

  const handleClick = (e) => {
    if (e.target.id === BATHROOM)
      slideAndFilter(BATHROOM, 'button__active-background--to-first');
    else if (e.target.id === BEDROOM)
      slideAndFilter(BEDROOM, 'button__active-background--to-second');
    else if (e.target.id === KITCHEN)
      slideAndFilter(KITCHEN, 'button__active-background--to-third');
    else if (e.target.id === LIVINGAREA)
      slideAndFilter(LIVINGAREA, 'button__active-background--to-fourth');
  };

  const categoriesButton = buttonsInfo.map((item) => (
    <SliderRadioButton
      onClick={handleClick}
      key={item.id}
      text={item}
      className={
        currentlyActive === item.id
          ? classNames(styles['radio-button'], styles.active)
          : styles['radio-button']
      }
    />
  ));

  const onChangeValue = (e) => {
    setCurrentlyActive(e.target.id);
  };

  return (
    <div onChange={onChangeValue} className={cn('button__container')}>
      {categoriesButton}
      <span className={cn('button__active-background', currentMovement)}></span>
    </div>
  );
}

SlidingButton.propTypes = {
  onClick: PropTypes.func,
  setCurrentPage: PropTypes.func,
};
