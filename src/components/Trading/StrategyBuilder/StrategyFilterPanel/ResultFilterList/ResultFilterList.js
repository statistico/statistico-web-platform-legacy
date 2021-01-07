import React, { useCallback, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Modal from '../../../../Modal/Modal';
import ResultFilterListWrapper from './ResultFilterListWrapper';
import ResultFilter from './ResultFilter/ResultFilter';
import Table from '../../../../Table/Table';
import useModal from '../../../../../hooks/useModal';

const ResultFilterList = () => {
  const { isShowing, toggle } = useModal(false);
  const [filters, setFilters] = useState([]);

  const addFilter = (filter) => {
    setFilters([...filters, filter]);
    toggle();
  };

  const removeFilter = useCallback(
    (i, f) => {
      const newList = f.filter((filter, index) => index !== i);
      setFilters(newList);
    },
    [setFilters]
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
            onClick={() => removeFilter(tableProps.row.index, filters)}
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
      <Table columns={cols} data={filters} />
    </ResultFilterListWrapper>
  );
};

export default ResultFilterList;
