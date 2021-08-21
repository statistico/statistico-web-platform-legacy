import React, { useState } from 'react';

import SeasonListWrapper from './SeasonList.styles';
import SeasonListItem from './SeasonListItem';
import { Season } from '../../types/entity';

type SeasonListProps = {
  seasons: Season[];
};

const SeasonList = (props: SeasonListProps): JSX.Element => {
  const { seasons } = props;
  const [selectedSeason, setSelectedSeason] = useState<number | null>(1);

  return (
    <SeasonListWrapper>
      {seasons.map((s) => (
        <SeasonListItem isSelected={s.id === selectedSeason} season={s} />
      ))}
    </SeasonListWrapper>
  );
};

export default SeasonList;
