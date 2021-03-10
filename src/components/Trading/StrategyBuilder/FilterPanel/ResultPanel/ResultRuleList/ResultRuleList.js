import React, { useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { v4 as uuidv4 } from 'uuid';

import ResultRuleListWrapper from './ResultRuleListWrapper';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';

const ResultRuleList = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const removeFilter = useCallback(
    (i, f) => {
      const newList = f.filter((filter, index) => index !== i);
      setFilters({
        ...filters,
        resultFilters: [...newList],
      });
    },
    [filters, setFilters]
  );

  if (filters.resultFilters.length === 0) {
    return (
      <ResultRuleListWrapper>
        <p>No result rules applied</p>
      </ResultRuleListWrapper>
    );
  }

  return (
    <ResultRuleListWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th />
            <Th>Team</Th>
            <Th>Result</Th>
            <Th>Games</Th>
            <Th>Venue</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filters.resultFilters.map((f, index) => {
            return (
              <Tr key={uuidv4()}>
                <Td>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    size="1x"
                    onClick={() => removeFilter(index, filters.resultFilters)}
                  />
                </Td>
                <Td>{f.team.label}</Td>
                <Td>{f.result.label}</Td>
                <Td>{f.games.label}</Td>
                <Td>{f.venue.label}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </ResultRuleListWrapper>
  );
};

export default ResultRuleList;
