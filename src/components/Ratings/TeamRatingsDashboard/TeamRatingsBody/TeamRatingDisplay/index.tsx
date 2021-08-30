import React from 'react';

import { GraphRow, TeamRatingDisplayWrapper } from './TeamRatingDisplay.styles';
import RatingCards from './RatingCards';
import TeamRatingGraph from './TeamRatingGraph';
import useFetchesTeamRatings from '../../../../../hooks/useFetchesTeamRatings';

type TeamRatingDisplayProps = {
  loading: boolean;
  seasonId: number;
  teamId: number;
};

const TeamRatingDisplay = (props: TeamRatingDisplayProps) => {
  const { loading, seasonId, teamId } = props;
  const { ratings } = useFetchesTeamRatings(teamId, seasonId, 'timestamp_asc');

  return (
    <TeamRatingDisplayWrapper>
      {ratings.length > 0 && (
        <RatingCards loading={loading} ratings={ratings} />
      )}
      <GraphRow>
        <TeamRatingGraph
          dataKey="attackTotal"
          loading={loading}
          title="Attack Ratings"
          ratings={ratings}
        />
        <TeamRatingGraph
          dataKey="defenceTotal"
          loading={loading}
          title="Defence Ratings"
          ratings={ratings}
        />
      </GraphRow>
      <GraphRow>
        <TeamRatingGraph
          dataKey="attackDifference"
          loading={loading}
          title="Attack Match Points"
          ratings={ratings}
        />
        <TeamRatingGraph
          loading={loading}
          dataKey="defenceDifference"
          title="Defence Match Points"
          ratings={ratings}
        />
      </GraphRow>
    </TeamRatingDisplayWrapper>
  );
};

export default TeamRatingDisplay;
