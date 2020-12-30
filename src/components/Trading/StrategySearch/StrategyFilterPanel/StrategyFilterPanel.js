import React from 'react';

import CompetitionFilter from './CompetitionFilter/CompetitionFilter';
import MarketFilter from './MarketFilter/MarketFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';

const StrategyFilterPanel = () => {
  return (
    <StrategyFilterPanelWrapper>
      <MarketFilter />
      <PriceFilter />
      <CompetitionFilter />
      <div>Result Filters here</div>
      <div>Stat Filters here</div>
    </StrategyFilterPanelWrapper>
  );
};

export default StrategyFilterPanel;
