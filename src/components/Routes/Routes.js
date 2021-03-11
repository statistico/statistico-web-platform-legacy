import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import StrategyBuilder from '../Trading/StrategyBuilder/StrategyBuilder';

const routes = () => (
  <Switch>
    <Route path="/trading/strategy" exact component={StrategyBuilder} />
    <Redirect to="/trading/strategy" />
  </Switch>
);

export default routes;
