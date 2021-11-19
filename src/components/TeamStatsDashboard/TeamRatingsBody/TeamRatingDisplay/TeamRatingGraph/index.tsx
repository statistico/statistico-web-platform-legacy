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

import Loader from '../../../../Loader/Loader';
import TeamRatingGraphWrapper from './TeamRatingGraph.styles';
import { TeamRating } from '../../../../../types/entity';

type TeamRatingGraphProps = {
  dataKey: string;
  loading: boolean;
  ratings: TeamRating[];
  title: string;
};

const TeamRatingGraph = (props: TeamRatingGraphProps): JSX.Element => {
  const { dataKey, loading, ratings, title } = props;

  return (
    <TeamRatingGraphWrapper>
      <Loader loading={loading}>
        <ResponsiveContainer width="98%">
          <BarChart
            data={ratings}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <XAxis />
            <YAxis type="number" domain={['auto', 'dataMax']} />
            <Tooltip />
            <Legend />
            <Bar name={title} type="natural" dataKey={dataKey} fill="#22ccde" />
          </BarChart>
        </ResponsiveContainer>
      </Loader>
    </TeamRatingGraphWrapper>
  );
};

export default TeamRatingGraph;
