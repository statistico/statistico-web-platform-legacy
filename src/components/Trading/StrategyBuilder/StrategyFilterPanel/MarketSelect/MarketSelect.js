import React, { useCallback, useState } from 'react';

import MarketSelectWrapper from './MarketSelectWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import markets from '../../../../../config/markets';
import selectStyles from '../../../../../config/form-styles';

const MarketSelect = () => {
  const [market, toggleMarket] = useState(null);
  const [runner, toggleRunner] = useState(null);

  const updateMarket = useCallback((m) => {
    toggleRunner(null);
    toggleMarket(m);
  }, []);

  return (
    <MarketSelectWrapper>
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
    </MarketSelectWrapper>
  );
};

export default MarketSelect;
