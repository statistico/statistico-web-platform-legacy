import React, { useCallback, useContext, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Table from '../../../../../Table/Table';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';

const StatRuleList = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const statFilters = filters.statFilters.map((f) => {
    return {
      action: f.action.label,
      games: f.games.label,
      measure: f.measure.label,
      metric: f.metric.label,
      stat: f.stat.label,
      team: f.team.label,
      value: f.value.label,
      venue: f.venue.label,
    };
  });

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

  const cols = useMemo(
    () => [
      {
        Header: () => null,
        id: 'delete-row',
        Cell: (tableProps) => (
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="1x"
            onClick={() =>
              removeFilter(tableProps.row.index, filters.statFilters)
            }
          />
        ),
      },
      {
        Header: 'Stat',
        accessor: 'stat',
      },
      {
        Header: 'Action',
        accessor: 'action',
      },
      {
        Header: 'Team',
        accessor: 'team',
      },
      {
        Header: 'Measure',
        accessor: 'measure',
      },
      {
        Header: 'Metric',
        accessor: 'metric',
      },
      {
        Header: 'Value',
        accessor: 'value',
      },
      {
        Header: 'Games',
        accessor: 'games',
      },
      {
        Header: 'Venue',
        accessor: 'venue',
      },
    ],
    [filters, removeFilter]
  );

  return <Table columns={cols} data={statFilters} />;
};

export default StatRuleList;
