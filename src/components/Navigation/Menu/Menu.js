import React from 'react';
import { func, bool } from 'prop-types';

import {
  faBlog,
  faChartPie,
  faMoneyBillAlt,
  faSortAmountDown,
} from '@fortawesome/free-solid-svg-icons';

import MenuWrapper from './MenuWrapper';
import MenuItem from './Menuitem/MenuItem';
import { blog, ratings, stats, trading } from '../../../config/routes';

const Menu = (props) => {
  const { clicked, open } = props;

  return (
    <MenuWrapper>
      <MenuItem
        icon={faMoneyBillAlt}
        title="Trading"
        open={open}
        clicked={clicked}
        items={trading}
      />
      <MenuItem
        icon={faChartPie}
        title="Stats"
        open={open}
        clicked={clicked}
        items={stats}
      />
      <MenuItem
        icon={faSortAmountDown}
        title="Ratings"
        open={open}
        clicked={clicked}
        items={ratings}
      />
      <MenuItem
        icon={faBlog}
        title="Blog"
        open={open}
        clicked={clicked}
        items={blog}
      />
    </MenuWrapper>
  );
};

Menu.propTypes = {
  clicked: func.isRequired,
  open: bool.isRequired,
};

export default Menu;
