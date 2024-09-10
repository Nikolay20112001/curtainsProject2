import React from 'react';
import '../css/StepTitle.css';

class StepTitle extends React.Component {
    render() {
      return (
        <h2 className='StepTitle'>{this.props.titleText}</h2>
      );
    }
  }
  
  
  export default StepTitle;