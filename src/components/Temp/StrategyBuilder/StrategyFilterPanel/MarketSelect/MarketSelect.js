import React, { useContext } from 'react';

import MarketSelectWrapper from './MarketSelectWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import markets from '../../../../../config/markets';
import selectStyles from '../../../../../config/form-styles';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../context/StrategyBuilderContext';

const MarketSelect = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const updateMarket = (m) => {
    setFilters({
      ...filters,
      market: m,
      runner: null,
    });
  };

  const updateRunner = (r) => {
    setFilters({ ...filters, runner: r });
  };

  return (
    <MarketSelectWrapper>
      <SingleFilter
        selection={filters.market}
        selections={markets}
        styles={selectStyles}
        title="Market"
        toggleSelection={updateMarket}
      />
      <SingleFilter
        selection={filters.runner}
        selections={filters.market != null ? filters.market.runners : []}
        styles={selectStyles}
        title="Selection"
        toggleSelection={updateRunner}
      />
    </MarketSelectWrapper>
  );
};

export default MarketSelect;
