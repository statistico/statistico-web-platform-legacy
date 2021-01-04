import React from 'react';
import { arrayOf, number, shape } from 'prop-types';
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

const TradeGraph = (props) => {
  const { trades } = props;
  const profit = cumulativeProfit(trades, 1);

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

TradeGraph.propTypes = {
  trades: arrayOf(
    shape({
      profit: number.isRequired,
    })
  ).isRequired,
};

export default TradeGraph;
