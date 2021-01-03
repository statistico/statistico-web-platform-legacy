import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import StrategyBuilderRow from '../StrategyBuilderRow';
import TradeStat from './TradeStat/TradeStat';
import {
  averageRunnerPrice,
  maxDrawdown,
  profit,
  tradeYield,
} from '../../../../utility/trade';

const TradeStatPanel = (props) => {
  const { trades } = props;

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
        colour="green"
        count={profit(trades, 1)}
        decimals={2}
        metric="u"
        title="Profit / Loss"
      />
    </StrategyBuilderRow>
  );
};

TradeStatPanel.propTypes = {
  trades: arrayOf(
    shape({
      Result: string.isRequired,
      RunnerPrice: number.isRequired,
    })
  ).isRequired,
};

export default TradeStatPanel;
