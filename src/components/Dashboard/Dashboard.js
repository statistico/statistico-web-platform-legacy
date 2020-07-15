import React from 'react';
import PropTypes from 'prop-types';

import classes from './Dashboard.module.css';

const dashboard = (props) => {
  const { children } = props;

  return <div className={classes.Dashboard}>{children}</div>;
};

dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default dashboard;
