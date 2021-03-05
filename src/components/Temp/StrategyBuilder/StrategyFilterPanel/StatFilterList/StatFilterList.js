import React, { useCallback, useContext, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import StatFilterListWrapper from './StatFilterListWrapper';
import Modal from '../../../../Modal/Modal';
import Table from '../../../../Table/Table';
import useModal from '../../../../../hooks/useModal';
import StatFilter from './StatFilter/StatFilter';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../context/StrategyBuilderContext';

const StatFilterList = () => {
  const { isShowing, toggle } = useModal(false);
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

  const addFilter = (filter) => {
    setFilters({
      ...filters,
      statFilters: [...filters.statFilters, filter],
    });
    toggle();
  };

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
    ],
    [filters, removeFilter]
  );

  return (
    <StatFilterListWrapper>
      <Modal clicked={toggle} show={isShowing}>
        <StatFilter addFilter={addFilter} />
      </Modal>
      <FontAwesomeIcon icon={faPlusCircle} size="1x" onClick={() => toggle()} />
      <span>Stat Filters</span>
      <Table columns={cols} data={statFilters} />
    </StatFilterListWrapper>
  );
};

export default StatFilterList;
