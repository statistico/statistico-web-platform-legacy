import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import StrategyBuilder from '../Trading/StrategyBuilder/StrategyBuilder';
import TeamStatsDashboard from '../TeamStatsDashboard';

const routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/trading/strategy/builder" exact component={StrategyBuilder} />
    <Route path="/team-stats" exact component={TeamStatsDashboard} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
