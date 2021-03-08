import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import styled from 'styled-components';
import { Td, Tr } from 'react-super-responsive-table';

import {
  averageRunnerPrice,
  maxDrawdown,
  profit,
  tradeYield,
} from '../../../../../../utility/trade';

const Count = styled.p`
  color: ${(props) => props.color};
`;

const CompetitionRow = (props) => {
  const { competition, trades } = props;
  const yd = tradeYield(trades, 1);
  const p = profit(trades, 1);

  return (
    <Tr>
      <Td>
        <img
          src={`${process.env.PUBLIC_URL}/country/${competition.country}.jpg`}
          alt={competition.country}
        />
      </Td>
      <Td>{competition.name}</Td>
      <Td>{trades.length}</Td>
      <Td>{averageRunnerPrice(trades)}</Td>
      <Td>{maxDrawdown(trades)}</Td>
      <Td>
        <Count color={yd > 0 ? 'green' : 'red'}>{yd.toString()}</Count>
      </Td>
      <Td>
        <Count color={p > 0 ? 'green' : 'red'}>{p.toString()}</Count>
      </Td>
    </Tr>
  );
};

CompetitionRow.propTypes = {
  competition: shape({
    id: string.isRequired,
    name: string.isRequired,
    country: string.isRequired,
  }).isRequired,
  trades: arrayOf(
    shape({
      competitionId: number.isRequired,
      result: number.isRequired,
      runnerPrice: number.isRequired,
    })
  ).isRequired,
};

export default CompetitionRow;
