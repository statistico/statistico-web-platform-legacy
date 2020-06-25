import React from "react";

import classes from './Avatar.module.css';
import icon from '../../../assets/images/avatar.jpeg';

const avatar = () => (
    <div className={classes.Avatar}>
        <img src={icon} alt="avatar" />
    </div>

)

export default avatar;