import React from 'react';
import { Link } from 'react-router';
import { RouteTransition } from 'react-router-transition';

import { PhotoCarousel } from './photos/CommissionedPhotos';
import { VideoCarousel } from './videos/Commissionedvideos';


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
          <Link to="/CommissionedWork/photos"><p style={ displayPhotos ? selectedStyle : null } onClick={ setChoice }>Photos</p></Link>
          <Link to="/CommissionedWork/videos"><p style={ displayVideos ? selectedStyle : null } onClick={ setChoice }>Videos</p></Link>
        </div>
  
  
        <RouteTransition pathname={this.props.location.pathname}
                         atEnter={{ opacity: 0 }}
                         atLeave={{ opacity: 1 }}
                         atActive={{ opacity: 1 }}
        >
  
          { this.props.children && React.cloneElement(this.props.children, {
            photos : photoCategories,
            videos : videoCategories
          }) }
          

        </RouteTransition>
        
        
      </div>
    )
  }
})