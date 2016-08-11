import React from 'react';

export const CreateGallery = React.createClass({

  getInitialState(){
    return {
      postObj :{
        coverUrl: "",
        coverTitle: "",
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
    const isNotEmpty = url.length && title.length;

    if (isNotEmpty){

      const images = this.state.postObj.images.concat({title:title, url:url});
      this.setState({
        postObj:{
          ...this.state.postObj,
          images:images
        }
      });

      const array = Array.from(values);
      array.forEach((value) => { value.setAttribute("disabled", "true"); value.style.backgroundColor= "#CCC"; value.style.boxShadow= "none" });
      e.target.setAttribute("disabled", "true");
      e.target.style.color= "green";

    } else {

       if (!url.length) values[0].style.boxShadow= "0 0 0 2px red inset"; values[0].setAttribute("placeholder", "Incomplete");
       if (!title.length) values[1].style.boxShadow= "0 0 0 2px red inset"; values[1].setAttribute("placeholder", "Incomplete");

    }
  },

  sendForm(e){

    if (this.state.postObj.coverTitle.length && this.state.postObj.coverUrl.length && this.state.postObj.images[1] && this.state.postObj.images[1]){
    e.persist();
    this.state.postObj.images.shift();
    e.target.setAttribute("disabled", "true");
    const body = JSON.stringify(this.state.postObj);

    fetch("http://localhost:3000/API/commissionedworkimages", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json'},
      body: body
    }).then((response) => e.target.style.backgroundColor="#bcffc8")
      .catch((response) => console.log(response))

    } else {
     e.target.style.backgroundColor="#FFE0E0";
     e.target.style.color="black";

    }
  },

  resetErrors(e){
    e.target.style.boxShadow= "none";
    e.target.setAttribute("placeholder", "");
  },

  render(){

    const { images, coverTitle, coverUrl } = this.state.postObj;
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
                       onChange={ this.resetErrors }
                       required/>

                <input type="text"
                       id={`title_${index}`}
                       placeholder="Image Title"
                       key={`title_${index}`}
                       onChange={ this.resetErrors }
                       required/>

                <button onClick={ this.addImage }>OK</button>

              </div>
            )
          })
        }

        <button onClick={ this.sendForm }>Send</button>
      </div>
    )

  }
});

