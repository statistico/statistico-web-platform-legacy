import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './TeamStatsMenuItem.module.css';

const teamStatsMenuItem = ({ option }) => {
  return (
    <div className={classes.TeamStatsMenuItem}>
      <span>
        <FontAwesomeIcon icon={faPlusCircle} />
      </span>
      <span>{option}</span>
    </div>
  );
};

teamStatsMenuItem.propTypes = {
  option: PropTypes.string.isRequired,
};

export default teamStatsMenuItem;
