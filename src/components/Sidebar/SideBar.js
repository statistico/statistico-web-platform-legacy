import React from 'react';

import Brand from './Brand/Brand';
import Menu from '../Menu/Menu';
import SideBarWrapper from './SideBarWrapper';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Brand />
      <Menu />
    </SideBarWrapper>
  );
};

export default SideBar;
