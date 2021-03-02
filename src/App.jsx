import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

import HomePage from './HomePage';

import AboutPage from './AboutPage';

import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
