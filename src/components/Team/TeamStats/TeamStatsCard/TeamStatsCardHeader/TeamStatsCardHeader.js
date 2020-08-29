import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './TeamStatsCardHeader.module.css';

const teamStatsCardHeader = (props) => {
  const { stat, remove } = props;

  return (
    <div className={classes.TeamStatsCardHeader}>
      <h2>{stat.label.replace('_', '')}</h2>
      <p>
        <span>
          <FontAwesomeIcon icon={faSyncAlt} />
        </span>
        <span
          onClick={() => remove(stat.id)}
          onKeyDown={() => remove(stat.id)}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
      </p>
    </div>
  );
};

teamStatsCardHeader.propTypes = {
  remove: PropTypes.func.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};

export default teamStatsCardHeader;
