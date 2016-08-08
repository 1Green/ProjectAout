import React from 'react';
import { read } from '../../../utils/methods';

export default React.createClass({
  
  render() {
    
    const { photos, params } = this.props;
    
    const gallery = photos.filter((category) => {
      return category.coverTitle === params.series
    })[0];
  
    const coverTitle = read(gallery,'coverTitle');
    const galleryImages = read(gallery,'images') || [];
    
    return(
      
      <div>
        <div>{ coverTitle }</div>
        
        { galleryImages.map((images) => {
          return <img src={`/commissionedWork/${images.url}`} alt=""/>
        })
  
        }
      </div>
    )
  }
  
  
});