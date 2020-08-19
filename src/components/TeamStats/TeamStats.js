import React from 'react';
import { useParams } from 'react-router';

import Loader from '../Loader/Loader';
import TeamStatsDashBoard from './TeamStatsDashboard/TeamStatsDashboard';
import useFetchesTeam from '../../hooks/useFetchesTeam';
import classes from './TeamStats.module.css';

const TeamStats = () => {
  const { id } = useParams();
  const { team, loading } = useFetchesTeam(id);

  return (
    <div className={classes.TeamStats}>
      <Loader loading={loading}>
        <TeamStatsDashBoard team={team} />
      </Loader>
    </div>
  );
};

export default TeamStats;
