import React from 'react';
import PropTypes from 'prop-types';

import TeamStatsMenuItem from './TeamStatsMenuItem/TeamStatsMenuItem';

const teamStatsMenu = ({ styles }) => {
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
    <div className={styles}>
      {options.map((option) => {
        return <TeamStatsMenuItem option={option} />;
      })}
    </div>
  );
};

teamStatsMenu.propTypes = {
  styles: PropTypes.string.isRequired,
};

export default teamStatsMenu;
