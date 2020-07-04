import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard as DashboardView } from './views';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <DashboardView message="Welcome to Slick Tracker" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
