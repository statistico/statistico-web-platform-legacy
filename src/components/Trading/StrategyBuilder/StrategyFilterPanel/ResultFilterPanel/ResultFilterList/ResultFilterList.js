import React, { useMemo } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import ResultFilterListWrapper from './ResultFilterListWrapper';
import Table from '../../../../../Table/Table';

const ResultFilterList = (props) => {
  const { filters, removeFilter } = props;

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
    <ResultFilterListWrapper>
      <Table columns={columns} data={filters} />
    </ResultFilterListWrapper>
  );
};

ResultFilterList.propTypes = {
  filters: arrayOf(
    shape({
      team: string.isRequired,
      result: string.isRequired,
      games: string.isRequired,
      venue: string.isRequired,
    })
  ).isRequired,
  removeFilter: func.isRequired,
};

export default ResultFilterList;
