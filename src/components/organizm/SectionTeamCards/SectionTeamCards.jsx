import TeamMemberCard from '@components/molecules/TeamMemberCard';
import { employeesText } from '@shared';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SectionTeamCards.module.scss';

const cn = classNames.bind(styles);

export default function SectionTeamCards() {
  return (
    <div className={cn('team-cards')}>
      <h2 className={cn('team-cards__title')}>Our Best Employees</h2>
      <div className={cn('team-cards__wrapper')}>
        {employeesText.slice(0, 4).map((employeeText) => (
          <TeamMemberCard key={employeeText.name} text={employeeText} />
        ))}
      </div>
    </div>
  );
}
