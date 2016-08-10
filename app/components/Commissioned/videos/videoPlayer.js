import React from 'react';
import Transition from 'react-addons-css-transition-group';
import { read } from '../../../utils/methods';

export const videoPlayer = React.createClass({
  
  render(){
  
    const { videos, params } = this.props;
  
    const video = videos.filter((video) => {
      return video.title === params.video
    })[0];
    
    return(
  
      <Transition className="videoContainer" transitionName="fadeFast" transitionAppear={true} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeave={false}>
        
        <div className="videoPlayer">
          
          <h2>{video.title}</h2>
          
          <video src={`/commissionedWork/${video.fullUrl}`}
                 controls
          >
            Your browser does not support videos.
          </video>
          
        </div>
        
      </Transition>
    )
  }
  
});