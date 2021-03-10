import React from 'react';
import { bool } from 'prop-types';

import CompetitionPanel from './CompetitionPanel/CompetitionPanel';
import FilterPanelWrapper from './FilterPanelWrapper';
import ResultPanel from './ResultPanel/ResultPanel';
import StatPanel from './StatPanel/StatPanel';
import TradePanel from './TradePanel/TradePanel';

const FilterPanel = (props) => {
  const { isActive } = props;

  return (
    <FilterPanelWrapper isActive={isActive}>
      <TradePanel />
      <CompetitionPanel />
      <StatPanel />
      <ResultPanel />
    </FilterPanelWrapper>
  );
};

FilterPanel.propTypes = {
  isActive: bool.isRequired,
};

export default FilterPanel;
