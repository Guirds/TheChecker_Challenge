import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Dashboard from '../pages/dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
export default Routes;
