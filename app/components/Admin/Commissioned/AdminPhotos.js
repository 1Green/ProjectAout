import React from 'react';
import { CreateGallery } from './CreateGallery';
import { DeleteGallery } from './DeleteGallery';

export const AdminPhotos = React.createClass({
  
  getInitialState(){
    return {
      createSelected: false,
      deleteSelected: false
    }
  },
  
  render(){
    
    const { createSelected, deleteSelected } = this.state;
  
    const selectedStyle = {transform: "scale(1.1)", color:"white"};
   
    return (
      <div className="admin-photo-container">
        
        <h1>Edit Galleries Here</h1>
        
        <div className="admin-photo-menu">
       
          <h2 onClick={() => this.setState({createSelected: true, deleteSelected: false})}
              style={ createSelected ? selectedStyle : null}>
            Create Gallery
          </h2>
       
          <h2 onClick={() => this.setState({createSelected: false, deleteSelected: true})}
              style={ deleteSelected ? selectedStyle : null}>
            Delete Gallery
          </h2>
        
        </div>
        
        <div className="edit-container">
        
          { createSelected && <CreateGallery/> }
          { deleteSelected && <DeleteGallery/> }
        </div>
        
      </div>
      
    )
  
  }
});