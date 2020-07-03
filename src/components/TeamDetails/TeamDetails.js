import React from "react";

import classes from './TeamDetails.module.css';

const teamDetails = props => {
    return (
        <div className={classes.TeamDetails}>
            <img src={props.team.logo} alt="team-logo"/>
            <span className={classes.Bold}>{props.team.name}</span>
        </div>
    )
}

export default teamDetails;