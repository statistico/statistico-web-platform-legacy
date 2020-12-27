import React from 'react';
import styled from 'styled-components';

import Dashboard from './components/Dashboard/Dashboard';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Routes from './components/Routes/Routes';
import SideBar from './components/Sidebar/SideBar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const App = () => (
  <Container>
    <SideBar />
    <Dashboard>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Dashboard>
  </Container>
);

export default App;
