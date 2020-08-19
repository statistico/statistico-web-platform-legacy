import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import ResultItem from '../ResultItem/ResultItem';
import VenueToggle from '../VenueToggle/VenueToggle';
import useFetchesTeamResults from '../../hooks/useFetchesTeamResults';
import useTogglesActiveState from '../../hooks/useTogglesActiveState';
import { UPDATE_REQUEST_VENUE } from '../../actions/actionTypes';
import classes from './ResultList.module.css';

const ResultList = (props) => {
  const { seasonIds, teamId } = props;

  const payload = {
    team: {
      id: teamId,
      venue: null,
    },
    seasonIds,
    sort: 'date_asc',
    limit: null,
    dateBefore: new Date().toISOString(),
  };

  const { selected, selectionToggleHandler } = useTogglesActiveState(null);
  const { results, loading, dispatch } = useFetchesTeamResults(payload);

  const updateResults = (venue) => {
    dispatch({ type: UPDATE_REQUEST_VENUE, venue });
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
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default ResultList;
