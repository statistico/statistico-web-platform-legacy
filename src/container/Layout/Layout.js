import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Routes from '../../components/Routes/Routes';
import ResponsiveMenu from '../../components/Navigation/ResponsiveMenu/ResponsiveMenu';
import NavBar from '../../components/Navigation/Navbar/NavBar';
import useTogglesMenu from '../../hooks/useTogglesMenu';
import classes from './Layout.module.css';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Layout = () => {
  const { menuOpen, menuToggleHandler } = useTogglesMenu(false);

  return (
    <Aux>
      <NavBar open={menuOpen} clicked={menuToggleHandler} />
      {menuOpen ? <ResponsiveMenu /> : null}
      <main className={classes.Layout}>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </main>
    </Aux>
  );
};

export default Layout;
