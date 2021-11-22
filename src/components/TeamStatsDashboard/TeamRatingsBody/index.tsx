import React from 'react';

import { TeamSeasons, TeamRatingsBodyWrapper } from './TeamRatingsBody.styles';
import TeamLogo from '../../TeamLogo';
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
      <TeamSeasons>
        <TeamLogo name={team.name} url={team.logo} onClick={() => {}} />
      </TeamSeasons>
      <TeamRatingDisplay teamId={team.id} seasonId={season.id} />
    </TeamRatingsBodyWrapper>
  );
};

export default TeamRatingsBody;
