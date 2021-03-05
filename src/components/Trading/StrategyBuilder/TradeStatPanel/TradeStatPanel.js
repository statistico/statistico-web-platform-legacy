import React, { useContext } from 'react';

import StrategyBuilderRow from '../StrategyBuilderRow';
import TradeStat from './TradeStat/TradeStat';
import {
  averageRunnerPrice,
  maxDrawdown,
  orderByEventDate,
  profit,
  tradeYield,
} from '../../../../utility/trade';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const TradeStatPanel = () => {
  const { tr } = useContext(StrategyBuilderContext);
  const trades = orderByEventDate(tr);

  console.log(trades);

  return (
    <StrategyBuilderRow>
      <TradeStat
        colour="#22ccde"
        count={trades.length}
        decimals={0}
        metric={null}
        title="Total Trades"
      />
      <TradeStat
        colour="#22ccde"
        count={averageRunnerPrice(trades)}
        decimals={2}
        metric={null}
        title="Average Odds"
      />
      <TradeStat
        colour="#ff0000"
        count={maxDrawdown(trades)}
        decimals={0}
        metric="u"
        title="Maximum Drawdown"
      />
      <TradeStat
        colour={tradeYield(trades, 1) > 0 ? 'green' : 'red'}
        count={tradeYield(trades, 1)}
        decimals={2}
        metric="%"
        title="Yield"
      />
      <TradeStat
        colour={profit(trades, 1) > 0 ? 'green' : 'red'}
        count={profit(trades, 1)}
        decimals={2}
        metric="u"
        title="Profit / Loss"
      />
    </StrategyBuilderRow>
  );
};

export default TradeStatPanel;
