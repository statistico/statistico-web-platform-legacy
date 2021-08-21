import React from 'react';

import TeamRatingsBodyWrapper from './TeamRatingsBody.styles';
import { Team } from '../../../../types/entity';

type TeamRatingsBodyProps = {
  team: Team;
};

const TeamRatingsBody = (props: TeamRatingsBodyProps): JSX.Element => {
  const { team } = props;

  return (
    <TeamRatingsBodyWrapper>
      <div>Hello this is the Team {team.name}</div>
    </TeamRatingsBodyWrapper>
  );
};

export default TeamRatingsBody;
