import React from 'react';

export const CreateGallery = React.createClass({
  
  getInitialState(){
    return {
      postObj :{
        coverTitle: "",
        coverUrl: "",
        images: [""]
      }
    }
  },
  
  handleChange(e){
    
    const field = e.target.getAttribute('id');
    const value = e.target.value;
    const toUpdate = this.state.postObj;
    toUpdate[field] = value;
    
    this.setState({
      postObj:toUpdate
    });
  },
  
  addImage(e){
    const values = e.currentTarget.parentNode.getElementsByTagName('input');
    const url = values[0].value;
    const title = values[1].value;
    
    const images = this.state.postObj.images.concat({title:title, url:url});
    this.setState({
      postObj:{
        images:images
      }
    })
    
  },
  
  
  render(){
    
    const { images, coverTitle, coverUrl } = this.state.postObj;
    
    const sendForm = () => console.log(this.state);
    
    return (
      
      <div className="gallery-inputs">
        
        <input onChange={ this.handleChange }
               type="text"
               value={ coverTitle }
               placeholder="Category Name"
               id="coverTitle"
               required/>
        
        <input onChange={ this.handleChange }
               type="text" value={ coverUrl }
               placeholder="Cover image URL"
               id="coverUrl"
               required/>
        
        { images.map((e, index) => {
         
          return (
              <div key={index} className="image-inputs">
               
                <input type="text"
                       id={`url_${index}`}
                       placeholder="Image URL"
                       key={`url_${index}`}
                       required/>
              
                <input type="text"
                       id={`title_${index}`}
                       placeholder="Image Title"
                       key={`title_${index}`}
                       required/>
                
                <button onClick={ this.addImage }>OK</button>
            
              </div>
            )
          })
        }
        
        <button onClick={ sendForm }>Send</button>
      </div>
    )
    
  }
});