import React from 'react';

import { Title, Total, RatingCardWrapper } from './RatingCard.styles';

type RatingCardProps = {
  color: string;
  title: string;
  value: number;
  width: string;
};

const RatingCard = (props: RatingCardProps): JSX.Element => {
  const { color, title, value, width } = props;

  return (
    <RatingCardWrapper width={width}>
      <Total color={color}>{value.toFixed(2)}</Total>
      <Title>{title}</Title>
    </RatingCardWrapper>
  );
};

export default RatingCard;
