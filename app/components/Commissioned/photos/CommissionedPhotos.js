import React from 'react';
import Slider from 'react-slick';
import { Link, withRouter } from 'react-router';

export const PhotoCarousel =
  
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
        <div className="photo-container" key={index} style={{ backgroundImage:`url(/commissionedWork/${ category.coverUrl })`}}> { category.coverTitle.toUpperCase() } </div>
      )
    });
    
    const firstPage = <div><div className="sliderow"> { renderCategories.slice(0,6) }</div></div>;
    const secondPage = photos.length > 6 ? <div><div className="sliderow"> { renderCategories.slice(6,12) }</div></div> : [];
    
    
    
    
    return (
      
      <Slider { ...settings }>
        
        { firstPage }
        { secondPage }
        
      </Slider>
    );
  }
});
