import React from 'react';

import MenuWrapper from './Menu.styles';
import MenuItem from './Menuitem';
import routes from '../../../config/routes';
import { MenuProps } from './Menu.types';

const Menu = (props: MenuProps) => {
  const { selected, selectItem } = props;

  return (
    <MenuWrapper>
      {routes.map((route) => {
        return (
          <MenuItem
            key={route.id}
            Icon={route.Icon}
            link={route.link}
            id={route.id}
            selected={selected}
            select={selectItem}
          />
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
