import React from 'react';
import { bool } from 'prop-types';

import {
  faBlog,
  faChartPie,
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';

import MenuWrapper from './MenuWrapper';
import MenuItem from './Menuitem/MenuItem';

const Menu = (props) => {
  const { open } = props;

  return (
    <MenuWrapper>
      <MenuItem icon={faMoneyBillAlt} title="Trading" open={open} />
      <MenuItem icon={faChartPie} title="Stats" open={open} />
      <MenuItem icon={faBlog} title="Blog" open={open} />
    </MenuWrapper>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
