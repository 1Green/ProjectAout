import React from 'react';
import Slider from 'react-slick';
import Transition from 'react-addons-css-transition-group';

import { withRouter } from 'react-router';

export const PhotoCarousel = withRouter(
  
  React.createClass({
  
  render() {
    
    const { photos } = this.props;
    
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      className: "photo-menu"
    };
    
    
    const renderCategories = photos.map((category, index) => {
      
      return (
         <div onClick={ () => this.props.router.push(`/CommissionedWork/photos/${category.coverTitle}`)}
              className="photo-container"
              key={index}
              style={{ backgroundImage:`url(/commissionedWork/${ category.coverUrl })`}}>
              
               { category.coverTitle && category.coverTitle.replace(/_/g," ").toUpperCase() }
         
         </div>
      )
    });
    
    const firstPage = <div key="first-page" className="sliderow"> { renderCategories.slice(0,6) }</div>;
    const secondPage = photos.length > 6 ?<div key="second-page" className="sliderow"> { renderCategories.slice(6,12) }</div> : [];
    
    return (
      
      <Transition transitionName="fadeFast" transitionAppear={true} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeave={false}>
        
        { !this.props.children && <Slider { ...settings }>{ firstPage }{ secondPage }</Slider> }
  
        {  <div> { this.props.children && React.cloneElement(this.props.children, { photos : photos }) } </div> }
        
      </Transition>
    );
  }
}));
