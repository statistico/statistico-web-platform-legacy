import React from 'react';
import { func, bool } from 'prop-types';

import {
  faBlog,
  faChartPie,
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';

import MenuWrapper from './MenuWrapper';
import MenuItem from './Menuitem/MenuItem';

const Menu = (props) => {
  const { clicked, open } = props;

  return (
    <MenuWrapper>
      <MenuItem
        icon={faMoneyBillAlt}
        title="Trading"
        open={open}
        link="/trading/strategy"
        clicked={clicked}
      />
      <MenuItem
        icon={faChartPie}
        title="Stats"
        open={open}
        link="/"
        clicked={clicked}
      />
      <MenuItem
        icon={faBlog}
        title="Blog"
        open={open}
        link="/"
        clicked={clicked}
      />
    </MenuWrapper>
  );
};

Menu.propTypes = {
  clicked: func.isRequired,
  open: bool.isRequired,
};

export default Menu;
