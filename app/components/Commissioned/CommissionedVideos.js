import React from 'react';
import Slider from 'react-slick';

export const VideoCarousel = React.createClass({

  render() {

    var settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      className: "video-menu"
    };

    return (
      <Slider {...settings}>

        <div>

          <div className="sliderow">

            <div>TEST</div>
            <div>TEST2</div>
            <div>TEST3</div>

            <div>TEST4</div>
            <div>TEST5</div>
            <div>TEST6</div>

          </div>

        </div>


      </Slider>
    );
  }
});
