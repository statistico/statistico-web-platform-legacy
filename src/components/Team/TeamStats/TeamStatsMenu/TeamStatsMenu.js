import React from 'react';

import TeamStatsMenuItem from './TeamStatsMenuItem/TeamStatsMenuItem';

const teamStatsMenu = () => {
  const options = [
    'Attacks Dangerous',
    'Attacks Total',
    'Corners',
    'Fouls',
    'Goals',
    'Goal Attempts',
    'Offsides',
    'Passes Accuracy',
    'Passes Percentage',
    'Passes Total',
    'Possession',
    'Red Cards',
    'Saves',
    'Shots Blocked',
    'Shots Inside Box',
    'Shots Off Goal',
    'Shots On Goal',
    'Shots Outside Box',
    'Shots Total',
    'Yellow Cards',
    'xG',
  ];

  return (
    <div>
      {options.map((option) => {
        return <TeamStatsMenuItem option={option} />;
      })}
    </div>
  );
};

export default teamStatsMenu;
