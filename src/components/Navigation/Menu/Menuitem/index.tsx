import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

import Aux from '../../../../hoc/Aux/Aux';
import { Icon, MenuItemTypes, Title } from './MenuItem.styles';
import { MenuItemProps } from './MenuItem.types';

const MenuItem = (props: MenuItemProps) => {
  const { clicked, open, link, icon, title } = props;

  return (
    <Aux>
      <MenuItemTypes open={open} onClick={clicked} to={link}>
        <Icon open={open}>
          <FontAwesomeIcon icon={faMoneyBillAlt} size="1x" />
        </Icon>
        <Title open={open}>{title}</Title>
      </MenuItemTypes>
    </Aux>
  );
};

export default MenuItem;
