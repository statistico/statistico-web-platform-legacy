import React, { useCallback, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import StatFilterListWrapper from './StatFilterListWrapper';
import Modal from '../../../../Modal/Modal';
import Table from '../../../../Table/Table';
import useModal from '../../../../../hooks/useModal';
import StatFilter from './StatFilter/StatFilter';

const StatFilterList = () => {
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
            onClick={() => removeFilter(tableProps.row.index, filters)}
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
      <Table columns={cols} data={filters} />
    </StatFilterListWrapper>
  );
};

export default StatFilterList;
