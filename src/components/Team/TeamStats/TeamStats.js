import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
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

  return (
    <Aux>
      <div className={classes.TeamStatsCardsContainer}>
        <TeamStatsCards stats={stats} />
      </div>
      <div className={classes.TeamStatsMenu}>
        <TeamStatsMenu addStat={addStatHandler} />
      </div>
    </Aux>
  );
};

TeamStats.propTypes = {
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default TeamStats;
