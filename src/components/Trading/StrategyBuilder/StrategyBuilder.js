import React from 'react';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import trades from '../../../config/trades';
import { orderByEventDate } from '../../../utility/trade';
import useTogglesActiveState from '../../../hooks/useTogglesActiveState';
import StrategyBuilderStats from './StrategyBuilderStats/StrategyBuilderStats';

const StrategyBuilder = () => {
  const t = orderByEventDate(trades);
  const { selected, selectionToggleHandler } = useTogglesActiveState(true);

  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader />
      <StrategyBuilderStats active={selected} trades={t} />
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
