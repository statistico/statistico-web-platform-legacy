import React, { useContext } from 'react';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import TradeGraphWrapper from './TradeGraphWrapper';
import { StrategyBuilderContext } from '../../../../../context/StrategyBuilderContext';
import {
  cumulativeProfit,
  orderByEventDate,
} from '../../../../../utility/trade';

const TradeGraph = () => {
  const { tr, filters } = useContext(StrategyBuilderContext);
  const side = filters.side ? filters.side.name: '';
  const trades = orderByEventDate(tr);
  const profit = cumulativeProfit(trades, 1, side);

  return (
    <TradeGraphWrapper>
      <ResponsiveContainer>
        <LineChart
          data={profit}
          margin={{ top: 15, right: 50, left: 0, bottom: 15 }}
        >
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            name="Cumulative P&L"
            type="natural"
            dataKey="profit"
            stroke="#22ccde"
            strokeWidth={1}
            activeDot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </TradeGraphWrapper>
  );
};

export default TradeGraph;
