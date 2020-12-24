import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Routes from '../../components/Routes/Routes';
import useTogglesMenu from '../../hooks/useTogglesMenu';
import classes from './Layout.module.css';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Layout = () => {
  const { menuOpen, menuToggleHandler } = useTogglesMenu(true);

  return (
    <Aux>
      <SideBar open={menuOpen} clicked={menuToggleHandler} />
    </Aux>
  );
};

export default Layout;
