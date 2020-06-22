import React from 'react';

import classes from './Logo.module.css';
import image from '../../../assets/images/statistico-toolbar-small.png';

const logo = () => (
    <div className={classes.LogoWrap}>
        <a href="/">
            <img src={image} className={classes.Logo} alt="logo" />
        </a>
    </div>
)

export default logo;