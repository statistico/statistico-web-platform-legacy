import React from 'react';

import FilterPanel from './FilterPanel/FilterPanel';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';

const StrategyBuilder = () => {
  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader />
      <FilterPanel />
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
