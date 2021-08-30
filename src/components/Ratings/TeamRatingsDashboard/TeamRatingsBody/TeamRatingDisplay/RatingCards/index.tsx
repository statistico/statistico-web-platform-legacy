import React from 'react';

import RatingCardsWrapper from './RatingCards.styles';
import RatingCard from './RatingCard';
import { TeamRating } from '../../../../../../types/entity';

type RatingCardsProps = {
  ratings: TeamRating[];
};

const RatingCards = (props: RatingCardsProps): JSX.Element => {
  const { ratings } = props;

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
