import React from 'react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import MenuWrapper from './MenuWrapper';
import MenuItem from './Menuitem/MenuItem';

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuItem icon={faArrowLeft} title="Trading" />
      <MenuItem icon={faArrowLeft} title="Stats" />
      <MenuItem icon={faArrowLeft} title="Blog" />
    </MenuWrapper>
  );
};

export default Menu;
