import React, { useState } from 'react';

import CompetitionSelect from '../../CompetitionSelect';
import DashboardHeader from '../../Dashboard/DashboardHeader';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';

const TeamRatingsDashboard = () => {
  const [competitionId, setCompetitionId] = useState<string | null>(null);

  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader title="Team Ratings" />
      {!competitionId && (
        <CompetitionSelect
          toggle={setCompetitionId}
          selectedId={competitionId}
        />
      )}
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
