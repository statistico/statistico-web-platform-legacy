import React from 'react';
import PropTypes from 'prop-types';

import TeamStatsCard from '../TeamStatsCard/TeamStatsCard';
import classes from './TeamStatsCards.module.css';

const teamStatsCards = ({ stats }) => {
  if (stats.length === 0) {
    return <div className={classes.Empty}>Please select a stat to begin</div>;
  }

  return (
    <div className={classes.TeamStatsCards}>
      {stats.map((stat) => {
        return (
          <TeamStatsCard
            stat={stat}
            styles={classes.TeamStatsCard}
            key={stat.id}
          />
        );
      })}
    </div>
  );
};

teamStatsCards.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
};

export default teamStatsCards;
