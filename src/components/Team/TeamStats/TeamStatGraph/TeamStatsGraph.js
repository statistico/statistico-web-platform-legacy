import React from 'react';
import {
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';

import TeamStatsTooltip from '../TeamStatsTooltip/TeamStatsTooltip';

const teamStatGraph = ({ fullSize, isOpponent, stats }) => {
  const name = isOpponent ? 'Opponent Stat Total' : 'Stat Total';
  const fill = isOpponent ? '#e91e63' : '#22ccde';
  const height = fullSize ? '100%' : '95%';

  return (
    <ResponsiveContainer height={height}>
      <BarChart
        data={stats}
        margin={{ top: 15, right: 50, left: 0, bottom: 15 }}
      >
        <XAxis />
        <YAxis allowDecimals={false} />
        <Tooltip content={<TeamStatsTooltip />} />
        <Legend />
        <Bar name={name} type="natural" dataKey="value" fill={fill} />
      </BarChart>
    </ResponsiveContainer>
  );
};

teamStatGraph.propTypes = {
  fullSize: PropTypes.bool.isRequired,
  isOpponent: PropTypes.bool.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      fixtureId: PropTypes.number.isRequired,
      stat: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]),
    })
  ).isRequired,
};

export default teamStatGraph;
