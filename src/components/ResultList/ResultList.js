import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import ResultItem from '../ResultItem/ResultItem';
import useFetchTeamReducer from '../../hooks/useFetchTeamReducer';

const ResultList = (props) => {
  const { seasonId, teamId } = props;

  const payload = {
    team: {
      id: teamId,
      venue: null,
    },
    seasonIds: [seasonId],
    sort: 'date_asc',
    limit: null,
  };

  const { results, loading, dispatch } = useFetchTeamReducer(payload);

  const toggleVenue = (v) => {
    dispatch({ type: 'UPDATE_VENUE', venue: v });
  };

  return (
    <Loader loading={loading}>
      <h3>Results</h3>
      <button type="button" onClick={() => toggleVenue('home')}>
        Click Home
      </button>
      <button type="button" onClick={() => toggleVenue('away')}>
        Click Away
      </button>
      <button type="button" onClick={() => toggleVenue(null)}>
        Click Both
      </button>
      {results.map((result) => {
        return <ResultItem result={result} key={result.id} />;
      })}
    </Loader>
  );
};

ResultList.propTypes = {
  seasonId: PropTypes.number.isRequired,
  teamId: PropTypes.number.isRequired,
};

export default ResultList;
