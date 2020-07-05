import React from "react";
import PropTypes from "prop-types";

import Avatar from "../Avatar/Avatar";
import LogoIcon from "../../Logo/LogoIcon/LogoIcon";
import LogoText from "../../Logo/LogoText/LogoText";
import Toggle from "../../Toggle/Toggle";

import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  const { open, clicked } = props;

  return (
    <header className={classes.Toolbar}>
      <div className={classes.LogoIcon}>
        <a href="/">
          <LogoIcon />
        </a>
      </div>
      <div className={classes.LogoText}>
        <a href="/">
          <LogoText />
        </a>
      </div>
      <Avatar />
      <Toggle open={open} clicked={clicked} />
    </header>
  );
};

Toolbar.propTypes = {
  open: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Toolbar;
