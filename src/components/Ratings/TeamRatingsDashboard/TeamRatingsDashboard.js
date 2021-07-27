import React from 'react';

import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import FilterPanel from './FilterPanel/FilterPanel';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';

const TeamRatingsDashboard = () => {
  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader title="Team Ratings" width="80%" />
      <FilterPanel />
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
