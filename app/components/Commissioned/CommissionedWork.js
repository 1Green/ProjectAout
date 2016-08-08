import React from 'react';
import { Link } from 'react-router';

import { PhotoCarousel } from './photos/CommissionedPhotos';
import { VideoCarousel } from './videos/Commissionedvideos';
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
    
    fetch('http://localhost:3000/API/commissionedWorkImages/')
      .then(data => data.json())
      .then(data => this.setState({
        photoCategories: data
      }));
  
    fetch('http://localhost:3000/API/commissionedWorkVideos/')
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
    
    const displayPhotos = selection == "Photos" && photoCategories.length ;
    const displayVideos = selection == "Videos" && videoCategories.length;
    const selectedStyle = {transform: "scale(1.3)", color:"white"};
    
    return (
      
      <div className="work-container">
        
        <h1>Commissioned Work</h1>
        
        <div className="work-menu">
          <Link to="/commissionedWork/photos"><p style={ displayPhotos ? selectedStyle : null } onClick={ setChoice }>Photos</p></Link>
          <Link to="/commissionedWork/videos"><p style={ displayVideos ? selectedStyle : null } onClick={ setChoice }>Videos</p></Link>
        </div>
        
        <Transition component="div" transitionName="fadeFast" transitionAppear={false} transitionAppearTimeout={0}
                    transitionEnterTimeout={0} transitionLeave={false}>
  
          { this.props.children && React.cloneElement(this.props.children, {
            photos : photoCategories,
            videos : videoCategories
          }) }
          

        </Transition>
        
        
      </div>
    )
  }
})