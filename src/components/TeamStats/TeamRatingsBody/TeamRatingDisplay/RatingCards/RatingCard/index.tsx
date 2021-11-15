import React from 'react';

import Loader from '../../../../../Loader/Loader';
import { Title, Total, RatingCardWrapper } from './RatingCard.styles';

type RatingCardProps = {
  color: string;
  loading: boolean;
  title: string;
  value: number;
  width: string;
};

const RatingCard = (props: RatingCardProps): JSX.Element => {
  const { color, loading, title, value, width } = props;

  return (
    <RatingCardWrapper width={width}>
      <Loader loading={loading}>
        <Total color={color}>{value.toFixed(2)}</Total>
        <Title>{title}</Title>
      </Loader>
    </RatingCardWrapper>
  );
};

export default RatingCard;
