import TeamOwnerCard from '@components/molecules/TeamOwnerCard';
import { ownerText } from '@shared';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionTeamCards.module.scss';

const cn = classNames.bind(styles);

export default function SectionOwnerCards() {
  return (
    <div className={cn('team-cards')}>
      <h2 className={cn('team-cards__title')}>Our Best Employees</h2>
      <div className={cn('team-cards__wrapper')}>
        {ownerText.map((owneText) => (
          <TeamOwnerCard key={owneText.name} text={owneText} />
        ))}
      </div>
    </div>
  );
}
