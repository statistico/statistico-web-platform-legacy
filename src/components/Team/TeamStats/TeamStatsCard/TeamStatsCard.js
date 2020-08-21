import React from 'react';
import PropTypes from 'prop-types';

const teamStatsCard = ({ stat, styles }) => {
  return (
    <div className={styles}>
      <p>ID: {stat.id}</p>
      <p>Stat: {stat.label}</p>
      <p>Value: {stat.value}</p>
    </div>
  );
};

teamStatsCard.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  styles: PropTypes.string.isRequired,
};

export default teamStatsCard;
