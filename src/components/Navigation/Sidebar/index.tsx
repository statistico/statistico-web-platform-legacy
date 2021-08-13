import React from 'react';

import Brand from './Brand';
import Menu from '../Menu/Menu';
import SideBarToggle from './SideBarToggle';
import SideBarWrapper from './SideBarWrapper';
import { NavigationProps } from '../Navigation.type';

const SideBar = (props: NavigationProps): JSX.Element => {
  const { open, clicked } = props;

  const menuItemClicked = () => {
    clicked(true);
  };

  return (
    <SideBarWrapper open={open}>
      <Brand menuOpen={open} />
      <Menu open={open} clicked={menuItemClicked} />
      <SideBarToggle clicked={clicked} open={open} />
    </SideBarWrapper>
  );
};

export default SideBar;
