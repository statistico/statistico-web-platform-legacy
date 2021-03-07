import React from 'react';

import FilterPanel from './FilterPanel/FilterPanel';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyBuilderContextProvider from '../../../context/StrategyBuilderContext';

const StrategyBuilder = () => {
  return (
    <StrategyBuilderContextProvider>
      <StrategyBuilderWrapper>
        <StrategyBuilderHeader />
        <FilterPanel />
      </StrategyBuilderWrapper>
    </StrategyBuilderContextProvider>
  );
};

export default StrategyBuilder;
