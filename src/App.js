import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Navigation from './components/Navigation/Navigation';
import Routes from './components/Routes/Routes';
import UserLogin from './components/UserLogin/UserLogin';
import useAuthenticatesUser from './hooks/useAuthenticatesUser';
import useTogglesMenu from './hooks/useTogglesMenu';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const App = () => {
  const { menuOpen, menuToggleHandler } = useTogglesMenu(
    window.innerWidth > 768
  );
  const { isAuthenticated, loading, login, error } = useAuthenticatesUser();

  if (!isAuthenticated) {
    return <UserLogin loading={loading} login={login} error={error} />;
  }

  return (
    <Container>
      <BrowserRouter>
        <Navigation open={menuOpen} clicked={menuToggleHandler} />
        <Dashboard open={menuOpen}>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Dashboard>
      </BrowserRouter>
    </Container>
  );
};

export default App;
