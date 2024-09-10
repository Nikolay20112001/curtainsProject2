import React from 'react';
import '../css/StepImage.css';

class StepImage extends React.Component {
    render() {
      return (
        <img className='StepImage' src={this.props.imageUrl}></img>
      );
    }
  }
  
  
  export default StepImage;