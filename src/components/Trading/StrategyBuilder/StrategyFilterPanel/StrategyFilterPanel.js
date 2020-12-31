import React from 'react';

import CompetitionFilter from './CompetitionFilter/CompetitionFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import ResultFilterPanel from './ResultFilterPanel/ResultFilterPanel';
import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';

const StrategyFilterPanel = () => {
  return (
    <StrategyFilterPanelWrapper>
      <ResultFilterPanel />
      <div>Stat Filters here</div>
      <PriceFilter />
      <CompetitionFilter />
    </StrategyFilterPanelWrapper>
  );
};

export default StrategyFilterPanel;
