import React, { useState } from 'react';

import DashboardHeader from '../../Dashboard/DashboardHeader';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';
import TeamSelect from '../../TeamSelect';

const TeamRatingsDashboard = () => {
  const [_, setTeamId] = useState<number | null>(null);
  const teams = [
    {
      id: 1,
      name: 'West Ham United',
    },
    {
      id: 8,
      name: 'Liverpool',
    },
  ];

  const onSelect = (id: number | null) => {
    setTeamId(id);
  };

  return (
    <TeamRatingsDashboardWrapper>
      <DashboardHeader title="Team Ratings">
        <TeamSelect onSelect={onSelect} teams={teams} />
      </DashboardHeader>
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
