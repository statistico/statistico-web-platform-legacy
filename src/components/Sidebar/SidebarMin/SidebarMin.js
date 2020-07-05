import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./SidebarMin.module.css";

const sidebarMin = (props) => {
  const { clicked } = props;

  return (
    <div className={classes.SidebarMin}>
      <div className={classes.Icon}>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="2x"
          onClick={clicked}
          id="sidebar-arrow"
        />
      </div>
    </div>
  );
};

sidebarMin.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default sidebarMin;
