import React from 'react';

import CompetitionFilter from './CompetitionFilter/CompetitionFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';

const StrategyFilterPanel = () => {
  return (
    <StrategyFilterPanelWrapper>
      <PriceFilter />
      <CompetitionFilter />
      <div>Result Filters here</div>
      <div>Stat Filters here</div>
    </StrategyFilterPanelWrapper>
  );
};

export default StrategyFilterPanel;
