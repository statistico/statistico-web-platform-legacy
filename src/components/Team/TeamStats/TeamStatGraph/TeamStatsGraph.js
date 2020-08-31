import React from 'react';
import {
  LineChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';

const teamStatGraph = ({ stats }) => {
  return (
    <ResponsiveContainer width={750} height={400}>
      <LineChart
        data={stats}
        margin={{ top: 20, right: 50, left: 0, bottom: 20 }}
      >
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          name="Match Total"
          type="natural"
          dataKey="value"
          stroke="#22ccde"
          strokeWidth={2}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

teamStatGraph.propTypes = {
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
