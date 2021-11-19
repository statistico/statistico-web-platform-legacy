import React, { useState } from 'react';

import TeamRatingsBody from './TeamRatingsBody';
import TeamStatsDashboardWrapper from './TeamStatsDashboard.styles';
import TeamStatsHeader from './TeamStatsHeader';
import { Season, Team } from '../../types/entity';

const TeamStatsDashboard = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);

  return (
    <TeamStatsDashboardWrapper>
      <TeamStatsHeader
        onSeasonSelect={setSelectedSeason}
        onTeamSelect={setSelectedTeam}
        selectedTeam={selectedTeam}
      />
      {selectedTeam && selectedSeason ? (
        <TeamRatingsBody season={selectedSeason} team={selectedTeam} />
      ) : null}
    </TeamStatsDashboardWrapper>
  );
};

export default TeamStatsDashboard;
