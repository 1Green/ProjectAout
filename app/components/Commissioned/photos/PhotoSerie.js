import React from 'react';
import Slider from 'react-slick';
import Transition from 'react-addons-css-transition-group';
import { read } from '../../../utils/methods';

export const PhotoSerie = React.createClass({
  
  render() {
    
    const { photos, params } = this.props;
  
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      className: "photo-full-carousel"
    };
    
    const gallery = photos.filter((category) => {
      return category.coverTitle === params.series
    })[0];
  
    const coverTitle = read(gallery,'coverTitle');
    const galleryImages = read(gallery,'images') || [];
    
    const photoSerie = galleryImages.map((images) => {
      return( <div className="sliderow">
          <img src={`/commissionedWork/${images.url}`} alt={`/commissionedWork/${images.title}`} />
          <h3>{images.title}</h3>
        </div>
      )
    });
    
    return(
      
      <Transition transitionName="fadeFast" transitionAppear={true} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeave={false}>
  
        <div className="coverTitle">{ coverTitle }</div>
        
        <Slider { ...settings }>
          
            { photoSerie }
          
        </Slider>
        
      </Transition>
    )
  }
  
  
});