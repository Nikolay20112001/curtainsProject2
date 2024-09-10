import React from 'react';
import '../css/StepDescription.css';

class StepDescription extends React.Component {
    render() {
      return (
        <p className='StepDescription'>{this.props.descriptionText}</p>
      );
    }
  }
  
  
  export default StepDescription;