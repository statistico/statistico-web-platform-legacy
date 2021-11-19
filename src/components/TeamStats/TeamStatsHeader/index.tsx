import React from 'react';

import SeasonSelect from '../../SeasonSelect';
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

  return (
    <TeamStatsHeaderWrapper>
      <Buttons>
        <TeamSelect onSelect={onTeamSelect} />
        {selectedTeam ? (
          <SeasonSelect onSelect={onSeasonSelect} teamId={selectedTeam.id} />
        ) : null}
      </Buttons>
      <Title>Team Stats</Title>
    </TeamStatsHeaderWrapper>
  );
};

export default TeamStatsHeader;
