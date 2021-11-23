import React from 'react';

import TeamRatingsBodyWrapper from './TeamRatingsBody.styles';
import TeamRatingDisplay from './TeamRatingDisplay';
import { Season, Team } from '../../../types/entity';

type TeamRatingsBodyProps = {
  season: Season;
  team: Team;
};

const TeamRatingsBody = (props: TeamRatingsBodyProps): JSX.Element => {
  const { season, team } = props;

  return (
    <TeamRatingsBodyWrapper>
      <TeamRatingDisplay teamId={team.id} seasonId={season.id} />
    </TeamRatingsBodyWrapper>
  );
};

export default TeamRatingsBody;
