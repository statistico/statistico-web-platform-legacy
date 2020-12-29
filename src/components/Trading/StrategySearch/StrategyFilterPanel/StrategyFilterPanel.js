import React, { useState } from 'react';

import MarketFilters from './MarketFilters/MarketFilters';
import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';
import { markets } from '../../../../config/config';

const StrategyFilterPanel = () => {
  const [market, toggleMarket] = useState(null);

  return (
    <StrategyFilterPanelWrapper>
      <MarketFilters
        market={market}
        toggleMarket={toggleMarket}
        markets={markets}
      />
      <div>Runner Filters here</div>
      <div>League Filters here</div>
      <div>Result Filters here</div>
      <div>Stat Filters here</div>
    </StrategyFilterPanelWrapper>
  );
};

export default StrategyFilterPanel;
