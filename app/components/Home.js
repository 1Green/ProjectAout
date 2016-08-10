import React from 'react';
import Transition from 'react-addons-css-transition-group';
import { Link } from 'react-router';

export const Home = React.createClass({
  
  getInitialState(){
      return {
        isExpanded: false,
        selected: null
      }
    },
  
  render(){
    
      /* TODO ____ Export welcome and menu components */
      
    const welcome =  <div className='home-welcome-text'>
                        <h1>Hello</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, deserunt hic. Aperiam asperiores dolore dolorem
                            exercitationem magni minus officia omnis sit, tempora. Illo ipsam libero minima officia perspiciatis quod totam!</p>
                      </div>;
  
    const menu = <div className='pro-perso'>
                  <Link to="/CommissionedWork/"> <div className="menu menu-perso">Commissioned Work</div></Link>
                  <Link to="/PersonalWork/"> <div className="menu menu-pro">Personal Work</div></Link>
                </div>;
    
    return (
     
      <div>
        
          <Transition transitionName="fadeIn" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeave={false}>
          
            <div className="menu-container">
            
              { welcome }
              { menu }
              
            </div>
            
          </Transition>
        
      </div>
    )
  }
});