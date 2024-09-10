import React from 'react';
import '../css/SpecificationsDimensions.css';
import SpecificationsSubtitle from './SpecificationsSubtitle';
import SpecificationsDimensionsPhotoContainer from './SpecificationsDimensionsPhotoContainer';
import SpecificationsAttention from './SpecificationsAttention';
import '../css/ExternalMargin.css';

class SpecificationsDimensions extends React.Component {
    render() {
      return (
        <div className='SpecificationsDimensions'>
            <SpecificationsSubtitle subtitleText="Габаритные размеры" class="SpecificationsSubtitle ExternalMarginT40"/>
            <SpecificationsDimensionsPhotoContainer/>
            <SpecificationsAttention/>
        </div>
      );
    }
  }
  
  
  export default SpecificationsDimensions;