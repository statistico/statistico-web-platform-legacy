import React, { useState } from 'react';

import MenuWrapper from './Menu.styles';
import MenuItem from './Menuitem';
import routes from '../../../config/routes';

const Menu = () => {
  const [selected, setSelected] = useState(1);

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
            select={setSelected}
          />
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
