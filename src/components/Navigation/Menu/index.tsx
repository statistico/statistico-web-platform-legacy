import React from 'react';

import MenuWrapper from './Menu.styles';
import MenuItem from './Menuitem';
import routes from '../../../config/routes';
import { NavigationProps } from '../Navigation.type';

const Menu = (props: NavigationProps) => {
  const { clicked, open } = props;

  return (
    <MenuWrapper>
      {routes.map((route) => {
        return (
          <MenuItem
            icon={route.icon}
            link={route.link}
            title={route.title}
            open={open}
            clicked={clicked}
          />
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
