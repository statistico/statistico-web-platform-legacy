import React from "react";

import classes from './SidebarMin.module.css';

const sidebarMin = props => {
    return (
        <div className={classes.SidebarMin}>
            <p>Ooooh I've changed</p>
            <button onClick={props.clicked}>Click Me</button>
        </div>

    )
}

export default sidebarMin;