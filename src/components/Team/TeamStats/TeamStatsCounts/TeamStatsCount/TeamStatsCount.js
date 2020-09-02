import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const teamStatsCount = (props) => {
  const { duration, end, start, styles, title } = props;

  return (
    <div className={styles}>
      <h3>{title}</h3>
      <CountUp start={start} end={end} duration={duration} />
    </div>
  );
};

teamStatsCount.propTypes = {
  duration: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  styles: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default teamStatsCount;
