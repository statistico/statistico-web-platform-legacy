import React from 'react';

import { Title, Total, RatingCardWrapper } from './RatingCard.styles';

type RatingCardProps = {
  title: string;
  value: number;
};

const RatingCard = (props: RatingCardProps): JSX.Element => {
  const { title, value } = props;

  return (
    <RatingCardWrapper>
      <Total>{value}</Total>
      <Title>{title}</Title>
    </RatingCardWrapper>
  );
};

export default RatingCard;
