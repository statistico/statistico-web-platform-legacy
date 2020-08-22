import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const teamStatsCard = ({ remove, stat, styles }) => {
  return (
    <div className={styles}>
      <p>ID: {stat.id}</p>
      <p>Stat: {stat.label}</p>
      <p>Value: {stat.value}</p>
      <span
        onClick={() => remove(stat.id)}
        onKeyDown={() => remove(stat.id)}
        role="button"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </span>
    </div>
  );
};

teamStatsCard.propTypes = {
  remove: PropTypes.func.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  styles: PropTypes.string.isRequired,
};

export default teamStatsCard;
