import React from 'react';
import { bool } from 'prop-types';

import Menu from '../Menu/Menu';
import ResponsiveMenuWrapper from './ResponsiveMenuWrapper';

const ResponsiveMenu = (props) => {
  const { open } = props;

  return (
    <ResponsiveMenuWrapper open={open}>
      <Menu open={open} />
    </ResponsiveMenuWrapper>
  );
};

ResponsiveMenu.propTypes = {
  open: bool.isRequired,
};

export default ResponsiveMenu;
