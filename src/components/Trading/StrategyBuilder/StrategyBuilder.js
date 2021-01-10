import React from 'react';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyFilterPanel from './StrategyFilterPanel/StrategyFilterPanel';
import StrategyBuilderStats from './StrategyBuilderStats/StrategyBuilderStats';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import useTogglesActiveState from '../../../hooks/useTogglesActiveState';
import StrategyBuilderFilterContextProvider from '../../../context/StrategyBuilderContext';

const StrategyBuilder = () => {
  const [filtersActive, setFiltersActive] = useTogglesActiveState(true);
  const [isBuilding, setIsBuilding] = useTogglesActiveState(false);

  return (
    <StrategyBuilderFilterContextProvider>
      <StrategyBuilderWrapper>
        <StrategyBuilderHeader
          filtersActive={filtersActive}
          toggleFilters={setFiltersActive}
          setBuilding={setIsBuilding}
        />
        <StrategyFilterPanel active={filtersActive} />
        {isBuilding ? <StrategyBuilderStats /> : null}
      </StrategyBuilderWrapper>
    </StrategyBuilderFilterContextProvider>
  );
};

export default StrategyBuilder;
