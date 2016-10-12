import React from 'react';

export const CreateGallery = React.createClass({
  
  getInitialState() {
    return {
      inputShown: 1
    }
  },
  
  isEmpty(e, index) {
    const label = e.target.nextSibling;
    const filesCount = e.target.files.length;
    const fileName = e.target.value.split( '\\' ).pop();
    if (filesCount === 1) {
      label.style.border = "1px solid #7D7";
      label.innerHTML = fileName;
      if (e.target.id !=="cover-file" && this.state.inputShown === index + 1) {
        this.setState({inputShown: this.state.inputShown + 1})
      }
    }
  },
  
  removeItem(e) {
    e.target.previousSibling.previousSibling.value = "";
    e.target.previousSibling.innerHTML = "Choose an image";
    e.target.previousSibling.style.border = "1px solid #777";
    e.target.previousSibling.previousSibling.previousSibling.value = "";
    
  },
  
  render() {
    
   const inputs = new Array(this.state.inputShown).fill(0).map((el, index) => {
      return(
        <div className="input-line">
          
          <input
            type="text"
            name={ `title${index+1}` }
            placeholder={ `Image ${index+1} title` }
            autoComplete="off"
          />
          
          <input
            type="file"
            name={ `url${index+1}` }
            onChange={ (e) => this.isEmpty(e, index) }
            id={ `url${index+1}` }
          />
          <label htmlFor={ `url${index+1}` }>
            Choose an image
          </label>
          
          <i onClick={ this.removeItem } className="fa fa-minus-circle delete-item" ></i>
        </div>
      )
    });
    
    return(
      <form ref='uploadForm'
            id='uploadForm'
            action='http://localhost:3000/uploadCommissionedPhoto'
            method='post'
            encType="multipart/form-data"
      >
        
        <div className="input-line cover-line">
          <input type="text" name="coverTitle" placeholder="Cover Title" required autoFocus="true" autoComplete="off"/>
          <input type="file" name="coverUrl" placeholder="Cover Url" id="cover-file" onChange={ (e) => this.isEmpty(e) }/>
          <label htmlFor="cover-file">
            Choose a cover
          </label>
        </div>
        
        { inputs }
        
        <br/>
        
        <input type='submit' value='Upload!' />
      
      </form>
    )
  }
});

