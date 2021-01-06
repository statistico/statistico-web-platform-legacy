import React from 'react';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyFilterPanel from './StrategyFilterPanel/StrategyFilterPanel';
import StrategyBuilderStats from './StrategyBuilderStats/StrategyBuilderStats';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import trades from '../../../config/trades';
import { orderByEventDate } from '../../../utility/trade';
import useTogglesActiveState from '../../../hooks/useTogglesActiveState';

const StrategyBuilder = () => {
  const t = orderByEventDate(trades);
  const { selected, selectionToggleHandler } = useTogglesActiveState(true);

  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader
        filterActive={selected}
        toggleFilters={selectionToggleHandler}
      />
      <StrategyFilterPanel active={selected} />
      <StrategyBuilderStats trades={t} />
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
