import React, { useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { v4 as uuidv4 } from 'uuid';

import StatRuleListWrapper from './StatRuleListWrapper';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const StatRuleList = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const removeFilter = useCallback(
    (i, f) => {
      const newList = f.filter((filter, index) => index !== i);
      setFilters({
        ...filters,
        statFilters: [...newList],
      });
    },
    [filters, setFilters]
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
            <Th>Stat</Th>
            <Th>Action</Th>
            <Th>Team</Th>
            <Th>Measure</Th>
            <Th>Metric</Th>
            <Th>Value</Th>
            <Th>Games</Th>
            <Th>Venue</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filters.statFilters.map((f, index) => {
            return (
              <Tr key={uuidv4()}>
                <Td>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    size="1x"
                    onClick={() => removeFilter(index, filters.statFilters)}
                  />
                </Td>
                <Td>{f.stat.label}</Td>
                <Td>{f.action.label}</Td>
                <Td>{f.team.label}</Td>
                <Td>{f.measure.label}</Td>
                <Td>{f.metric.label}</Td>
                <Td>{f.value.label}</Td>
                <Td>{f.games.label}</Td>
                <Td>{f.venue.label}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </StatRuleListWrapper>
  );
};

export default StatRuleList;
