import React from 'react';

import StrategyBuilderRow from '../StrategyBuilderRow';
import TradeStat from './TradeStat/TradeStat';

const TradeStatPanel = () => {
  return (
    <StrategyBuilderRow>
      <TradeStat
        colour="#22ccde"
        count={1528}
        metric={null}
        title="Total Trades"
      />
      <TradeStat
        colour="#22ccde"
        count={2.08}
        metric={null}
        title="Average Odds"
      />
      <TradeStat
        colour="#ff0000"
        count={-25}
        metric="u"
        title="Maximum Drawdown"
      />
      <TradeStat colour="green" count={15.25} metric="%" title="Yield" />
      <TradeStat colour="green" count={256} metric="u" title="Profit / Loss" />
      <TradeStat colour="green" count={22} metric="%" title="ROI" />
    </StrategyBuilderRow>
  );
};

export default TradeStatPanel;
