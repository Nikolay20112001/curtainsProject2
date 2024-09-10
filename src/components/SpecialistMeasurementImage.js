import React from 'react';
import '../css/SpecialistMeasurementImage.css';
import installer from '../images/installer.png';

class SpecialistMeasurementImage extends React.Component {
    render() {
      return (
        <img className='SpecialistMeasurementImage' src={installer}></img>
      );
    }
  }
  
  
  export default SpecialistMeasurementImage;