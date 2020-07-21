import React from 'react';

import Dashboard from '../Dashboard/Dashboard';
import Loader from '../Loader/Loader';
import TeamStatsMatch from './TeamStatsMatch/TeamStatsMatch';
import TeamStatsSideBar from './TeamStatsSideBar/TeamStatsSideBar';
import useFetchesTeam from '../../hooks/useFetchesTeam';
import classes from './TeamStats.module.css';

const TeamStats = () => {
  const teamId = 1;
  const seasonId = 16036;
  const { team, loading } = useFetchesTeam(teamId);

  return (
    <div className={classes.TeamStats}>
      <Loader loading={loading}>
        <TeamStatsSideBar team={team} />
        <Dashboard>
          <TeamStatsMatch seasonId={seasonId} teamId={teamId} />
        </Dashboard>
      </Loader>
    </div>
  );
};

export default TeamStats;
