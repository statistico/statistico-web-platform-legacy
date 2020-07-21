import React from 'react';

import Dashboard from '../Dashboard/Dashboard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Loader from '../Loader/Loader';
import ResultList from '../ResultList/ResultList';
import TeamStatsSideBar from './TeamStatsSideBar/TeamStatsSideBar';
import Wrapper from '../Wrapper/Wrapper';
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
          <Wrapper styles={classes.ResultList}>
            <ErrorBoundary>
              <ResultList teamId={teamId} seasonId={seasonId} />
            </ErrorBoundary>
          </Wrapper>
        </Dashboard>
      </Loader>
    </div>
  );
};

export default TeamStats;
