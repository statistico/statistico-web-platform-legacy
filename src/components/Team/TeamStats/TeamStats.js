import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';

import TeamStatsCards from './TeamStatsCards/TeamStatsCards';
import TeamStatsMenu from './TeamStatsMenu/TeamStatsMenu';
import classes from './TeamStats.module.css';

const TeamStats = (props) => {
  const { seasonIds, teamId } = props;
  const [stats, setStats] = useState([]);

  const addStatHandler = (stat) => {
    const s = {
      id: uuidV4(),
      label: stat,
      value: 2.75,
    };

    const updatedStats = [...stats, s];

    setStats(updatedStats.reverse());
  };

  const removeStatHandler = (id) => {
    const filtered = stats.filter((stat) => stat.id !== id);
    setStats(filtered);
  };

  return (
    <div className={classes.TeamStatsCardsContainer}>
      <TeamStatsMenu addStat={addStatHandler} />
      <TeamStatsCards stats={stats} removeStat={removeStatHandler} />
    </div>
  );
};

TeamStats.propTypes = {
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default TeamStats;
