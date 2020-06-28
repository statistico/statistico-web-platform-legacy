import React from "react";

import Avatar from '../Avatar/Avatar';
import LogoIcon from '../../Logo/LogoIcon/LogoIcon';
import LogoText from '../../Logo/LogoText/LogoText';
import Toggle from '../../Toggle/Toggle';

import classes from './Toolbar.module.css';

const Toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.LogoIcon}>
                <a href="/"><LogoIcon /></a>
            </div>
            <div className={classes.LogoText}>
                <a href="/"><LogoText /></a>
            </div>
            <Avatar />
            <Toggle open={props.open} clicked={props.clicked} />
        </header>
    );
}

export default Toolbar;