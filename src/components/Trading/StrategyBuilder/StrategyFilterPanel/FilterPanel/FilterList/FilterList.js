import React, { useCallback, useMemo } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import FilterListWrapper from './FilterListWrapper';
import Modal from '../../../../../Modal/Modal';
import Table from '../../../../../Table/Table';
import useModal from '../../../../../../hooks/useModal';

const FilterList = (props) => {
  const { columns, filters, title, updateFilters } = props;

  const addFilter = (filter) => {
    updateFilters([...filters, filter]);
  };

  const removeFilter = useCallback(
    (i, f) => {
      const newList = f.filter((filter, index) => index !== i);
      updateFilters(newList);
    },
    [updateFilters]
  );

  const cols = useMemo(
    () => [
      ...columns,
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
    [columns, filters, removeFilter]
  );

  return (
    <FilterListWrapper>
      <p>{title}</p>
      <Table columns={cols} data={filters} />
    </FilterListWrapper>
  );
};

FilterList.propTypes = {
  columns: arrayOf(
    shape({
      Header: string.isRequired,
      accessor: string.isRequired,
    })
  ).isRequired,
  filters: arrayOf(
    shape({
      team: string.isRequired,
      result: string.isRequired,
      games: string.isRequired,
      venue: string.isRequired,
    })
  ).isRequired,
  title: string.isRequired,
  updateFilters: func.isRequired,
};

export default FilterList;
