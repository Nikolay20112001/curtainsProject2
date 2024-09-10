import React from 'react';
import '../css/SpecificationsDimensionsPhotoContainer.css';
import SpecificationsDimensionsPhoto from './SpecificationsDimensionsPhoto';
import frontViewPhoto from '../images/frontView.png';
import sideViewPhoto from '../images/sideView.png';
import lowerBarPhoto from '../images/lowerBar.png';
import '../css/Grid.css';

class SpecificationsDimensionsPhotoContainer extends React.Component {
    render() {
      return (
        <div className='SpecificationsDimensionsPhotoContainer Grid Grid-specificationsPhotoContainerD'>
            <SpecificationsDimensionsPhoto photoUrl={frontViewPhoto}/>
            <SpecificationsDimensionsPhoto photoUrl={sideViewPhoto}/>
            <SpecificationsDimensionsPhoto photoUrl={lowerBarPhoto}/>
        </div>
      );
    }
  }
  
  
  export default SpecificationsDimensionsPhotoContainer;