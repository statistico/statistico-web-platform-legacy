import React from 'react';
import styled from 'styled-components';

import Dashboard from './components/Dashboard/Dashboard';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Navigation from './components/Navigation/Navigation';
import Routes from './components/Routes/Routes';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const App = () => {
  return (
    <Container>
      <Navigation />
      <Dashboard>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Dashboard>
    </Container>
  );
};

export default App;
