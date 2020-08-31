import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './OpponentToggle.module.css';

const opponentToggle = (props) => {
  const { showOpponent, toggleOpponent } = props;

  const styles = showOpponent
    ? `${classes.ShowOpponent} ${classes.Active}`
    : `${classes.ShowOpponent} ${classes.Inactive}`;

  const toggle = () => {
    toggleOpponent(!showOpponent);
  };

  return (
    <div className={styles}>
      <span>Opponent</span>
      <span
        className={styles}
        onClick={toggle}
        onKeyDown={toggle}
        role="button"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
    </div>
  );
};

opponentToggle.propTypes = {
  showOpponent: PropTypes.bool.isRequired,
  toggleOpponent: PropTypes.func.isRequired,
};

export default opponentToggle;
