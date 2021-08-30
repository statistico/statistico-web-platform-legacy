import React from 'react';

import RatingCardsWrapper from './RatingCards.styles';
import RatingCard from './RatingCard';
import { TeamRating } from '../../../../../../types/entity';

type RatingCardsProps = {
  ratings: TeamRating[];
};

const RatingCards = (props: RatingCardsProps): JSX.Element => {
  const { ratings } = props;
  const latest = ratings[ratings.length - 1];
  const {
    attackTotal,
    attackDifference,
    defenceTotal,
    defenceDifference,
  } = latest;

  return (
    <RatingCardsWrapper>
      <RatingCard
        color="#22ccde"
        title="Attack"
        value={attackTotal}
        width="23%"
      />
      <RatingCard
        color="#22ccde"
        title="Defence"
        value={defenceTotal}
        width="23%"
      />
      <RatingCard
        color="green"
        title="Latest Attack"
        value={attackDifference}
        width="23%"
      />
      <RatingCard
        color="red"
        title="Latest Defence"
        value={defenceDifference}
        width="23%"
      />
    </RatingCardsWrapper>
  );
};

export default RatingCards;
