import React from "react";

import Dashboard from '../../components/Dashboard/Dashboard';
import SidebarMax from '../../components/Sidebar/SidebarMax/SidebarMax';
import SidebarMin from '../../components/Sidebar/SidebarMin/SidebarMin';
import { useTogglesMenu } from "../../hooks/useTogglesMenu";
import classes from './TeamStats.module.css';

const TeamStats = () => {
    const {menuOpen, menuToggleHandler} = useTogglesMenu(true);

    return (
        <div className={classes.TeamStats}>
            { menuOpen ?
                <SidebarMax clicked={menuToggleHandler} open={menuOpen} /> :
                <SidebarMin clicked={menuToggleHandler} open={menuOpen} /> }
            <Dashboard />
        </div>
    )
}

export default TeamStats;