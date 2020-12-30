import React, { useCallback, useState } from 'react';

import SingleFilter from '../../../SingleFilter/SingleFilter';
import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';
import { markets } from '../../../../config/config';

const StrategyFilterPanel = () => {
  const [market, toggleMarket] = useState(null);
  const [runner, toggleRunner] = useState(null);

  const updateMarket = useCallback((m) => {
    toggleRunner(null);
    toggleMarket(m);
  }, []);

  return (
    <StrategyFilterPanelWrapper>
      <SingleFilter
        selection={market}
        selections={markets}
        title="Market"
        toggleSelection={updateMarket}
      />
      <SingleFilter
        selection={runner}
        selections={market != null ? market.runners : []}
        title="Selection"
        toggleSelection={toggleRunner}
      />
      <div>Min and Max Price Filters here</div>
      <div>League Filters here</div>
      <div>Result Filters here</div>
      <div>Stat Filters here</div>
    </StrategyFilterPanelWrapper>
  );
};

export default StrategyFilterPanel;
