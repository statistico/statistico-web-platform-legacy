import React from "react";

import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./SidebarMenu.module.css";

const sidebarMenu = () => (
  <div className={classes.SidebarMenu}>
    <NavigationItems />
  </div>
);

export default sidebarMenu;
