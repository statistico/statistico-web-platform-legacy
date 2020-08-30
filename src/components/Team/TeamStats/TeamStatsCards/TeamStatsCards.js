import React from 'react';
import PropTypes from 'prop-types';

import TeamStatsCard from '../TeamStatsCard/TeamStatsCard';
import classes from './TeamStatsCards.module.css';

const teamStatsCards = (props) => {
  const {
    displayCounts,
    displayGraph,
    removeStat,
    seasonIds,
    stats,
    teamId,
  } = props;

  if (stats.length === 0) {
    return <div className={classes.Empty}>Please select a stat to begin</div>;
  }

  return (
    <div className={classes.TeamStatsCards}>
      {stats.map((stat) => {
        return (
          <TeamStatsCard
            displayCounts={displayCounts}
            displayGraph={displayGraph}
            remove={removeStat}
            seasonIds={seasonIds}
            stat={stat}
            teamId={teamId}
            styles={classes.TeamStatsCard}
            key={stat.id}
          />
        );
      })}
    </div>
  );
};

teamStatsCards.propTypes = {
  displayCounts: PropTypes.bool.isRequired,
  displayGraph: PropTypes.bool.isRequired,
  removeStat: PropTypes.func.isRequired,
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default teamStatsCards;
