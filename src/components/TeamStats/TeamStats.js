import React from 'react';

import Dashboard from '../Dashboard/Dashboard';
import Loader from '../Loader/Loader';
import ResultList from '../ResultList/ResultList';
import StatsPanel from '../StatsPanel/StatsPanel';
import TeamStatsSideBar from './TeamStatsSideBar/TeamStatsSideBar';
import useFetchesTeam from '../../hooks/useFetchesTeam';
import classes from './TeamStats.module.css';

const TeamStats = () => {
  const teamId = 13;
  const seasonId = 16036;
  const { team, loading } = useFetchesTeam(teamId);

  return (
    <div className={classes.TeamStats}>
      <Loader loading={loading}>
        <TeamStatsSideBar team={team} />
        <Dashboard>
          <StatsPanel />
          <ResultList teamId={teamId} seasonId={seasonId} />
        </Dashboard>
      </Loader>
    </div>
  );
};

export default TeamStats;
