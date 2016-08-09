import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import { App } from '../components/App';
import { Home } from '../components/Home';
import PersonalWork from '../components/Personal/PersonalWork';

import CommissionedWork from '../components/Commissioned/CommissionedWork';

import { PhotoCarousel } from '../components/Commissioned/photos/CommissionedPhotos.js'
import PhotoSerie from '../components/Commissioned/photos/PhotoSerie';

import { VideoCarousel } from '../components/Commissioned/videos/Commissionedvideos.js'
import { videoPlayer } from '../components/Commissioned/videos/videoPlayer'

export const Routes = (
  
  <Router history={ browserHistory }>
  
    
    <Route path="/" component={ App }>
   
    <IndexRoute component={ Home }/>
      
      <Route path="/PersonalWork" component={ PersonalWork }>
      </Route>
      
      <Route path="/CommissionedWork/" component={ CommissionedWork }>
        
        <IndexRedirect to="photos" />
        
        <Route path="photos" component={ PhotoCarousel }>
          <Route path="/CommissionedWork/photos/:series" component={ PhotoSerie }/>
        </Route>
        
        <Route path="videos" component={ VideoCarousel }>
          <Route path="/CommissionedWork/videos/:video" component={ videoPlayer }/>
        </Route>
        
        
      
      </Route>
      
    </Route>
  
  </Router>
);