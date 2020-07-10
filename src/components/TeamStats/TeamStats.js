import React from 'react';

import Dashboard from '../Dashboard/Dashboard';
import Loader from '../Loader/Loader';
import TeamStatsSideBar from './TeamStatsSideBar/TeamStatsSideBar';
import useFetchesTeam from '../../hooks/useFetchesTeam';
import classes from './TeamStats.module.css';

const TeamStats = () => {
  const { team, loading } = useFetchesTeam(1);

  return (
    <div className={classes.TeamStats}>
      <Loader loading={loading}>
        <TeamStatsSideBar team={team} />
        <Dashboard />
      </Loader>
    </div>
  );
};

export default TeamStats;
