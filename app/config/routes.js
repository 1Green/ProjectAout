import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App } from '../components/App';
import { Home } from '../components/Home';
import PersonalWork from '../components/Personal/PersonalWork';
import CommissionedWork from '../components/Commissioned/CommissionedWork';

export const Routes = (
  <Router history={ browserHistory }>
    
    <Route path="/" component={ App }>
   
    <IndexRoute component={ Home }/>
      
      <Route path="/PersonalWork/" component={PersonalWork}>
      </Route>
      
      <Route path="/CommissionedWork/" component={CommissionedWork}>
      </Route>
    
    </Route>
  
  </Router>
);