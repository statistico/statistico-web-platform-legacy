import React from "react";

import Dashboard from '../Dashboard/Dashboard';
import TeamStatsSideBar from "./TeamStatsSideBar/TeamStatsSideBar";
import classes from './TeamStats.module.css';
import {useFetchesTeam} from "../../hooks/useFetchesTeam";
import Loader from "../Loader/Loader";

const TeamStats = () => {
    const { team, loading } = useFetchesTeam(82);

    return (
        <div className={classes.TeamStats}>
            <Loader loading={loading}>
                <TeamStatsSideBar team={team} />
                <Dashboard />
            </Loader>
        </div>
    )
}

export default TeamStats;