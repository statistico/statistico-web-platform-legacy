import React, { useState } from 'react';

import DashboardHeader from '../../Dashboard/DashboardHeader';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';
import TeamSelect from '../../TeamSelect';
import useFetchesCompetitionTeams from '../../../hooks/useFetchesCompetitionTeams';

const TeamRatingsDashboard = () => {
  const [teamId, setTeamId] = useState<number | null>(null);
  const { teams, loading } = useFetchesCompetitionTeams();

  const onSelect = (id: number | null) => {
    setTeamId(id);
  };

  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader title="Team Ratings">
        <TeamSelect loading={loading} onSelect={onSelect} teams={teams} />
      </DashboardHeader>
      {teamId ? <p>Selected Team Id: {teamId}</p> : null}
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
