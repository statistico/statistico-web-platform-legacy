import React from 'react';

import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import FilterPanel from './FilterPanel/FilterPanel';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';

const TeamRatingsDashboard = () => {
  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader title="Team Ratings" />
      <FilterPanel />
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
