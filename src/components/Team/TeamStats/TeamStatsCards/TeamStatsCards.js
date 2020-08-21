import React from 'react';
import PropTypes from 'prop-types';

import TeamStatsCard from '../TeamStatsCard/TeamStatsCard';
import classes from './TeamStatsCards.module.css';

const teamStatsCards = ({ removeStat, stats }) => {
  if (stats.length === 0) {
    return <div className={classes.Empty}>Please select a stat to begin</div>;
  }

  return (
    <div className={classes.TeamStatsCards}>
      {stats.map((stat) => {
        return (
          <TeamStatsCard
            remove={removeStat}
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
  removeStat: PropTypes.func.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
};

export default teamStatsCards;
