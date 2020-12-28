import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import ResponsiveMenu from './ResponsiveMenu/ResponsiveMenu';
import SideBar from './Sidebar/SideBar';
import TopBar from './TopBar/TopBar';
import useTogglesMenu from '../../hooks/useTogglesMenu';

const Navigation = () => {
  const { menuOpen, menuToggleHandler } = useTogglesMenu(false);

  return (
    <Aux>
      <SideBar open={menuOpen} clicked={menuToggleHandler} />
      <TopBar open={menuOpen} clicked={menuToggleHandler} />
      <ResponsiveMenu open={menuOpen} />
    </Aux>
  );
};

export default Navigation;
