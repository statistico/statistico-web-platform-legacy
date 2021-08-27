import React from 'react';

import {
  Date,
  Opponent,
  ResultListItemWrapper,
  Score,
  Venue,
} from './ResultListItem.styles';
import { Result } from '../../../../../../types/entity';

type ResultListItemProps = {
  teamId: number;
  result: Result;
};

const ResultListItem = (props: ResultListItemProps): JSX.Element => {
  const { result, teamId } = props;
  const { homeTeam, awayTeam, homeGoals, awayGoals, date } = result;

  return (
    <ResultListItemWrapper>
      <Date>{date.toLocaleDateString()}</Date>
      <Venue>{homeTeam.id === teamId ? 'H' : 'A'}</Venue>
      <Opponent>
        {homeTeam.id === teamId ? awayTeam.name : homeTeam.name}
      </Opponent>
      <Score>
        {homeGoals} - {awayGoals}
      </Score>
    </ResultListItemWrapper>
  );
};

export default ResultListItem;
