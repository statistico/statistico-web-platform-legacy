import React from "react";

import Dashboard from '../../components/Dashboard/Dashboard';
import TeamStatsSideBar from "../../components/TeamStats/TeamStatsSideBar/TeamStatsSideBar";
import classes from './TeamStats.module.css';
import {useFetchesTeam} from "../../hooks/useFetchesTeam";
import Loader from "../../components/Loader/Loader";

const TeamStats = () => {
    const { team, loading } = useFetchesTeam(101);

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