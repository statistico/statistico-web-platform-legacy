import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import classes from './SidebarMax.module.css';

const sidebarMax = props => {
    return (
        <div className={classes.SidebarMax}>
            <div className={classes.Icon}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" onClick={props.clicked} id="sidebar-arrow" />
            </div>
        </div>

    )
}

export default sidebarMax;