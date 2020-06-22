import React from "react";
import styled from "styled-components";

import classes from './Toggle.module.css';

const Hamburger = styled.div`
    background-color: #22ccde;
    width: 30px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
    
    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: #22ccde;
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }
    
    ::before {
        transform: ${props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }
    
    ::after {
        opacity: ${props => (props.open ? "0": "1")};
        transform: ${props => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
        top: 10px;
    }
`
const toggle = props => (
    <div className={classes.Toggle} onClick={props.clicked}>
        { props.open ? <Hamburger open /> : <Hamburger /> }
    </div>
);

export default toggle;