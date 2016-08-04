import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App } from '../components/App';
import { Home } from '../components/Home';
import Personal from '../components/Personal';
require('../styles/app.scss');


export const Routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
    <IndexRoute component={ Home }/>
      <Route path="/personal" component={ Personal }/>
    </Route>
  </Router>
);