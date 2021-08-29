import React, { useEffect, useState } from 'react';

import { TeamSeasons, TeamRatingsBodyWrapper } from './TeamRatingsBody.styles';
import Loader from '../../../Loader/Loader';
import TeamLogo from '../../../TeamLogo';
import SeasonList from '../../../SeasonList';
import TeamRatingDisplay from './TeamRatingDisplay';
import useFetchesTeamSeasons from '../../../../hooks/useFetchesTeamSeasons';
import { Team } from '../../../../types/entity';

type TeamRatingsBodyProps = {
  team: Team;
};

const TeamRatingsBody = (props: TeamRatingsBodyProps): JSX.Element => {
  const { team } = props;
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const { seasons, loading } = useFetchesTeamSeasons(
    team.id,
    false,
    'name_desc'
  );

  useEffect(() => {
    setSelectedSeason(seasons[0]?.id);
  }, [seasons]);

  return (
    <TeamRatingsBodyWrapper>
      <TeamSeasons>
        <Loader loading={loading}>
          <TeamLogo name={team.name} url={team.logo} />
          <SeasonList
            seasons={seasons}
            selectedSeason={selectedSeason}
            onSeasonSelect={setSelectedSeason}
          />
        </Loader>
      </TeamSeasons>
      <TeamRatingDisplay />
    </TeamRatingsBodyWrapper>
  );
};

export default TeamRatingsBody;
