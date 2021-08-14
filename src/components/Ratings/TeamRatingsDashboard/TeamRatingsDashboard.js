import React from 'react';

import DashboardHeader from '../../Dashboard/DashboardHeader';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';

const TeamRatingsDashboard = () => {
  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader title="Team Ratings" />
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
