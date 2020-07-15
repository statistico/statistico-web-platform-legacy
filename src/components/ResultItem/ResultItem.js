import React from 'react';
import PropTypes from 'prop-types';

import classes from './ResultItem.module.css';

const resultItem = (props) => {
  const { result } = props;

  return (
    <div className={classes.ResultItem}>
      <span className={classes.Home}>{result.homeTeam.name}</span>
      <span className={classes.Score}>
        {result.homeScore} - {result.awayScore}
      </span>
      <span className={classes.Away}>{result.awayTeam.name}</span>
    </div>
  );
};

resultItem.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.number,
    homeTeam: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    awayTeam: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    venue: PropTypes.string,
    date: PropTypes.string,
    homeScore: PropTypes.number,
    awayScore: PropTypes.number,
  }).isRequired,
};

export default resultItem;
