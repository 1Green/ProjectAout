import React from 'react';
import Navbar from './Navbar';
import { RouteTransition } from 'react-router-transition';

export const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar/>
        <RouteTransition className="home-full-container"
          pathname={this.props.location.pathname}
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 1 }}
          atActive={{ opacity: 1 }}
        >
        <div>{ this.props.children }</div>
        </RouteTransition>
      </div>
    );
  }
});
