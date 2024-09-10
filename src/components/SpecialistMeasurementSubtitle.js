import React from 'react';
import '../css/SpecialistMeasurementSubtitle.css';

class SpecialistMeasurementSubtitle extends React.Component {
    render() {
      return (
        <h3 className='SpecialistMeasurementSubtitle'>{this.props.subtitleText}</h3>
      );
    }
  }
  
  
  export default SpecialistMeasurementSubtitle;