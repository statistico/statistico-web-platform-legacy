import React from 'react';

import classes from './LogoIcon.module.css';
import logo from '../../../../assets/images/statistico-toolbar-small.png';

const logoIcon = () => (
    <div className={classes.LogoIcon}>
        <a href="/">
            <img src={logo} className={classes.LogoIcon} alt="logo_icon" />
        </a>
    </div>

)

export default logoIcon;