import React, { useContext } from 'react';
import {
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from 'recharts';

import WinLossChartWrapper from './WinLossChartWrapper';
import { winPercentage } from '../../../../utility/trade';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const WinLossChart = () => {
  const { tr } = useContext(StrategyBuilderContext);

  const win = winPercentage(tr);

  const data = [
    { name: 'Win', value: win, colour: 'green' },
    { name: 'Loss', value: 100 - win, colour: 'red' },
  ];

  return (
    <WinLossChartWrapper>
      <ResponsiveContainer height="80%" width="80%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            paddingAngle={3}
            dataKey="value"
          >
            <Label
              value={`${win.toString()}%`}
              position="center"
              fontSize="50px"
              fill="#ccc"
            />
            {data.map((entry, index) => (
              <Cell
                fill={entry.colour}
                stroke={entry.colour}
                key={entry.name}
              />
            ))}
          </Pie>
          <Legend
            align="center"
            verticalAlign="bottom"
            layout="horizontal"
            iconSize={30}
            wrapperStyle={{ bottom: -10, left: 10 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </WinLossChartWrapper>
  );
};

export default WinLossChart;
