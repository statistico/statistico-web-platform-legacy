import React from 'react';
import PropTypes from 'prop-types';

import VenueToggle from '../../../../VenueToggle/VenueToggle';
import classes from './TeamStatsToggle.module.css';

const teamStatsToggle = (props) => {
  const { venue, toggleVenue } = props;

  return (
    <div className={classes.TeamStatsToggle}>
      <VenueToggle
        styles={classes.VenueToggle}
        selected={venue}
        updateSelected={toggleVenue}
      />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

teamStatsToggle.propTypes = {
  venue: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]).isRequired,
  toggleVenue: PropTypes.func.isRequired,
};

export default teamStatsToggle;
