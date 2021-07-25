import React from 'react';

import CompetitionList from '../../CompetitionList/CompetitionList';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';

const TeamRatingsDashboard = () => {
  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader>Team Ratings</DashboardHeader>
      <CompetitionList />
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
