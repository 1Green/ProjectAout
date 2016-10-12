import React from 'react';

export const ModifyGallery = React.createClass({
  
  getInitialState() {
    return {
      data: [],
      
    }
  },
  
  componentWillMount(){
    fetch('http://localhost:3000/API/commissionedWorkImages/')
    .then(data => data.json())
    .then(data => this.setState({
      data: data
    }));
  },
  
  deleteCategory(index) {
      // fetch(`http://localhost:3000/API/commissionedWorkImages/${this.state.data[index]._id}`,
      //   {
      //     method: 'DELETE'
      //   });
    
      fetch('http://localhost:3000/admin/commissionedwork/photos', { method: 'POST', body: JSON.stringify({ id: this.state.data[index]._id }) });
      // this.state.data.remove(index);
      // this.forceUpdate()
  },
  
  render() {
    
    const { data } = this.state;
    
    const coverCard = data.map( (category, index) =>
     
      <div
        className="photo-cover-card"
        style={{ backgroundImage:`url(/commissionedWork/${ category.coverUrl })`}}
        key={ category.coverTitle }
      >
        
        <i className="fa fa-times-circle delete-category"></i>
        <i className="fa fa-check-circle confirm-delete" onClick={ () => this.deleteCategory(index) }></i>
        <i className="fa fa-pencil-square edit-category"></i>
        <p>{ category.coverTitle.replace(/_/g, " ") }</p>
        
      </div>
    );
    
    return (
      
      <div className="modify-container">
        { coverCard }
      </div>
   
    )
  }
});