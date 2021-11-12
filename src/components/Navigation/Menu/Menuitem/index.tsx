import React from 'react';

import { IconWrapper, MenuItemWrapper, Title } from './MenuItem.styles';
import { MenuItemProps } from './MenuItem.types';

const MenuItem = (props: MenuItemProps) => {
  const { Icon, link, select, selected, title } = props;
  const isSelected = selected === title;

  const selectItem = () => {
    select(title);
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
      <Title>{title}</Title>
    </MenuItemWrapper>
  );
};

export default MenuItem;
