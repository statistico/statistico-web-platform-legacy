import React, { useContext } from 'react';

import MarketRunnerSelectWrapper from './MarketRunnerSelectWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';

import markets from '../../../../../../config/markets';
import selectStyles from '../../../../../../config/form-styles';

const MarketRunnerSelect = () => {
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
    <MarketRunnerSelectWrapper>
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
    </MarketRunnerSelectWrapper>
  );
};

export default MarketRunnerSelect;
