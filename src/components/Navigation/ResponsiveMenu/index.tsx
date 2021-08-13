import React from 'react';

import Menu from '../Menu';
import ResponsiveMenuWrapper from './ResponsiveMenu.styles';
import { NavigationProps } from '../Navigation.type';

const ResponsiveMenu = (props: NavigationProps): JSX.Element => {
  const { clicked, open } = props;

  const menuItemClick = () => {
    clicked(false);
  };

  return (
    <ResponsiveMenuWrapper open={open}>
      <Menu open={open} selectItem={menuItemClick} />
    </ResponsiveMenuWrapper>
  );
};

export default ResponsiveMenu;
