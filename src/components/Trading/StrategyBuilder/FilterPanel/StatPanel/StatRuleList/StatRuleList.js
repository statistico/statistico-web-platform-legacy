import React, { useCallback, useContext } from 'react';
import {
  Table, Thead, Tbody, Tr, Th,
} from 'react-super-responsive-table';
import { v4 as uuidv4 } from 'uuid';

import StatRuleRow from './StatRuleRow/StatRuleRow';
import StatRuleListWrapper from './StatRuleListWrapper';

import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const StatRuleList = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const updateFilter = useCallback(
    (i, f) => {
      filters.statFilters[i] = f;

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
        statFilters: [...newList],
      });
    },
    [filters, setFilters],
  );

  if (filters.statFilters.length === 0) {
    return (
      <StatRuleListWrapper>
        <p>No stat rules applied</p>
      </StatRuleListWrapper>
    );
  }

  return (
    <StatRuleListWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th />
            <Th>Team</Th>
            <Th>Stat</Th>
            <Th>Action</Th>
            <Th>Measure</Th>
            <Th>Metric</Th>
            <Th>Value</Th>
            <Th>Games</Th>
            <Th>Venue</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {filters.statFilters.map((f, index) => (
            <StatRuleRow
              filter={f}
              removeFilter={() => removeFilter(index, filters.statFilters)}
              updateFilter={(filter) => updateFilter(index, filter)}
              key={uuidv4()}
            />
          ))}
        </Tbody>
      </Table>
    </StatRuleListWrapper>
  );
};

export default StatRuleList;
