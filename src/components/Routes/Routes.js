import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import HomeDashboard from '../HomeDashboard/HomeDashboard';
import TeamStats from '../TeamStats/TeamStats';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/team/:id" component={TeamStats} />
      <Route path="/" exact component={HomeDashboard} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default routes;
