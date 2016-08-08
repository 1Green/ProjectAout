import React from 'react';

export default React.createClass({
  
  render() {
    
    
    
    return(
      <div>
        <div>{ this.props.params.series }</div>
        <div>{this.props.photos}</div>
      </div>
    )
  }
  
  
});