import React from 'react';
import '../css/SpecialistMeasurementDescription.css';

class SpecialistMeasurementDescription extends React.Component {
    render() {
      return (
        <p className='SpecialistMeasurementDescription'>{this.props.descriptionText}</p>
      );
    }
  }
  
  
  export default SpecialistMeasurementDescription;