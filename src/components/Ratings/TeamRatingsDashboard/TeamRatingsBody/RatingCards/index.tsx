import React from 'react';

import RatingCardsWrapper from './RatingCards.styles';
import RatingCard from './RatingCard';
import { TeamRating } from '../../../../../types/entity';

type RatingCardsProps = {
  ratings: TeamRating[];
};

const RatingCards = (props: RatingCardsProps): JSX.Element => {
  const { ratings } = props;

  return (
    <RatingCardsWrapper>
      <RatingCard title="Attack" value={1956} />
      <RatingCard title="Defence" value={240} />
    </RatingCardsWrapper>
  );
};

export default RatingCards;
