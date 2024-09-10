import React from 'react';
import '../css/SelfMeasurementStep.css';
import StepImage from './StepImage';
import StepTitle from './StepTitle';
import StepDescription from './StepDescription';

class SelfMeasurementStep extends React.Component {
    render() {
      return (
        <div className='SelfMeasurementStep'>
            <StepImage imageUrl={this.props.imageUrl}/>
            <StepTitle titleText={this.props.titleText}/>
            <StepDescription descriptionText={this.props.descriptionText}/>
        </div>
      );
    }
  }
  
  
  export default SelfMeasurementStep;