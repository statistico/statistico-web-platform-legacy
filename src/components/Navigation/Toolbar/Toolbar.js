import React, { useState } from "react";

import NavBox from '../NavBox/NavBox';
import Avatar from '../Avatar/Avatar';
import LogoIcon from '../Logo/LogoIcon/LogoIcon';
import LogoText from '../Logo/LogoText/LogoText';
import Toggle from '../Toggle/Toggle';

import classes from './Toolbar.module.css';

const Toolbar = () => {
    const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

    const toolbarToggleHandler = () => {
        setSidebarMenuOpen(!sidebarMenuOpen)
    }

    return (
        <header className={classes.Toolbar}>
            <LogoIcon />
            <LogoText />
            <Avatar />
            <Toggle open={sidebarMenuOpen} clicked={toolbarToggleHandler} />
            {/*<NavBox open={toolbarOpen} />*/}
        </header>
    );
}

export default Toolbar;