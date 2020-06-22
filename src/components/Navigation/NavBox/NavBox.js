import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem/NavItem";

const NavBox = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    color: #22ccde;
    
    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        width: 100%;
        justify-content: flex-start;
        padding-top: 12vh;
        background-color: #181831;
        transition: all 0.3s ease-in;
        top: 50px;
        left: ${props => (props.open) ? "-100%" : "0"};
    }
`

const navBox = props => (
    <NavBox open={!props.open}>
        <NavItem path="/" text="Fixture Search" />
        <NavItem path="/" text="Shortlist" />
        <NavItem path="/" text="Betting Slip" />
    </NavBox>
);

export default navBox;