import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import ResultItem from '../ResultItem/ResultItem';
import VenueToggle from '../VenueToggle/VenueToggle';
import useFetchesTeamResults from '../../hooks/useFetchesTeamResults';
import classes from './ResultList.module.css';

const ResultList = (props) => {
  const { seasonIds, teamId } = props;

  const [venue, setVenue] = useState(null);
  const { results, loading } = useFetchesTeamResults(teamId, seasonIds, venue);

  return (
    <Loader loading={loading}>
      <div className={classes.Header}>
        <h3>Results</h3>
        <VenueToggle
          styles={classes.VenueToggle}
          selected={venue}
          updateSelected={setVenue}
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
