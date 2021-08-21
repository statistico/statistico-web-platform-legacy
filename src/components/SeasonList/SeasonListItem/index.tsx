import React from 'react';

import SeasonListItemWrapper from './SeasonListItem.styles';
import { Season } from '../../../types/entity';

type SeasonListItemProps = {
  isSelected: boolean;
  season: Season;
};

const SeasonListItem = (props: SeasonListItemProps): JSX.Element => {
  const { isSelected, season } = props;

  return (
    <SeasonListItemWrapper isSelected={isSelected}>
      {season.name}
    </SeasonListItemWrapper>
  );
};

export default SeasonListItem;
