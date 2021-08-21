import React from 'react';

import { TeamSeasons, TeamRatingsBodyWrapper } from './TeamRatingsBody.styles';
import TeamLogo from '../../../TeamLogo';
import SeasonList from '../../../SeasonList';
import { Team } from '../../../../types/entity';

type TeamRatingsBodyProps = {
  team: Team;
};

const TeamRatingsBody = (props: TeamRatingsBodyProps): JSX.Element => {
  const { team } = props;

  const seasons = [
    {
      id: 1,
      name: '2019/2020',
    },
    {
      id: 2,
      name: '2020/2021',
    },
  ];

  return (
    <TeamRatingsBodyWrapper>
      <TeamSeasons>
        <TeamLogo name={team.name} url={team.logo} />
        <SeasonList seasons={seasons} />
      </TeamSeasons>
    </TeamRatingsBodyWrapper>
  );
};

export default TeamRatingsBody;
