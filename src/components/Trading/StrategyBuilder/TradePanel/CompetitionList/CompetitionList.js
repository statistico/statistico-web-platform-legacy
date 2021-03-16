import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import CompetitionListWrapper from './CompetitionListWrapper';
import CompetitionRow from './CompetitionRow/CompetitionRow';
import { StrategyBuilderContext } from '../../../../../context/StrategyBuilderContext';
import { filterByCompetition } from '../../../../../utility/trade';
import competitions from '../../../../../config/competitions';

const CompetitionList = () => {
  const { filters, tr } = useContext(StrategyBuilderContext);

  const selectedCompetitions = competitions.filter((c) =>
    filters.competitions.includes(c.id)
  );

  return (
    <CompetitionListWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th />
            <Th>Competition</Th>
            <Th>Total Trades</Th>
            <Th>Average Odds</Th>
            <Th>Maximum Drawdown</Th>
            <Th>Yield (%)</Th>
            <Th>Profit / Loss</Th>
          </Tr>
        </Thead>
        <Tbody>
          {selectedCompetitions.map((competition) => {
            return (
              <CompetitionRow
                competition={competition}
                trades={filterByCompetition(tr, parseInt(competition.id, 10))}
                tradeSide={filters.side ? filters.side.name : ''}
                className="competition-row"
                key={competition.id}
              />
            );
          })}
        </Tbody>
      </Table>
    </CompetitionListWrapper>
  );
};

export default CompetitionList;
