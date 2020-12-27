import React from 'react';

import {
  faBlog,
  faChartPie,
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';

import MenuWrapper from './MenuWrapper';
import MenuItem from './Menuitem/MenuItem';

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuItem icon={faMoneyBillAlt} title="Trading" />
      <MenuItem icon={faChartPie} title="Stats" />
      <MenuItem icon={faBlog} title="Blog" />
    </MenuWrapper>
  );
};

export default Menu;
