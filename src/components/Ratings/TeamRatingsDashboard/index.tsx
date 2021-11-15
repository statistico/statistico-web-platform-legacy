import React, { useState } from 'react';

import DashboardHeader from '../../Dashboard/DashboardHeader';
import TeamRatingsBody from './TeamRatingsBody';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';
import TeamSelect from '../../TeamSelect';
import useFetchesCompetitionTeams from '../../../hooks/useFetchesCompetitionTeams';
import { Team } from '../../../types/entity';

const TeamRatingsDashboard = () => {
  const [team, setTeam] = useState<Team | null>(null);
  const { teams, loading } = useFetchesCompetitionTeams();

  const onSelect = (value: Team | null) => {
    setTeam(value);
  };

  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader title="Team Ratings">
        <TeamSelect loading={loading} onSelect={onSelect} teams={teams} />
      </DashboardHeader>
      {team ? <TeamRatingsBody team={team} /> : null}
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
