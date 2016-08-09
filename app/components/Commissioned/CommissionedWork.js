import React from 'react';
import { Link } from 'react-router';
import { RouteTransition } from 'react-router-transition';

export default React.createClass({
  
  getInitialState(){
    return {
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
    
    const { photoCategories, videoCategories } = this.state;
    
    const isPhotoSelected = this.props.location.pathname.includes('photos');
    const isVideoSelected = this.props.location.pathname.includes('videos');
    const selectedStyle = {transform: "scale(1.3)", color:"white"};
    
    return (
      
      <div className="work-container">
  
        <Link to="/CommissionedWork/photos">
          <h1>
            Commissioned Work
          </h1>
        </Link>
        
        <div className="work-menu">
          <Link to="/CommissionedWork/photos"> <p style={ isPhotoSelected ? selectedStyle : null } >Photos</p> </Link>
          <Link to="/CommissionedWork/videos"> <p style={ isVideoSelected ? selectedStyle : null } >Videos</p> </Link>
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