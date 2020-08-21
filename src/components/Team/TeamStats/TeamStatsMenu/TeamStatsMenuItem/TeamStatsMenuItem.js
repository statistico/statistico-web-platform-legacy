import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './TeamStatsMenuItem.module.css';

const teamStatsMenuItem = ({ clicked, option }) => {
  return (
    <div className={classes.TeamStatsMenuItem}>
      <span
        onClick={() => clicked(option)}
        onKeyDown={() => clicked(option)}
        role="menuitem"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faPlusCircle} />
      </span>
      <span>{option}</span>
    </div>
  );
};

teamStatsMenuItem.propTypes = {
  clicked: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
};

export default teamStatsMenuItem;
