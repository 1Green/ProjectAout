import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render(){
    
    return(
      <header className='navbar' >
        <Link to="/"><p>Home</p></Link>
        <Link to="/admin/"><p>Admin</p></Link>
      </header>
    )
  }
})