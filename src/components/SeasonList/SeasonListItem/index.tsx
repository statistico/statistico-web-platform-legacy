import React from 'react';

import SeasonListItemWrapper from './SeasonListItem.styles';
import { Season } from '../../../types/entity';

type SeasonListItemProps = {
  isSelected: boolean;
  onClick: (id: number) => void;
  season: Season;
};

const SeasonListItem = (props: SeasonListItemProps): JSX.Element => {
  const { isSelected, onClick, season } = props;

  return (
    <SeasonListItemWrapper
      isSelected={isSelected}
      onClick={() => onClick(season.id)}
    >
      {season.name}
    </SeasonListItemWrapper>
  );
};

export default SeasonListItem;
