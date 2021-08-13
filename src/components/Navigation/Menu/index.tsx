import React from 'react';

import MenuWrapper from './Menu.styles';
import MenuItem from './Menuitem';
import routes from '../../../config/routes';
import { MenuProps } from './Menu.types';

const Menu = (props: MenuProps) => {
  const { open, selected, selectItem } = props;

  return (
    <MenuWrapper>
      {routes.map((route) => {
        return (
          <MenuItem
            key={route.title}
            icon={route.icon}
            link={route.link}
            title={route.title}
            open={open}
            selected={selected}
            select={selectItem}
          />
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
