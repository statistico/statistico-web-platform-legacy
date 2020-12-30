import React, { useCallback, useState } from 'react';

import MarketFilterWrapper from './MarketFilterWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import markets from '../../../../../config/markets';
import selectStyles from '../../../../../config/form-styles';

const MarketFilter = () => {
  const [market, toggleMarket] = useState(null);
  const [runner, toggleRunner] = useState(null);

  const updateMarket = useCallback((m) => {
    toggleRunner(null);
    toggleMarket(m);
  }, []);

  return (
    <MarketFilterWrapper>
      <SingleFilter
        selection={market}
        selections={markets}
        styles={selectStyles}
        title="Market"
        toggleSelection={updateMarket}
      />
      <SingleFilter
        selection={runner}
        selections={market != null ? market.runners : []}
        styles={selectStyles}
        title="Selection"
        toggleSelection={toggleRunner}
      />
    </MarketFilterWrapper>
  );
};

export default MarketFilter;
