import React, { useState } from 'react';

import TeamRatingsBody from './TeamRatingsBody';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';
import TeamStatsHeader from './TeamStatsHeader';
import { Season, Team } from '../../types/entity';

const TeamRatingsDashboard = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);

  return (
    <TeamRatingsDashboardWrapper>
      <TeamStatsHeader
        onSeasonSelect={setSelectedSeason}
        onTeamSelect={setSelectedTeam}
        selectedTeam={selectedTeam}
      />
      {selectedTeam && selectedSeason ? (
        <TeamRatingsBody season={selectedSeason} team={selectedTeam} />
      ) : null}
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
