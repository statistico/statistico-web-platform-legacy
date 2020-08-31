import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';

import TeamStatsCards from './TeamStatsCards/TeamStatsCards';
import TeamStatsMenu from './TeamStatsMenu/TeamStatsMenu';
import classes from './TeamStats.module.css';

const TeamStats = (props) => {
  const { seasonIds, teamId } = props;
  const [stats, setStats] = useState([]);
  const [showGraph, setShowGraphs] = useState(true);
  const [showCounts, setShowCounts] = useState(false);

  const addStatHandler = (stat) => {
    const s = {
      id: uuidV4(),
      label: stat,
    };

    const updatedStats = [...stats, s];

    setStats(updatedStats.reverse());
  };

  const removeStatHandler = (id) => {
    const filtered = stats.filter((stat) => stat.id !== id);
    setStats(filtered);
  };

  const toggleDisplay = () => {
    setShowGraphs(!showGraph);
    setShowCounts(!showCounts);
  };

  return (
    <div className={classes.TeamStatsCardsContainer}>
      <TeamStatsMenu addStat={addStatHandler} statDisplay={toggleDisplay} />
      <TeamStatsCards
        displayCounts={showCounts}
        displayGraph={showGraph}
        seasonIds={seasonIds}
        stats={stats}
        removeStat={removeStatHandler}
        teamId={teamId}
      />
    </div>
  );
};

TeamStats.propTypes = {
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default TeamStats;
