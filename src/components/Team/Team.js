import React from 'react';
import { useParams } from 'react-router';

import Loader from '../Loader/Loader';
import TeamStatsDashBoard from './TeamDashboard/TeamDashboard';
import useFetchesTeam from '../../hooks/useFetchesTeam';
import classes from './Team.module.css';

const Team = () => {
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

export default Team;
