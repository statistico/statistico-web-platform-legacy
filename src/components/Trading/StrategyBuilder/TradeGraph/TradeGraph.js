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
import { cumulativeProfit } from '../../../../utility/trade';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const TradeGraph = () => {
  const { tr } = useContext(StrategyBuilderContext);
  const profit = cumulativeProfit(tr, 1);

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
            strokeWidth={2}
            activeDot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </TradeGraphWrapper>
  );
};

export default TradeGraph;
