import React from "react";

import classes from './SidebarMax.module.css';

const sidebarMax = props => {
    return (
        <div className={classes.Sidebar}>
            <p>Open</p>
            <button onClick={props.clicked}>Click Me</button>
        </div>

    )
}

export default sidebarMax;