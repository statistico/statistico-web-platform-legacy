import React from 'react';
import {
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from 'recharts';

import WinLossChartWrapper from './WinLossChartWrapper';

const data = [
  { name: 'Win', value: 69, colour: 'green' },
  { name: 'Loss', value: 31, colour: 'red' },
];

const WinLossChart = () => {
  return (
    <WinLossChartWrapper>
      <ResponsiveContainer height="80%" width="80%">
        <PieChart>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            paddingAngle={3}
          >
            <Label value="59%" position="center" fontSize="50px" fill="#ccc" />
            {data.map((entry, index) => (
              <Cell fill={entry.colour} stroke={entry.colour} />
            ))}
          </Pie>
          <Legend
            align="center"
            verticalAlign="bottom"
            layout="horizontal"
            iconSize={20}
            wrapperStyle={{ bottom: -10 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </WinLossChartWrapper>
  );
};

export default WinLossChart;
