import React from 'react';
import Navbar from './Navbar';

export const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar/>
        <div>{ this.props.children }</div>
      </div>
    );
  }
});
