import React from 'react';

import { IconWrapper, MenuItemWrapper, Title } from './MenuItem.styles';
import { MenuItemProps } from './MenuItem.types';

const MenuItem = (props: MenuItemProps) => {
  const { open, Icon, link, select, selected, title } = props;
  const isSelected = selected === title;

  const selectItem = () => {
    select(title);
  };

  return (
    <MenuItemWrapper
      open={open}
      onClick={() => selectItem()}
      selected={isSelected}
      to={link}
    >
      <IconWrapper open={open}>
        <Icon height={25} width={25} />
      </IconWrapper>
      <Title open={open}>{title}</Title>
    </MenuItemWrapper>
  );
};

export default MenuItem;
