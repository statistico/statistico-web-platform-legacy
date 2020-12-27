import React from 'react';

import Brand from './Brand/Brand';
import Menu from '../Menu/Menu';
import SideBarToggle from './SideBarToggle/SideBarToggle';
import SideBarWrapper from './SideBarWrapper';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Brand />
      <Menu />
      <SideBarToggle />
    </SideBarWrapper>
  );
};

export default SideBar;
