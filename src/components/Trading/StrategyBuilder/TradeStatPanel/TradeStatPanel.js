import React, { useContext } from 'react';

import StrategyBuilderRow from '../StrategyBuilderRow';
import TradeStat from './TradeStat/TradeStat';
import {
  averageRunnerPrice,
  maxDrawdown,
  profit,
  tradeYield,
} from '../../../../utility/trade';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const TradeStatPanel = () => {
  const { tr } = useContext(StrategyBuilderContext);

  return (
    <StrategyBuilderRow>
      <TradeStat
        colour="#22ccde"
        count={tr.length}
        decimals={0}
        metric={null}
        title="Total Trades"
      />
      <TradeStat
        colour="#22ccde"
        count={averageRunnerPrice(tr)}
        decimals={2}
        metric={null}
        title="Average Odds"
      />
      <TradeStat
        colour="#ff0000"
        count={maxDrawdown(tr)}
        decimals={0}
        metric="u"
        title="Maximum Drawdown"
      />
      <TradeStat
        colour={tradeYield(tr, 1) > 0 ? 'green' : 'red'}
        count={tradeYield(tr, 1)}
        decimals={2}
        metric="%"
        title="Yield"
      />
      <TradeStat
        colour={profit(tr, 1) > 0 ? 'green' : 'red'}
        count={profit(tr, 1)}
        decimals={2}
        metric="u"
        title="Profit / Loss"
      />
    </StrategyBuilderRow>
  );
};

export default TradeStatPanel;
