import React from 'react';
import Slider from 'react-slick';

export const VideoCarousel = React.createClass({
  
  render() {
    
    const { categories } = this.props;
    
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      className: "video-menu"
    };
  
    
    const renderCategories = categories.map((category, index) => {
      return (
        <div>
          <video onMouseEnter={e => playVideo(e.target)} onMouseLeave={e => stopVideo(e.target)}  key={index} width="100%" height="100%" src={`${category.url}`}>
            Your browser does not support videos.
          </video>
        </div>
      )
    });
    
    const firstPage = <div><div className="sliderow"> { renderCategories.slice(0,6) }</div></div>;
    const secondPage = categories.length > 6 ? <div><div className="sliderow"> { renderCategories.slice(6,12) }</div></div> : [];
    
    const playVideo = e => {
      e.paused ? e.play() : null;
    };
  
    const stopVideo = e => {
      !e.paused ? e.pause() : null;
    };
    
    return (
      
      <Slider { ...settings }>
  
        
        { firstPage }
        { secondPage }
      
      </Slider>
    );
  }
});
