import React from 'react';

import CompetitionPanel from './CompetitionPanel/CompetitionPanel';
import FilterPanelWrapper from './FilterPanelWrapper';
import ResultPanel from './ResultPanel/ResultPanel';
import StatPanel from './StatPanel/StatPanel';
import TradePanel from './TradePanel/TradePanel';

const FilterPanel = () => {
  return (
    <FilterPanelWrapper>
      <TradePanel />
      <CompetitionPanel />
      <ResultPanel />
      <StatPanel />
    </FilterPanelWrapper>
  );
};

export default FilterPanel;
