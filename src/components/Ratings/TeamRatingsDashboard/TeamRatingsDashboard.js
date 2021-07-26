import React, { useState } from 'react';

import CompetitionList from './CompetitionList/CompetitionList';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';
import CompetitionSeasonList from './CompetitionList/CompetitionSeasonList/CompetitionSeasonList';

const TeamRatingsDashboard = () => {
  const [competitionId, setCompetitionId] = useState(null);

  return (
    <TeamRatingsDashboardWrapper selected={competitionId}>
      <DashboardHeader>Team Ratings</DashboardHeader>
      <CompetitionSeasonList id={competitionId} />
      <CompetitionList selectedId={competitionId} toggle={setCompetitionId} />
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
