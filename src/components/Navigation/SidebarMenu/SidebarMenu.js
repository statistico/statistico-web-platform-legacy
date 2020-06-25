import React from "react";
import styled from "styled-components";

import NavigationItems from '../../Navigation/SidebarMenu/NavigationItems/NavigationItems';

const Sidebar = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   height: 100%;
   background-color: #181831;
   color: white;
   position: fixed;
   right: 0;
   width: 20%;
   transform: ${props => (props.open) ? "translateX(0)" : "translateX(100%)"};
   transition: transform 0.3s ease-out;
   
   @media (max-width: 480px) {
        width: 100%;
        transition: all 0.3s ease-in;
        padding: 4vh 4vh;
        justify-content: space-between;
        align-items: center;
        right: ${props => (props.open) ? "-0%" : "0"};
    }
`

const sidebarMenu = props => (
    <Sidebar open={props.open} >
        <NavigationItems />
    </Sidebar>
)

export default sidebarMenu;