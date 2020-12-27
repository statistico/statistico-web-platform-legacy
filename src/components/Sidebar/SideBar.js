import React from 'react';

import Brand from './Brand/Brand';
import Menu from '../Menu/Menu';
import SideBarToggle from './SideBarToggle/SideBarToggle';
import SideBarWrapper from './SideBarWrapper';
import useTogglesMenu from '../../hooks/useTogglesMenu';

const SideBar = () => {
  const { menuOpen, menuToggleHandler } = useTogglesMenu(true);

  return (
    <SideBarWrapper open={menuOpen}>
      <Brand menuOpen={menuOpen} />
      <Menu open={menuOpen} />
      <SideBarToggle clicked={menuToggleHandler} open={menuOpen} />
    </SideBarWrapper>
  );
};

export default SideBar;
