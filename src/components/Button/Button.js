import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const button = (props) => {
  const { click, isActive, label } = props;

  const styles = isActive
    ? `${classes.Button} ${classes.ButtonActive}`
    : `${classes.Button}`;

  return (
    <button className={styles} type="button" onClick={click}>
      {label}
    </button>
  );
};

button.propTypes = {
  click: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default button;
