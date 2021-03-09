import React, { useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import styled from 'styled-components';
import { Td, Tr } from 'react-super-responsive-table';

import Aux from '../../../../../../hoc/Aux/Aux';
import {
  averageRunnerPrice,
  filterBySeason,
  maxDrawdown,
  profit,
  tradeYield,
} from '../../../../../../utility/trade';
import SeasonRow from './SeasonRow/SeasonRow';

const Count = styled.td`
  color: ${(props) => props.color};
`;

const CompetitionRow = (props) => {
  const { competition, trades } = props;
  const [showSeasons, setShowSeasons] = useState(false);
  const yd = tradeYield(trades, 1);
  const p = profit(trades, 1);

  return (
    <Aux>
      <Tr onClick={() => setShowSeasons(!showSeasons)}>
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
        <Count color={yd > 0 ? 'green' : 'red'}>{yd.toString()}</Count>
        <Count color={p > 0 ? 'green' : 'red'}>{p.toString()}</Count>
      </Tr>
      {showSeasons
        ? competition.seasons.map((season) => {
            return (
              <SeasonRow
                season={season}
                trades={filterBySeason(trades, season.id)}
                key={season.id}
              />
            );
          })
        : null}
    </Aux>
  );
};

CompetitionRow.propTypes = {
  competition: shape({
    id: string.isRequired,
    name: string.isRequired,
    country: string.isRequired,
    seasons: arrayOf(
      shape({
        id: number.isRequired,
        name: string.isRequired,
      })
    ).isRequired,
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
