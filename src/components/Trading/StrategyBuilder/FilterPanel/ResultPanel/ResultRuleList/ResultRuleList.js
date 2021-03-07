import React, { useCallback, useContext, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Table from '../../../../../Table/Table';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../../context/StrategyBuilderContext';

const ResultRuleList = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);

  const resultFilters = filters.resultFilters.map((f) => {
    return {
      team: f.team.label,
      result: f.result.label,
      games: f.games.label,
      venue: f.venue.label,
    };
  });

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
              removeFilter(tableProps.row.index, filters.resultFilters)
            }
          />
        ),
      },
      {
        Header: 'Team',
        accessor: 'team',
      },
      {
        Header: 'Result',
        accessor: 'result',
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

  return <Table columns={cols} data={resultFilters} />;
};

export default ResultRuleList;
