import React from "react";

import classes from './NavItem.module.css';

const navItem = props => (
    <a href={props.path} className={classes.Link}>{props.text}</a>
);

export default navItem;