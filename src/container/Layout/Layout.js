import React from "react";

import Aux from '../../hoc/Aux/Aux';
import SidebarMenu from "../../components/Navigation/SidebarMenu/SidebarMenu";
import TeamStats from '../TeamStats/TeamStats';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import { useTogglesMenu } from "../../hooks/useTogglesMenu";
import classes from './Layout.module.css';

const Layout = () => {
    const {menuOpen, menuToggleHandler} = useTogglesMenu(false);

    return (
        <Aux>
            <Toolbar open={menuOpen} clicked={menuToggleHandler}/>
            <SidebarMenu open={menuOpen} />
            <main className={classes.Layout}>
                <TeamStats />
            </main>
        </Aux>
    )
}

export default Layout;