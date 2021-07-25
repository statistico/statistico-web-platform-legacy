import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import StrategyBuilder from '../Trading/StrategyBuilder/StrategyBuilder';
import TeamRatingsDashboard from '../Ratings/TeamRatingsDashboard/TeamRatingsDashboard';

const routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/trading/strategy/builder" exact component={StrategyBuilder} />
    <Route path="/team-ratings" exact component={TeamRatingsDashboard} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
