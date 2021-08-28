import React from 'react';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import TeamRatingGraphWrapper from './TeamRatingGraph.styles';
import { TeamRating } from '../../../../../types/entity';

type TeamRatingGraphProps = {
  dataKey: string;
  ratings: TeamRating[];
  title: string;
};

const TeamRatingGraph = (props: TeamRatingGraphProps): JSX.Element => {
  const { dataKey, ratings, title } = props;

  return (
    <TeamRatingGraphWrapper>
      <ResponsiveContainer width="98%">
        <BarChart
          data={ratings}
          margin={{ top: 15, right: 0, left: 0, bottom: 15 }}
        >
          <XAxis />
          <YAxis type="number" domain={['auto', 'dataMax']} />
          <Tooltip />
          <Legend />
          <Bar name={title} type="natural" dataKey={dataKey} fill="#22ccde" />
        </BarChart>
      </ResponsiveContainer>
    </TeamRatingGraphWrapper>
  );
};

export default TeamRatingGraph;
