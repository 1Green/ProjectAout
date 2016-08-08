import React from 'react';
import Navbar from './Navbar';
import { RouteTransition } from 'react-router-transition';

export const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar/><div className="home-full-container">

        
        <div>{ this.props.children }</div>
      </div>
      </div>
    );
  }
});
