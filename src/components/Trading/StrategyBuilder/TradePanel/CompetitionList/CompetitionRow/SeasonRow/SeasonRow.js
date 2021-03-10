import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Td } from 'react-super-responsive-table';
import styled from 'styled-components';

import SeasonRowWrapper from './SeasonRowWrapper';
import {
  averageRunnerPrice,
  maxDrawdown,
  profit,
  tradeYield,
} from '../../../../../../../utility/trade';

const Count = styled(Td)`
  color: ${(props) => props.color};
`;

const SeasonRow = (props) => {
  const { season, trades } = props;
  const yd = tradeYield(trades, 1);
  const p = profit(trades, 1);

  return (
    <SeasonRowWrapper>
      <Td />
      <Td>{season.name}</Td>
      <Td>{trades.length}</Td>
      <Td>{averageRunnerPrice(trades)}</Td>
      <Td>{maxDrawdown(trades)}</Td>
      <Count color={yd > 0 ? 'green' : 'red'}>{yd.toString()}</Count>
      <Count color={p > 0 ? 'green' : 'red'}>{p.toString()}</Count>
    </SeasonRowWrapper>
  );
};

SeasonRow.propTypes = {
  season: shape({
    id: number.isRequired,
    name: string.isRequired,
  }).isRequired,
  trades: arrayOf(
    shape({
      competitionId: number.isRequired,
      result: number.isRequired,
      runnerPrice: number.isRequired,
      seasonId: number.isRequired,
    })
  ).isRequired,
};

export default SeasonRow;
