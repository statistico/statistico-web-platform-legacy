import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import ResultItem from '../ResultItem/ResultItem';
import VenueToggle from '../VenueToggle/VenueToggle';
import useFetchTeamReducer from '../../hooks/useFetchTeamReducer';
import useTogglesActiveState from '../../hooks/useTogglesActiveState';
import classes from './ResultList.module.css';

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

  const { selected, selectionToggleHandler } = useTogglesActiveState(null);
  const { results, loading, dispatch } = useFetchTeamReducer(payload);

  const updateResults = (venue) => {
    dispatch({ type: 'UPDATE_REQUEST_VENUE', venue });
  };

  return (
    <Loader loading={loading}>
      <div className={classes.Header}>
        <h3>Results</h3>
        <VenueToggle
          dispatch={updateResults}
          styles={classes.VenueToggle}
          selected={selected}
          updateSelected={selectionToggleHandler}
        />
      </div>
      <div className={classes.Results}>
        {results.map((result) => {
          return <ResultItem result={result} key={result.id} />;
        })}
      </div>
    </Loader>
  );
};

ResultList.propTypes = {
  seasonId: PropTypes.number.isRequired,
  teamId: PropTypes.number.isRequired,
};

export default ResultList;
