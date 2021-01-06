import React, { useCallback, useMemo } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import FilterListWrapper from './FilterListWrapper';
import Table from '../../../../../Table/Table';

const FilterList = (props) => {
  const { filters, updateFilters } = props;

  const removeFilter = useCallback(
    (i, f) => {
      const newList = f.filter((filter, index) => index !== i);
      updateFilters(newList);
    },
    [updateFilters]
  );

  const columns = useMemo(
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

  if (filters.length === 0) {
    return null;
  }

  return (
    <FilterListWrapper>
      <p>Result Filters</p>
      <Table columns={columns} data={filters} />
    </FilterListWrapper>
  );
};

FilterList.propTypes = {
  filters: arrayOf(
    shape({
      team: string.isRequired,
      result: string.isRequired,
      games: string.isRequired,
      venue: string.isRequired,
    })
  ).isRequired,
  updateFilters: func.isRequired,
};

export default FilterList;
