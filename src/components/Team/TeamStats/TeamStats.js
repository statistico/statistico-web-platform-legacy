import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import TeamStatMenu from './TeamStatsMenu/TeamStatsMenu';
import TeamStatsCards from './TeamStatsCards/TeamStatsCards';
import classes from './TeamStats.module.css';

const TeamStats = (props) => {
  const { seasonIds, teamId } = props;
  const [stats, setStats] = useState([]);

  return (
    <Aux>
      <div className={classes.TeamStatsCards}>
        <TeamStatsCards stats={stats} />
      </div>
      <div className={classes.TeamStatsMenu}>
        <TeamStatMenu />
      </div>
    </Aux>
  );
};

TeamStats.propTypes = {
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default TeamStats;
