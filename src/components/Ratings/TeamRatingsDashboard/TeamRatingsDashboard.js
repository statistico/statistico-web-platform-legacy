import React, { useState } from 'react';

import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import FilterPanel from './FilterPanel/FilterPanel';
import FilterPanelTab from './FilterPanelTab/FilterPanelTab';
import TeamRatingsDashboardWrapper from './TeamRatingsDashboard.styles';

const TeamRatingsDashboard = () => {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <TeamRatingsDashboardWrapper direction={panelOpen ? 'row' : 'column'}>
      <DashboardHeader
        title="Team Ratings"
        width={panelOpen ? '80%' : '100%'}
      />
      {panelOpen ? (
        <FilterPanel click={() => setPanelOpen(false)} />
      ) : (
        <FilterPanelTab click={() => setPanelOpen(true)} />
      )}
    </TeamRatingsDashboardWrapper>
  );
};

export default TeamRatingsDashboard;
