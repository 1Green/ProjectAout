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
    
    const { isExpanded, selected } = this.state;
    
    const showDetails = (e) => {
      const item = e.target.innerHTML;
      this.setState({
        isExpanded: true,
        selected: item
      })
    };
    
    const hideDetails = () => {
      isExpanded ?
        this.setState({
        isExpanded: false,
        selected: null
      }) : null
    };
    
    const welcome =  <div className='home-welcome-text'>
                        <h1>Hello</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, deserunt hic. Aperiam asperiores dolore dolorem
                            exercitationem magni minus officia omnis sit, tempora. Illo ipsam libero minima officia perspiciatis quod totam!</p>
                      </div>;
  
    const menu = <div className='pro-perso'>
                  <div onClick={ showDetails } className="menu menu-pro">Personal Work</div>
                  <div onClick={ showDetails } className="menu menu-perso">Commissioned Work</div>
                </div>;
    
    return (
      <div onClick={ hideDetails } className='home-full-container'>
        
        <div className="menu-container">
        
          <Transition transitionName="fadeIn" transitionAppear={true} transitionAppearTimeout={700} transitionEnterTimeout={700} transitionLeave={false}>
          
            { !isExpanded && welcome }
          
          </Transition>
          
          <Transition transitionName="fadeIn" transitionAppear={true} transitionAppearTimeout={700} transitionEnterTimeout={700} transitionLeave={false}>
            
            { !isExpanded && menu }
          
          </Transition>
    
          <Transition transitionName="fadeIn"  transitionEnterTimeout={0} transitionLeave={false}>
            
          { isExpanded && <p>{selected}</p> }
    
          </Transition>
       
        </div>
        
      </div>
    )
  }
});