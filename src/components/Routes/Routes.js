import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import StrategyBuilder from '../Trading/StrategyBuilder/StrategyBuilder';

const routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/trading/strategy/builder" exact component={StrategyBuilder} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
