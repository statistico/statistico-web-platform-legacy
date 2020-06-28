import React, { useState } from "react";

import Dashboard from '../../components/Dashboard/Dashboard';
import SidebarMax from '../../components/Sidebar/SidebarMax/SidebarMax';
import SidebarMin from '../../components/Sidebar/SidebarMin/SidebarMin';
import classes from './TeamStats.module.css';

const TeamStats = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const sidebarToggleHandler = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div className={classes.TeamStats}>
            { sidebarOpen ?
                <SidebarMax clicked={sidebarToggleHandler} open={sidebarOpen} /> :
                <SidebarMin clicked={sidebarToggleHandler} open={sidebarOpen} /> }
            <Dashboard />
        </div>
    )
}

export default TeamStats;