import React from 'react';

import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';

const TeamRatingsDashboard = () => {
  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader title="Team Ratings" width="100%" />
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
