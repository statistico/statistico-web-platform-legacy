import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import classes from './TeamStatsCounts.module.css';

import {
  calculateMax,
  calculateMedian,
  calculateMode,
} from '../../../../../utility/stats_calculator';

const teamStatsCounts = ({ stats }) => {
  if (stats.length === 0) {
    return <div>No stats to show</div>;
  }

  const filtered = stats.map((item) => item.value);
  const total = filtered.reduce((prev, curr) => prev + curr, 0);
  const average = total / stats.length;
  const max = calculateMax(filtered);
  const median = calculateMedian(filtered);
  const mode = calculateMode(filtered);

  return (
    <div className={classes.TeamStatsCounts}>
      <div className={classes.Totals}>
        <div className={classes.Count}>
          <h3>Matches</h3>
          <CountUp start={0} end={stats.length} duration={2} />
        </div>
        <div className={classes.Count}>
          <h3>Total</h3>
          <CountUp start={0} end={total} duration={2} />
        </div>
      </div>
      <div className={classes.Calculated}>
        <div className={classes.Count}>
          <h3>Average</h3>
          <CountUp start={0} end={average} decimals={2} duration={2} />
        </div>
        <div className={classes.Count}>
          <h3>Max</h3>
          <CountUp start={0} end={max} duration={2} />
        </div>
        <div className={classes.Count}>
          <h3>Median</h3>
          <CountUp start={0} end={median} duration={2} />
        </div>
        <div className={classes.Count}>
          <h3>Mode</h3>
          {mode.join(' | ')}
        </div>
      </div>
    </div>
  );
};

teamStatsCounts.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      fixtureId: PropTypes.number.isRequired,
      stat: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.oneOf([null]).isRequired,
      ]),
    })
  ).isRequired,
};

export default teamStatsCounts;
