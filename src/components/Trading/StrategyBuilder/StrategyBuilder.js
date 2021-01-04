import React from 'react';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyBuilderRow from './StrategyBuilderRow';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import TradeGraph from './TradeGraph/TradeGraph';
import TradeStatPanel from './TradeStatPanel/TradeStatPanel';
import WinLossChart from './WinLossChart/WinLossChart';
import trades from '../../../config/trades';
import { orderByEventDate } from '../../../utility/trade';

const StrategyBuilder = () => {
  const t = orderByEventDate(trades);

  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader />
      <StrategyBuilderRow>
        <WinLossChart trades={t} />
        <TradeGraph />
      </StrategyBuilderRow>
      <TradeStatPanel trades={t} />
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
