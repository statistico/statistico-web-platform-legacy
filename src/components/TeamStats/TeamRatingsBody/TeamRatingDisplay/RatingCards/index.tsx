import React from 'react';

import RatingCardsWrapper from './RatingCards.styles';
import RatingCard from './RatingCard';
import { TeamRating } from '../../../../../types/entity';

type RatingCardsProps = {
  loading: boolean;
  ratings: TeamRating[];
};

const RatingCards = (props: RatingCardsProps): JSX.Element => {
  const { loading, ratings } = props;
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
        loading={loading}
        title="Attack"
        value={attackTotal}
        width="23%"
      />
      <RatingCard
        color="#22ccde"
        loading={loading}
        title="Defence"
        value={defenceTotal}
        width="23%"
      />
      <RatingCard
        color="green"
        loading={loading}
        title="Latest Attack"
        value={attackDifference}
        width="23%"
      />
      <RatingCard
        color="red"
        loading={loading}
        title="Latest Defence"
        value={defenceDifference}
        width="23%"
      />
    </RatingCardsWrapper>
  );
};

export default RatingCards;
