import React from 'react';
import '../css/SelfMeasurementTitle.css';

class SelfMeasurementTitle extends React.Component {
    render() {
      return (
        <h2 className='SelfMeasurementTitle'>{this.props.titleText}</h2>
      );
    }
  }
  
  
  export default SelfMeasurementTitle;