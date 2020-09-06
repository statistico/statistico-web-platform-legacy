import React from 'react';
import PropTypes from 'prop-types';

import DatePick from '../../../../DatePick/DatePick';
import OpponentToggle from '../../../../OpponentToggle/OpponentToggle';
import VenueToggle from '../../../../VenueToggle/VenueToggle';
import classes from './TeamStatsToggle.module.css';

const teamStatsToggle = (props) => {
  const {
    active,
    dateAfter,
    dateBefore,
    showOpponent,
    toggleDateAfter,
    toggleDateBefore,
    toggleOpponent,
    toggleVenue,
    venue,
  } = props;

  const styles = active
    ? `${classes.TeamStatsToggle}`
    : `${classes.TeamStatsToggle} ${classes.Hide}`;

  return (
    <div className={styles}>
      <VenueToggle
        styles={classes.VenueToggle}
        selected={venue}
        updateSelected={toggleVenue}
      />
      <DatePick
        date={dateAfter}
        placeholder="Date From"
        styles={classes.DatePick}
        toggleDate={toggleDateAfter}
      />
      <DatePick
        date={dateBefore}
        placeholder="Date To"
        styles={classes.DatePick}
        toggleDate={toggleDateBefore}
      />
      <OpponentToggle
        showOpponent={showOpponent}
        toggleOpponent={toggleOpponent}
      />
    </div>
  );
};

teamStatsToggle.propTypes = {
  active: PropTypes.bool.isRequired,
  dateAfter: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  dateBefore: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  showOpponent: PropTypes.bool.isRequired,
  toggleDateAfter: PropTypes.func.isRequired,
  toggleDateBefore: PropTypes.func.isRequired,
  toggleOpponent: PropTypes.func.isRequired,
  toggleVenue: PropTypes.func.isRequired,
  venue: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

teamStatsToggle.defaultProps = {
  dateAfter: null,
  dateBefore: null,
  venue: null,
};

export default teamStatsToggle;
