import React from 'react';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyBuilderRow from './StrategyBuilderRow';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import TradeGraph from './TradeGraph/TradeGraph';
import TradeStatPanel from './TradeStatPanel/TradeStatPanel';
import WinLossChart from './WinLossChart/WinLossChart';

const StrategyBuilder = () => {
  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader />
      <StrategyBuilderRow>
        <WinLossChart />
        <TradeGraph />
      </StrategyBuilderRow>
      <TradeStatPanel />
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
