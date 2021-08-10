import React, { useCallback, useContext } from 'react';
import {
  Table, Thead, Tbody, Tr, Th,
} from 'react-super-responsive-table';
import { v4 as uuidv4 } from 'uuid';

import ResultRuleRow from './ResultRuleRow/ResultRuleRow';
import ResultRuleListWrapper from './ResultRuleListWrapper';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';

const ResultRuleList = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const updateFilter = useCallback(
    (i, f) => {
      filters.resultFilters[i] = f;

      setFilters({
        ...filters,
      });
    },
    [filters, setFilters],
  );

  const removeFilter = useCallback(
    (i, f) => {
      const newList = f.filter((filter, index) => index !== i);
      setFilters({
        ...filters,
        resultFilters: [...newList],
      });
    },
    [filters, setFilters],
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
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {filters.resultFilters.map((f, index) => (
            <ResultRuleRow
              filter={f}
              removeFilter={() => removeFilter(index, filters.resultFilters)}
              updateFilter={(filter) => updateFilter(index, filter)}
              key={uuidv4()}
            />
          ))}
        </Tbody>
      </Table>
    </ResultRuleListWrapper>
  );
};

export default ResultRuleList;
