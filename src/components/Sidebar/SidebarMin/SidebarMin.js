import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import classes from './SidebarMin.module.css';

const sidebarMin = props => {
    return (
        <div className={classes.SidebarMin}>
            <div className={classes.Icon}>
                <FontAwesomeIcon icon={faArrowRight} size="2x" onClick={props.clicked} id="sidebar-arrow" />
            </div>
        </div>

    )
}

export default sidebarMin;