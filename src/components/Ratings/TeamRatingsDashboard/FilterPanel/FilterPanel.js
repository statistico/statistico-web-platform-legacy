import React from 'react';

import CompetitionList from './CompetitionList/CompetitionList';
import FilterPanelWrapper from './FilterPanel.styles';

const FilterPanel = () => {
  return (
    <FilterPanelWrapper>
      <div>Select a competition</div>
      <CompetitionList toggle={() => {}} />
    </FilterPanelWrapper>
  );
};

export default FilterPanel;
