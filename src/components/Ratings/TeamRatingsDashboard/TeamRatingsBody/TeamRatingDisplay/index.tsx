import React from 'react';

import { GraphRow, TeamRatingDisplayWrapper } from './TeamRatingDisplay.styles';
import RatingCards from './RatingCards';
import TeamRatingGraph from './TeamRatingGraph';
import useFetchesTeamRatings from '../../../../../hooks/useFetchesTeamRatings';

type TeamRatingDisplayProps = {
  teamId: number;
  seasonId: number;
};

const TeamRatingDisplay = (props: TeamRatingDisplayProps) => {
  const { teamId, seasonId } = props;
  const { ratings } = useFetchesTeamRatings(teamId, seasonId, 'timestamp_asc');

  return (
    <TeamRatingDisplayWrapper>
      {ratings.length > 0 && <RatingCards ratings={ratings} />}
      <GraphRow>
        <TeamRatingGraph
          title="Attack Ratings"
          dataKey="attackTotal"
          ratings={ratings}
        />
        <TeamRatingGraph
          title="Defence Ratings"
          dataKey="defenceTotal"
          ratings={ratings}
        />
      </GraphRow>
      <GraphRow>
        <TeamRatingGraph
          title="Attack Match Points"
          dataKey="attackDifference"
          ratings={ratings}
        />
        <TeamRatingGraph
          title="Defence Match Points"
          dataKey="defenceDifference"
          ratings={ratings}
        />
      </GraphRow>
    </TeamRatingDisplayWrapper>
  );
};

export default TeamRatingDisplay;
