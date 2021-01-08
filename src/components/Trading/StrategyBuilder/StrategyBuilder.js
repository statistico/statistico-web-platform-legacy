import React, { useState } from 'react';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyFilterPanel from './StrategyFilterPanel/StrategyFilterPanel';
import StrategyBuilderStats from './StrategyBuilderStats/StrategyBuilderStats';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import { orderByEventDate } from '../../../utility/trade';
import useTogglesActiveState from '../../../hooks/useTogglesActiveState';
import useBuildsTradeStrategy from '../../../hooks/useBuildsTradeStrategy';

const StrategyBuilder = () => {
  const [filtersActive, setFiltersActive] = useTogglesActiveState(true);
  const [built, setBuilt] = useState(false);
  const { tr, loading, reload } = useBuildsTradeStrategy();
  const t = orderByEventDate(tr);

  const buildStrategy = () => {
    setFiltersActive(false);
    setBuilt(true);
    reload();
  };

  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader
        buildStrategy={buildStrategy}
        filterActive={filtersActive}
        toggleFilters={setFiltersActive}
      />
      <StrategyFilterPanel active={filtersActive} />
      {built ? <StrategyBuilderStats loading={loading} trades={t} /> : null}
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
