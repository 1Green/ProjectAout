import React from 'react';
import { PhotoCarousel } from './CommissionedPhotos';
import { VideoCarousel } from './Commissionedvideos';
import Transition from 'react-addons-css-transition-group';

export default React.createClass({
  
  getInitialState(){
    return {
      selection: "Photos",
      photoCategories: [],
      videoCategories: []
    }
  },
  
  componentWillMount(){
    
    fetch('http://localhost:3000/API/commissionedWorkImages')
      .then(data => data.json())
      .then(data => this.setState({
        photoCategories: data
      }));
  
    fetch('http://localhost:3000/API/commissionedWorkVideos')
      .then(data => data.json())
      .then(data => this.setState({
        videoCategories: data
      }));
    
  },
  
  render(){
    
    const { selection, photoCategories, videoCategories } = this.state;
    const setChoice = (e) => {
      const item = e.target.innerHTML;
      this.setState({
        selection: item
      })
    };
    
    const displayPhotos = selection == "Photos";
    const displayVideos = selection == "Videos";
    const selectedStyle = {transform: "scale(1.3)"};
    
    return (
      
      <div className="work-container">
        
        <h1>Commissioned Work</h1>
        
        <div className="work-menu">
          <p style={ displayPhotos ? selectedStyle : null } onClick={ setChoice }>Photos</p>
          <p style={ displayVideos ? selectedStyle : null } onClick={ setChoice }>Videos</p>
        </div>
        
        <Transition component="div" transitionName="fadeFast" transitionAppear={true} transitionAppearTimeout={0}
                    transitionEnterTimeout={0} transitionLeave={false}>
          
          { displayPhotos && <PhotoCarousel categories={ photoCategories }/> }
          { displayVideos && <VideoCarousel categories={ videoCategories } /> }
        
        </Transition>
      </div>
    )
  }
})