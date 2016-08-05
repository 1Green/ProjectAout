import React from 'react';
import Slider from 'react-slick';

export const PhotoCarousel = React.createClass({
  
  render() {
    
    const { categories } = this.props;
    
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      className: "photo-menu"
    };
    
    const renderCategories = categories.map((category, index) => {
      return (
        <div key={index} style={{ backgroundImage:`url(${ category.url })`, backgroundSize:"cover", backgroundPosition:"center" }}> { category.title.toUpperCase() } </div>
      )
    });
    
    const firstPage = <div><div className="sliderow"> { renderCategories.slice(0,6) }</div></div>;
    const secondPage = categories.length > 6 ? <div><div className="sliderow"> { renderCategories.slice(6,12) }</div></div> : [];
    
    
    
    
    return (
      
      <Slider { ...settings }>
        
        { firstPage }
        { secondPage }
        
      </Slider>
    );
  }
});
