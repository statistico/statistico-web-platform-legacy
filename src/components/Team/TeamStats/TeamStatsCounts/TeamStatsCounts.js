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

const teamStatsCounts = ({ stats }) => {
  const filtered = filterNullValues(stats);
  const sum = filtered.reduce((prev, curr) => prev + curr, 0);
  const average = sum / filtered.length;
  const max = calculateMax(filtered);
  const median = calculateMedian(filtered);
  const mode = calculateMode(filtered);

  return (
    <div className={classes.TeamStatsCounts}>
      <TeamStatsCount
        duration={2}
        end={filtered.length}
        start={0}
        styles={classes.Count}
        title="Matches"
      />
      <TeamStatsCount
        duration={2}
        end={sum}
        start={0}
        styles={classes.Count}
        title="Sum"
      />
      <TeamStatsCount
        duration={2}
        end={average}
        start={0}
        styles={classes.Count}
        title="Average"
      />
      <TeamStatsCount
        duration={2}
        end={max}
        start={0}
        styles={classes.Count}
        title="Max"
      />
      <TeamStatsCount
        duration={2}
        end={median}
        start={0}
        styles={classes.Count}
        title="Median"
      />
      <TeamStatsCount
        duration={2}
        end={mode.join(' | ')}
        start={0}
        styles={classes.Count}
        title="Mode"
      />
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
