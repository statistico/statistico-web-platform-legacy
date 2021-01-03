import React from 'react';

import StrategyBuilderHeader from './StrategyBuilderHeader/StrategyBuilderHeader';
import StrategyBuilderRow from './StrategyBuilderRow';
import StrategyBuilderWrapper from './StrategyBuilderWrapper';
import TradeGraph from './TradeGraph/TradeGraph';
import TradeStatPanel from './TradeStatPanel/TradeStatPanel';
import WinLossChart from './WinLossChart/WinLossChart';
import trades from '../../../config/trades';

const StrategyBuilder = () => {
  return (
    <StrategyBuilderWrapper>
      <StrategyBuilderHeader />
      <StrategyBuilderRow>
        <WinLossChart trades={trades} />
        <TradeGraph />
      </StrategyBuilderRow>
      <TradeStatPanel trades={trades} />
    </StrategyBuilderWrapper>
  );
};

export default StrategyBuilder;
