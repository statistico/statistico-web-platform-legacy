import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import CompetitionRowWrapper from './CompetitionRowWrapper';
import {
  averageRunnerPrice,
  maxDrawdown,
  profit,
  tradeYield,
} from '../../../../../utility/trade';

const Count = styled.p`
  color: ${(props) => props.color};
`;

const CompetitionRow = (props) => {
  const { competition, trades } = props;
  const yd = tradeYield(trades, 1);
  const p = profit(trades, 1);

  return (
    <CompetitionRowWrapper>
      <p>{competition.label}</p>
      <p>{trades.length}</p>
      <p>{averageRunnerPrice(trades)}</p>
      <p>{maxDrawdown(trades)}</p>
      <Count color={yd > 0 ? 'green' : 'red'}>{yd}</Count>
      <Count color={p > 0 ? 'green' : 'red'}>{p}</Count>
    </CompetitionRowWrapper>
  );
};

CompetitionRow.propTypes = {
  competition: shape({
    name: string.isRequired,
    label: string.isRequired,
  }).isRequired,
  trades: arrayOf(
    shape({
      competitionId: number.isRequired,
      result: string.isRequired,
      runnerPrice: number.isRequired,
    })
  ).isRequired,
};

export default CompetitionRow;
