import React, { useContext } from 'react';

import TradeStatPanelWrapper from './TradeStatPanelWrapper';
import TradeStat from './TradeStat/TradeStat';
import { StrategyBuilderContext } from '../../../../../context/StrategyBuilderContext';
import {
  averageRunnerPrice,
  maxDrawdown,
  orderByEventDate,
  profit,
  tradeYield,
} from '../../../../../utility/trade';

const TradeStatPanel = () => {
  const { tr } = useContext(StrategyBuilderContext);
  const trades = orderByEventDate(tr);
  const avgPrice = averageRunnerPrice(trades);
  const dd = maxDrawdown(trades);
  const yieldPercentage = tradeYield(trades, 1);
  const prof = profit(trades, 1);

  return (
    <TradeStatPanelWrapper>
      <TradeStat
        colour="#22ccde"
        count={trades.length}
        decimals={0}
        metric={null}
        title="Total Trades"
      />
      <TradeStat
        colour="#22ccde"
        count={avgPrice}
        decimals={2}
        metric={null}
        title="Average Odds"
      />
      <TradeStat
        colour="#ff0000"
        count={dd}
        decimals={0}
        metric="u"
        title="Maximum Drawdown"
      />
      <TradeStat
        colour={yieldPercentage > 0 ? 'green' : 'red'}
        count={yieldPercentage}
        decimals={2}
        metric="%"
        title="Yield"
      />
      <TradeStat
        colour={prof > 0 ? 'green' : 'red'}
        count={prof}
        decimals={2}
        metric="u"
        title="Profit / Loss"
      />
    </TradeStatPanelWrapper>
  );
};

export default TradeStatPanel;
