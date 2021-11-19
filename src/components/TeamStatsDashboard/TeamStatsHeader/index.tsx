import React from 'react';

import SeasonSelect from '../../SeasonSelect';
import TeamLogo from '../../TeamLogo';
import TeamSelect from '../../TeamSelect';
import {
  TeamStatsHeaderWrapper,
  Buttons,
  Title,
} from './TeamStatsHeader.styles';
import { Season, Team } from '../../../types/entity';

type TeamStatsHeaderProps = {
  onSeasonSelect: (season: Season | null) => void;
  onTeamSelect: (team: Team | null) => void;
  selectedTeam: Team | null;
};

const TeamStatsHeader = (props: TeamStatsHeaderProps): JSX.Element => {
  const { onSeasonSelect, onTeamSelect, selectedTeam } = props;

  const reset = () => {
    onSeasonSelect(null);
    onTeamSelect(null);
  };

  return (
    <TeamStatsHeaderWrapper>
      <Buttons>
        {selectedTeam === null ? (
          <TeamSelect onSelect={onTeamSelect} />
        ) : (
          <TeamLogo
            name={selectedTeam.name}
            onClick={reset}
            url={selectedTeam.logo}
          />
        )}
        {selectedTeam ? (
          <SeasonSelect onSelect={onSeasonSelect} teamId={selectedTeam.id} />
        ) : null}
      </Buttons>
      <Title>Team Stats</Title>
    </TeamStatsHeaderWrapper>
  );
};

export default TeamStatsHeader;
