import React from 'react';
import Slider from 'react-slick';

export const PhotoCarousel = React.createClass({
  
  render() {
    
    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true
    };
    
    return (
      <Slider {...settings}>
        
        <div>
          
          <div className="slide">
        
            <div>TEST</div>
            <div>TEST2</div>
            <div>TEST3</div>

          </div>
          
          <div className="slide">
          
            <div>TEST4</div>
            <div>TEST5</div>
            <div>TEST6</div>
         
          </div>
        
        </div>
        
        <div>
         
          <div className="slide">
         
            <div>TEST</div>
            <div>TEST2</div>
            <div>TEST3</div>
    
          </div>
          
          <div className="slide">
          
            <div>TEST4</div>
            <div>TEST5</div>
            <div>TEST6</div>
          
          </div>
        </div>
        
        <div>
          
          <div className="slide">
           
            <div>TEST</div>
            <div>TEST2</div>
            <div>TEST3</div>
          
          </div>
          
          <div className="slide">
           
            <div>TEST4</div>
            <div>TEST5</div>
            <div>TEST6</div>
          
          </div>
       
        </div>
        
      </Slider>
    );
  }
});
