import React from 'react';
import Transition from 'react-addons-css-transition-group';
import { Link } from 'react-router';

export const AdminMenu = React.createClass({
  
  getInitialState(){
    return {
      isHovered: null
    }
  },
  
  render(){
    
    const { isHovered } = this.state;
    
    const handleDetails = (e) => {
      
      const element = e.target.firstChild.innerHTML ? e.target.firstChild.innerHTML.startsWith('Com') : e.target.innerHTML.startsWith('Com');
      
     element ?
       this.setState({
         isHovered: 'commissionedwork'
       }) :
       this.setState({
         isHovered: 'personalwork'
      })
    };
    
    const hideDetails = () => this.setState({isHovered:null});
    
    const commissionedSubmenu = <div className="admin-subchoice">
                                  <Link to="/admin/commissionedwork/photos/"><h3>Photos</h3></Link>
                                  <Link to="/admin/commissionedwork/videos/"> <h3>Videos</h3></Link>
                                </div>;
                                
   
    const personalSubmenu =   <div className="admin-subchoice">
                              <Link to="/admin/personalwork/photos/"><h3>Photos</h3></Link>
                              <Link to="/admin/personalwork/videos/"><h3>Videos</h3></Link>
                              <Link to="/admin/personalwork/stories/"><h3>Stories</h3></Link>
                            </div>;
    
    return(
      <Transition component="div" className="admin-menu" transitionName="fadeIn" transitionAppear={true} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeave={false}>
        
        { !this.props.children &&
        
        <div>
          <h1>Hello Admin!</h1>
          
          <div className="admin-submenu-container">
            
            <div onMouseEnter={ handleDetails } onMouseLeave={ hideDetails } className="admin-submenu">
            
              <h2>Personal Work</h2>
              <Transition transitionName="fadeFast" transitionAppear={false} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeave={false}>
            
                { isHovered == 'personalwork' ? personalSubmenu : null}
            
              </Transition>
              
            </div>
            
            <div onMouseEnter={ handleDetails } onMouseLeave={ hideDetails } className="admin-submenu">
             
              <h2>Commissioned Work</h2>
              <Transition transitionName="fadeFast" transitionAppear={false} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeave={false}>
                 { isHovered == 'commissionedwork' ? commissionedSubmenu : null}
              </Transition>
              
            </div>
  
          </div>
        </div> }
        
        { this.props.children }
      
        </Transition>
   
    )
    
  }
});