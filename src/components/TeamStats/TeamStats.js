import React, { useState } from "react";

import Dashboard from './Dashboard/Dashboard';
import SidebarMax from './Sidebar/SidebarMax/SidebarMax';
import SidebarMin from './Sidebar/SidebarMin/SidebarMin';
import classes from './TeamStats.module.css';

const TeamStats = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const sidebarToggleHandler = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div className={classes.TeamStats}>
            { sidebarOpen ?
                <SidebarMax clicked={sidebarToggleHandler} /> :
                <SidebarMin clicked={sidebarToggleHandler} /> }
            <Dashboard />
        </div>
    )
}

export default TeamStats;