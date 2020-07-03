import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

import classes from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
    state = { error: false };

    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        if (this.state.error) {
            return (
                <div className={classes.Error}>
                    <FontAwesomeIcon icon={faExclamationCircle} size="4x" />
                    <h3>There has been an error</h3>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;