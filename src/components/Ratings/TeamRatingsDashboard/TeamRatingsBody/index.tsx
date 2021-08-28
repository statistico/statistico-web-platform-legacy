import React from 'react';

import {
  RightPanel,
  TeamSeasons,
  TeamRatingsBodyWrapper,
} from './TeamRatingsBody.styles';
import Loader from '../../../Loader/Loader';
import TeamLogo from '../../../TeamLogo';
import RatingCards from './RatingCards';
import SeasonList from '../../../SeasonList';
import TeamRatingGraph from './TeamRatingGraph';
import useFetchesTeamSeasons from '../../../../hooks/useFetchesTeamSeasons';
import { Team } from '../../../../types/entity';

type TeamRatingsBodyProps = {
  team: Team;
};

const TeamRatingsBody = (props: TeamRatingsBodyProps): JSX.Element => {
  const { team } = props;
  const { seasons, loading } = useFetchesTeamSeasons(
    team.id,
    false,
    'name_desc'
  );

  const ratings = [
    {
      attackTotal: 1240.05,
      attackDifference: 22,
      defenceTotal: 670.13,
      defenceDifference: -2,
      fixtureId: 10,
      teamId: 1,
      timestamp: 1615559836,
    },
    {
      attackTotal: 1245.05,
      attackDifference: 5,
      defenceTotal: 675.13,
      defenceDifference: 5,
      fixtureId: 11,
      teamId: 1,
      timestamp: 1615819036,
    },
    {
      attackTotal: 1230.05,
      attackDifference: -25,
      defenceTotal: 685.13,
      defenceDifference: 10,
      fixtureId: 12,
      teamId: 1,
      timestamp: 1616164636,
    },
    {
      attackTotal: 1235.25,
      attackDifference: 5.2,
      defenceTotal: 675.1,
      defenceDifference: -10.03,
      fixtureId: 13,
      teamId: 1,
      timestamp: 1616164636,
    },
    {
      attackTotal: 1285.45,
      attackDifference: 50.2,
      defenceTotal: 675.1,
      defenceDifference: 0,
      fixtureId: 14,
      teamId: 1,
      timestamp: 1616164636,
    },
  ];

  return (
    <TeamRatingsBodyWrapper>
      <TeamSeasons>
        <Loader loading={loading}>
          <TeamLogo name={team.name} url={team.logo} />
          <SeasonList seasons={seasons} />
        </Loader>
      </TeamSeasons>
      <RightPanel>
        <RatingCards />
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
      </RightPanel>
    </TeamRatingsBodyWrapper>
  );
};

export default TeamRatingsBody;
