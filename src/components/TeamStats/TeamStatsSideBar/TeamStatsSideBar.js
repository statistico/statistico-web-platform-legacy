import React from "react";

import Aux from '../../../hoc/Aux/Aux';
import SidebarMax from '../../Sidebar/SidebarMax/SidebarMax'
import SidebarMin from '../../Sidebar/SidebarMin/SidebarMin'
import TeamDetails from "../../TeamDetails/TeamDetails";
import {useTogglesMenu} from "../../../hooks";

const TeamStatsSideBar = props => {
    const {menuOpen, menuToggleHandler} = useTogglesMenu(true);

    return (
        <Aux>
            { menuOpen
                ? <SidebarMax clicked={menuToggleHandler} open={menuOpen}>
                    <TeamDetails team={props.team} />
                </ SidebarMax>
                : <SidebarMin clicked={menuToggleHandler} open={menuOpen} /> }
        </Aux>
    )
}

export default TeamStatsSideBar;