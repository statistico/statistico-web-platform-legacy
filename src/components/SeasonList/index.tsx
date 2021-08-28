import React from 'react';

import SeasonListWrapper from './SeasonList.styles';
import SeasonListItem from './SeasonListItem';
import { Season } from '../../types/entity';

type SeasonListProps = {
  onSeasonSelect: (id: number | null) => void;
  seasons: Season[];
  selectedSeason: number | null;
};

const SeasonList = (props: SeasonListProps): JSX.Element => {
  const { onSeasonSelect, seasons, selectedSeason } = props;

  return (
    <SeasonListWrapper>
      {seasons.map((s) => (
        <SeasonListItem
          key={s.id}
          isSelected={s.id === selectedSeason}
          onClick={onSeasonSelect}
          season={s}
        />
      ))}
    </SeasonListWrapper>
  );
};

export default SeasonList;
