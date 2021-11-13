import React from 'react';

import { IconWrapper, MenuItemWrapper } from './MenuItem.styles';
import { MenuItemProps } from './MenuItem.types';

const MenuItem = (props: MenuItemProps) => {
  const { Icon, id, link, select, selected } = props;
  const isSelected = selected === id;

  const selectItem = () => {
    select(id);
  };

  return (
    <MenuItemWrapper
      onClick={() => selectItem()}
      selected={isSelected}
      to={link}
    >
      <IconWrapper selected={isSelected}>
        <Icon height={25} width={25} />
      </IconWrapper>
    </MenuItemWrapper>
  );
};

export default MenuItem;
