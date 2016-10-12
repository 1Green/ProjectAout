import React from 'react';
import { CreateGallery } from './CreateGallery';
import { ModifyGallery } from './ModifyGallery';

export const AdminPhotos = React.createClass({
  
  getInitialState(){
    return {
      createSelected: false,
      modifySelected: false
    }
  },
  
  render(){
    
    const { createSelected, modifySelected } = this.state;
  
    const selectedStyle = {transform: "scale(1.1)", color:"white"};
   
    return (
      <div className="admin-photo-container">
        
        <h1>Edit Galleries Here</h1>
        
        <div className="admin-photo-menu">
       
          <h2 onClick={() => this.setState({createSelected: true, modifySelected: false})}
              style={ createSelected ? selectedStyle : null}>
            Create Gallery
          </h2>
       
          <h2 onClick={() => this.setState({createSelected: false, modifySelected: true})}
              style={ modifySelected ? selectedStyle : null}>
            Modify Gallery
          </h2>
        
        </div>
        
        { (createSelected || modifySelected) &&
        
        <div className="edit-container">
        
          { createSelected && <CreateGallery/> }
          { modifySelected && <ModifyGallery/> }
          
        </div>
  
        }
        
      </div>
      
    )
  
  }
});