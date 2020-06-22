import React, { useState } from "react";

import NavBox from '../NavBox/NavBox';
import Logo from '../Logo/Logo';
import Toggle from '../Toggle/Toggle';

import classes from './Toolbar.module.css';

const Toolbar = () => {
    const [toolbarOpen, setToolbarOpen] = useState(false);

    const toolbarToggleHandler = () => {
        setToolbarOpen(!toolbarOpen)
    }

    return (
        <header className={classes.Toolbar}>
            <Logo />
            <Toggle open={toolbarOpen} clicked={toolbarToggleHandler} />
            <NavBox open={toolbarOpen} />
        </header>
    );
}

export default Toolbar;