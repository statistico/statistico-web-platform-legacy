import React from "react";
import PropTypes from "prop-types";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  const { children } = props;

  return <li className={classes.NavigationItem}>{children}</li>;
};

navigationItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default navigationItem;
