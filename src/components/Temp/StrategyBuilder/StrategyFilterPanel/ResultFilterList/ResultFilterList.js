import React, { useCallback, useContext, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../../../Modal/Modal';
import ResultFilterListWrapper from './ResultFilterListWrapper';
import ResultFilter from './ResultFilter/ResultFilter';
import Table from '../../../../Table/Table';
import useModal from '../../../../../hooks/useModal';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../context/StrategyBuilderContext';

const ResultFilterList = () => {
  const { isShowing, toggle } = useModal(false);
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

  const addFilter = (filter) => {
    setFilters({
      ...filters,
      resultFilters: [...filters.resultFilters, filter],
    });
    toggle();
  };

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
    ],
    [filters, removeFilter]
  );

  return (
    <ResultFilterListWrapper>
      <Modal clicked={toggle} show={isShowing}>
        <ResultFilter addFilter={addFilter} />
      </Modal>
      <FontAwesomeIcon icon={faPlusCircle} size="1x" onClick={() => toggle()} />
      <span>Result Filters</span>
      <Table columns={cols} data={resultFilters} />
    </ResultFilterListWrapper>
  );
};

export default ResultFilterList;
