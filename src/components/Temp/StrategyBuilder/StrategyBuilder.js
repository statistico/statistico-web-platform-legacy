import React from 'react';

import StrategyBuilderContextProvider from '../../../context/StrategyBuilderContext';
import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyFilterPanel from './StrategyFilterPanel/StrategyFilterPanel';
import StrategyBuilderStats from './StrategyBuilderStats/StrategyBuilderStats';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import useTogglesActiveState from '../../../hooks/useTogglesActiveState';

const StrategyBuilder = () => {
  const [filtersActive, setFiltersActive] = useTogglesActiveState(true);
  const [isBuilding, setIsBuilding] = useTogglesActiveState(false);

  return (
    <StrategyBuilderContextProvider>
      <StrategyBuilderWrapper>
        <StrategyBuilderHeader
          filtersActive={filtersActive}
          toggleFilters={setFiltersActive}
          setBuilding={setIsBuilding}
        />
        <StrategyFilterPanel active={filtersActive} />
        {isBuilding ? <StrategyBuilderStats /> : null}
      </StrategyBuilderWrapper>
    </StrategyBuilderContextProvider>
  );
};

export default StrategyBuilder;
