import React from "react";

import classes from './LogoText.module.css';
import logo from '../../../../assets/images/statistico-logotype-blue_s.png';

const logoText = () => (
    <div className={classes.LogoText}>
        <img src={logo} alt="logo_text" />
    </div>

)

export default logoText;