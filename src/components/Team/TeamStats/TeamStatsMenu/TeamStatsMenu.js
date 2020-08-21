import React from 'react';
import PropTypes from 'prop-types';

import TeamStatsMenuItem from './TeamStatsMenuItem/TeamStatsMenuItem';

const teamStatsMenu = ({ addStat }) => {
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
        return (
          <TeamStatsMenuItem option={option} clicked={addStat} key={option} />
        );
      })}
    </div>
  );
};

teamStatsMenu.propTypes = {
  addStat: PropTypes.func.isRequired,
};

export default teamStatsMenu;
