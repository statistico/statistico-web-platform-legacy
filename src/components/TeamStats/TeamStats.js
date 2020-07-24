import React from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Dashboard from '../Dashboard/Dashboard';
import Loader from '../Loader/Loader';
import TeamStatsMatch from './TeamStatsMatch/TeamStatsMatch';
import TeamStatsSideBar from './TeamStatsSideBar/TeamStatsSideBar';
import useFetchesTeam from '../../hooks/useFetchesTeam';
import useTogglesActiveState from '../../hooks/useTogglesActiveState';
import classes from './TeamStats.module.css';

const TeamStats = () => {
  const teamId = 1;
  const seasonId = 16036;
  const { team, loading } = useFetchesTeam(teamId);
  const { selected, selectionToggleHandler } = useTogglesActiveState(0);

  return (
    <div className={classes.TeamStats}>
      <Loader loading={loading}>
        <TeamStatsSideBar
          team={team}
          selected={selected}
          toggleDisplay={selectionToggleHandler}
        />
        <Dashboard>
          <ContentWrapper active={selected === 0}>
            <TeamStatsMatch seasonId={seasonId} teamId={teamId} />
          </ContentWrapper>
          <ContentWrapper active={selected === 1}>
            Players - To be implemented
          </ContentWrapper>
          <ContentWrapper active={selected === 2}>
            Stats - To be implemented
          </ContentWrapper>
          <ContentWrapper active={selected === 3}>
            Timelines - To be implemented
          </ContentWrapper>
        </Dashboard>
      </Loader>
    </div>
  );
};

export default TeamStats;
