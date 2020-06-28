import React from "react";

import classes from './SidebarMin.module.css';

const sidebarMin = props => {
    return (
        <div className={classes.SidebarMin}>
            <p>Closed</p>
            <button onClick={props.clicked}>Click Me</button>
        </div>

    )
}

export default sidebarMin;