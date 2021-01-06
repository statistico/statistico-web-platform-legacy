import React from 'react';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import trades from '../../../config/trades';
import { orderByEventDate } from '../../../utility/trade';
import useTogglesActiveState from '../../../hooks/useTogglesActiveState';
import StrategyBuilderStats from './StrategyBuilderStats/StrategyBuilderStats';
import StrategyFilterPanel from './StrategyFilterPanel/StrategyFilterPanel';

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
