import React from "react";

import classes from './Loader.module.css';

const loader = props => {
    if (!props.loading) return props.children;

    return (
        <div className={classes.Loader}>
            <p className={classes.Spinner} />
            <p>Loading</p>
        </div>
    )
}

export default loader;