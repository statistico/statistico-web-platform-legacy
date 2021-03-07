import React, { useState } from 'react';

import FilterPanel from './FilterPanel/FilterPanel';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyBuilderContextProvider from '../../../context/StrategyBuilderContext';
import TradePanel from './TradePanel/TradePanel';

const StrategyBuilder = () => {
  const [filtersActive, setFiltersActive] = useState(true);
  const [tradesActive, setTradesActive] = useState(false);

  return (
    <StrategyBuilderContextProvider>
      <StrategyBuilderWrapper>
        <StrategyBuilderHeader
          filtersActive={filtersActive}
          selectFilters={setFiltersActive}
          selectTrades={setTradesActive}
          tradesActive={tradesActive}
        />
        {filtersActive ? <FilterPanel /> : null}
        {tradesActive ? <TradePanel /> : null}
      </StrategyBuilderWrapper>
    </StrategyBuilderContextProvider>
  );
};

export default StrategyBuilder;
