import React from 'react';
import PropTypes from 'prop-types';

import TeamStatsCount from './TeamStatsCount/TeamStatsCount';
import filterNullValues from '../../../../utility/stats';
import classes from './TeamStatsCounts.module.css';

import {
  calculateMax,
  calculateMedian,
  calculateMode,
} from '../../../../utility/calculator';

const teamStatsCounts = ({ isOpponent, stat, stats }) => {
  const filtered = filterNullValues(stats);
  const sum = filtered.reduce((prev, curr) => prev + curr, 0);
  const average = sum / filtered.length;
  const max = calculateMax(filtered);
  const median = calculateMedian(filtered);
  const mode = calculateMode(filtered);

  const percentage = ['Passes Percentage', 'Possession'].includes(stat);

  const styles = isOpponent
    ? `${classes.Count} ${classes.CountOpponent}`
    : `${classes.Count}`;

  return (
    <div className={classes.TeamStatsCounts}>
      <TeamStatsCount
        duration={2}
        end={filtered.length}
        start={0}
        styles={styles}
        title="Matches"
      />
      {!percentage ? (
        <TeamStatsCount
          duration={2}
          end={sum}
          start={0}
          styles={styles}
          title="Sum"
        />
      ) : null}
      <TeamStatsCount
        duration={2}
        end={average}
        start={0}
        styles={styles}
        title="Average"
      />
      <TeamStatsCount
        duration={2}
        end={max}
        start={0}
        styles={styles}
        title="Max"
      />
      <TeamStatsCount
        duration={2}
        end={median}
        start={0}
        styles={styles}
        title="Median"
      />
      {mode.length === 1 ? (
        <TeamStatsCount
          duration={2}
          end={mode[0]}
          start={0}
          styles={styles}
          title="Mode"
        />
      ) : null}
    </div>
  );
};

teamStatsCounts.propTypes = {
  isOpponent: PropTypes.bool.isRequired,
  stat: PropTypes.string.isRequired,
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
