import React from 'react';
import Slider from 'react-slick';
import Transition from 'react-addons-css-transition-group';

export const VideoCarousel = React.createClass({
  
  render() {
    
    const { videos } = this.props;
    
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      className: "video-menu"
    };
  
    
    const renderCategories = videos.map((category, index) => {
      return (
        <div className="video-container">
          <p>{category.title.toUpperCase()}</p>
          <video onMouseEnter={e => playVideo(e.target)} onMouseLeave={e => stopVideo(e.target)} loop key={index} width="99%" height="99%" src={`/commissionedWork/${category.sampleUrl}`}>
            Your browser does not support videos.
          </video>
        </div>
      )
    });
    
    const firstPage = <div><div className="sliderow"> { renderCategories.slice(0,6) }</div></div>;
    const secondPage = videos.length > 6 ? <div><div className="sliderow"> { renderCategories.slice(6,12) }</div></div> : [];
    
    const playVideo = e => e.play();
  
    const stopVideo = e => e.pause();
    
    
    return (
      <Transition transitionName="fadeFast" transitionAppear={true} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeave={false}>
      
      <Slider { ...settings }>
        
        { firstPage }
        { secondPage }
      
      </Slider>
        
        </Transition>
    );
  }
});
