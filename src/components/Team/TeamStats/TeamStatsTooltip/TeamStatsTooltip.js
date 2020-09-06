import React from 'react';
import PropTypes from 'prop-types';

import classes from './TeamStatsTooltip.module.css';

const TeamStatsTooltip = ({ active, payload }) => {
  if (active && payload.length > 0) {
    const data = payload[0].payload;

    const date = new Date(data.date).toISOString().split('T')[0];

    return (
      <div className={classes.TeamStatsTooltip}>
        <h3>
          <span>{data.stat.split('_').join(' ').toUpperCase()}:</span>
          {data.value}
        </h3>
        <p>
          <span>{data.homeTeam}:</span>
          {data.homeScore}
        </p>
        <p>
          <span>{data.awayTeam}:</span>
          {data.awayScore}
        </p>
        <p>
          <span>Date:</span>
          {date}
        </p>
        <p>
          <span>Venue:</span>
          {data.venue}
        </p>
      </div>
    );
  }

  return null;
};

TeamStatsTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      payload: PropTypes.shape({
        fixtureId: PropTypes.number.isRequired,
        homeTeam: PropTypes.string.isRequired,
        awayTeam: PropTypes.string.isRequired,
        homeScore: PropTypes.number.isRequired,
        awayScore: PropTypes.number.isRequired,
        venue: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        stat: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    })
  ),
};

TeamStatsTooltip.defaultProps = {
  active: false,
  payload: [],
};

export default TeamStatsTooltip;
