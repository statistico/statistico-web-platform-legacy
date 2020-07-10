import React from 'react';

import classes from './Dashboard.module.css';
import useFetchesTeamResult from '../../hooks/useFetchesTeamResults';

const Dashboard = () => {
  const payload = {
    team: {
      id: 1,
      venue: 'home',
    },
    limit: 1,
  };

  const { results, loading } = useFetchesTeamResult(payload);

  const res = results.map((result) => <p>{result.homeTeam.name}</p>);
  return <div className={classes.Dashboard}>{res}</div>;
};

export default Dashboard;
