import React from 'react';
import '../css/SpecialistMeasurementTitle.css';

class SpecialistMeasurementTitle extends React.Component {
    render() {
      return (
        <h2 className='SpecialistMeasurementTitle'>{this.props.titleText}</h2>
      );
    }
  }
  
  
  export default SpecialistMeasurementTitle;