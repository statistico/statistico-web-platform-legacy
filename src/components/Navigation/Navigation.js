import React from 'react';
import { bool, func } from 'prop-types';

import Aux from '../../hoc/Aux/Aux';
import ResponsiveMenu from './ResponsiveMenu/ResponsiveMenu';
import SideBar from './Sidebar/SideBar';
import TopBar from './TopBar/TopBar';

const Navigation = (props) => {
  const { open, clicked } = props;

  return (
    <Aux>
      <SideBar open={open} clicked={clicked} />
      <TopBar open={open} clicked={clicked} />
      <ResponsiveMenu open={open} />
    </Aux>
  );
};

Navigation.propTypes = {
  open: bool.isRequired,
  clicked: func.isRequired,
};

export default Navigation;
