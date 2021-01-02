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
  { name: 'Win', value: 69 },
  { name: 'Loss', value: 31 },
];

const COLORS = ['green', 'red'];

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
            {/* eslint-disable-next-line react/jsx-no-undef,react/no-array-index-key */}
            {data.map((entry, index) => (
              // eslint-disable-next-line react/jsx-no-undef
              <Cell
                fill={COLORS[index % COLORS.length]}
                stroke={COLORS[index % COLORS.length]}
              />
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
