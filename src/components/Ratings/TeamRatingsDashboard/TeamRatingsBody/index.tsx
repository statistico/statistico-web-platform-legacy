import React from 'react';

import {
  CentrePanel,
  FixturePanel,
  TeamSeasons,
  TeamRatingsBodyWrapper,
} from './TeamRatingsBody.styles';
import Loader from '../../../Loader/Loader';
import TeamLogo from '../../../TeamLogo';
import RatingCards from './RatingCards';
import SeasonList from '../../../SeasonList';
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

  return (
    <TeamRatingsBodyWrapper>
      <TeamSeasons>
        <Loader loading={loading}>
          <TeamLogo name={team.name} url={team.logo} />
          <SeasonList seasons={seasons} />
        </Loader>
      </TeamSeasons>
      <CentrePanel>
        <RatingCards ratings={[]} />
      </CentrePanel>
      <FixturePanel>
        <p>Fixture list containing result and ratings go here</p>
      </FixturePanel>
    </TeamRatingsBodyWrapper>
  );
};

export default TeamRatingsBody;
