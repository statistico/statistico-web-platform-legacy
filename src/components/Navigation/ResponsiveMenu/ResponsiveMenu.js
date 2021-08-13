import React from 'react';
import { bool, func } from 'prop-types';

import Menu from '../Menu';
import ResponsiveMenuWrapper from './ResponsiveMenuWrapper';

const ResponsiveMenu = (props) => {
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

ResponsiveMenu.propTypes = {
  clicked: func.isRequired,
  open: bool.isRequired,
};

export default ResponsiveMenu;
