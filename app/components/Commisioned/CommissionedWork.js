import React from 'react';

export default React.createClass({
  
  getInitialState(){
    return {
      selection: null
    }
  },
  
  
  render(){
    
    const { selection } = this.state;
    
    const setChoice = (e) => {
      const item = e.target.innerHTML;
      this.setState({
        selection: item
      })
    };
    
    const displayPhotos = selection == "Photos";
    const displayVideos = selection == "Videos";
    const selectedStyle = { transform:"scale(1.3)", borderBottom:"1px solid white", paddingBottom:"5px" };
    
    return(
      
      <div className="work-container">
        
        <h1>Commissioned Work</h1>
        
        <div className="work-menu">
          <p style={ displayPhotos ? selectedStyle : null } onClick={ setChoice }>Photos</p>
          <p style={ displayVideos ? selectedStyle : null } onClick={ setChoice }>Videos</p>
        </div>
      
      </div>
    )
  }
})