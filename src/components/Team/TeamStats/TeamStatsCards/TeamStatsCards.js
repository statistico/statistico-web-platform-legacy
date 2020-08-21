import React from 'react';
import PropTypes from 'prop-types';

import classes from './TeamStatsCards.module.css';

const teamStatsCards = ({ stats }) => {
  if (stats.length === 0) {
    return <div className={classes.Empty}>Please select a stat to begin</div>;
  }

  return <div>Hello</div>;
};

teamStatsCards.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default teamStatsCards;
