import React from 'react';
import { Team } from '../../../../types/entity';

type TeamRatingsBodyProps = {
  team: Team;
};

const TeamRatingsBody = (props: TeamRatingsBodyProps): JSX.Element => {
  const { team } = props;

  return <div>Hello this is the Team {team.name}</div>;
};

export default TeamRatingsBody;
