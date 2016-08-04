import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render(){
    
    return(
      <header className='navbar' >
        <Link to="/"><p>Hello</p></Link>
        <p>Goodbye</p>
      </header>
    )
  }
})