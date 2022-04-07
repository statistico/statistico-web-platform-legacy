import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from './components/Container';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Navigation from './components/Navigation';
import Routes from './components/Routes/Routes';
import UserLogin from './components/UserLogin/UserLogin';
import useAuthenticatesUser from './hooks/useAuthenticatesUser';

const App: React.FC = () => {
  const {
    isAuthenticated,
    loading,
    login,
    error,
    setError,
  } = useAuthenticatesUser();

  if (!isAuthenticated) {
    return (
      <UserLogin
        loading={loading}
        login={login}
        error={error}
        setError={setError}
      />
    );
  }

  return (
    <BrowserRouter>
      <Container>
        <Navigation />
        <Dashboard>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Dashboard>
      </Container>
    </BrowserRouter>
  );
};

export default App;
