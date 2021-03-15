import React, { useContext } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Td } from 'react-super-responsive-table';
import styled from 'styled-components';

import SeasonRowWrapper from './SeasonRowWrapper';
import { StrategyBuilderContext } from '../../../../../../../context/StrategyBuilderContext';
import {
  averageRunnerPrice,
  maxDrawdown,
  profit,
  tradeYield,
} from '../../../../../../../utility/trade';

const Count = styled(Td)`
  color: ${(props) => props.color};, filters.side.name
`;

const SeasonRow = (props) => {
  const { season, trades } = props;
  const { filters } = useContext(StrategyBuilderContext);
  const yd = tradeYield(trades, 1, filters.side.name);
  const p = profit(trades, 1, filters.side.name);

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
