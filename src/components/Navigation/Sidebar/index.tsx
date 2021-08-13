import React, { useState } from 'react';

import Brand from './Brand';
import Menu from '../Menu';
import SideBarToggle from './SideBarToggle';
import SideBarWrapper from './SideBarWrapper';
import { NavigationProps } from '../Navigation.type';

const SideBar = (props: NavigationProps): JSX.Element => {
  const { open, clicked } = props;
  const [selected, setSelected] = useState('');

  return (
    <SideBarWrapper open={open}>
      <Brand clicked={() => setSelected('')} menuOpen={open} />
      <Menu open={open} selected={selected} selectItem={setSelected} />
      <SideBarToggle clicked={clicked} open={open} />
    </SideBarWrapper>
  );
};

export default SideBar;
