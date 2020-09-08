import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faSyncAlt,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import classes from './TeamStatsCardHeader.module.css';

const teamStatsCardHeader = (props) => {
  const { reload, remove, stat, toggleFilters } = props;

  return (
    <div className={classes.TeamStatsCardHeader}>
      <h2>{stat.label.replace('_', '')}</h2>
      <p>
        <span
          data-tip
          data-for="filterToggle"
          onClick={toggleFilters}
          onKeyDown={toggleFilters}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={faFilter} />
        </span>
        <span
          data-tip
          data-for="refreshToggle"
          onClick={reload}
          onKeyDown={reload}
          role="button"
          tabIndex={0}
        >
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
      <ReactTooltip id="filterToggle" place="top" effect="float">
        Hide or display filters
      </ReactTooltip>
      <ReactTooltip id="refreshToggle" place="top" effect="float">
        Refresh
      </ReactTooltip>
    </div>
  );
};

teamStatsCardHeader.propTypes = {
  reload: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  toggleFilters: PropTypes.func.isRequired,
};

export default teamStatsCardHeader;
