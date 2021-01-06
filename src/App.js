import React from 'react';
import styled from 'styled-components';

import Dashboard from './components/Dashboard/Dashboard';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Navigation from './components/Navigation/Navigation';
import Routes from './components/Routes/Routes';
import useTogglesMenu from './hooks/useTogglesMenu';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const App = () => {
  const { menuOpen, menuToggleHandler } = useTogglesMenu(true);

  return (
    <Container>
      <Navigation open={menuOpen} clicked={menuToggleHandler} />
      <Dashboard open={menuOpen}>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Dashboard>
    </Container>
  );
};

export default App;
