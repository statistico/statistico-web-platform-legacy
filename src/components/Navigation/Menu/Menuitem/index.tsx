import React from 'react';

import Icon from '../../../Icon';
import { IconWrapper, MenuItemWrapper, Title } from './MenuItem.styles';
import { MenuItemProps } from './MenuItem.types';

const MenuItem = (props: MenuItemProps) => {
  const { open, link, icon, select, selected, title } = props;
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
        <Icon colour="#dedcdc" height={20} width={20} />
      </IconWrapper>
      <Title open={open}>{title}</Title>
    </MenuItemWrapper>
  );
};

export default MenuItem;
