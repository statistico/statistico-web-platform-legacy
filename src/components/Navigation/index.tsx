import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import ResponsiveMenu from './ResponsiveMenu/ResponsiveMenu';
import SideBar from './Sidebar/SideBar';
import TopBar from './TopBar/TopBar';

type NavigationProps = {
  clicked: () => void;
  open: boolean;
};

const Navigation = (props: NavigationProps): JSX.Element => {
  const { open, clicked } = props;

  return (
    <Aux>
      <SideBar open={open} clicked={clicked} />
      <TopBar open={open} clicked={clicked} />
      <ResponsiveMenu open={open} clicked={clicked} />
    </Aux>
  );
};

export default Navigation;
