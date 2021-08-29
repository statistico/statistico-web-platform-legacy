import React from 'react';

import { TeamRating } from '@/types/entity';
import RatingCardsWrapper from './RatingCards.styles';
import RatingCard from './RatingCard';

type RatingCardsProps = {
  ratings: TeamRating[];
};

const RatingCards = (): JSX.Element => {
  return (
    <RatingCardsWrapper>
      <RatingCard color="#22ccde" title="Attack" value={1956} width="23%" />
      <RatingCard color="#22ccde" title="Defence" value={240} width="23%" />
      <RatingCard color="green" title="Latest Attack" value={5} width="23%" />
      <RatingCard color="red" title="Latest Defence" value={-3} width="23%" />
    </RatingCardsWrapper>
  );
};

export default RatingCards;
