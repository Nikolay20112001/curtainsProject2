import React from 'react';
import '../css/SpecificationsDimensionsPhoto.css';

class SpecificationsDimensionsPhoto extends React.Component {
    render() {
      return (
        <img className='SpecificationsDimensionsPhoto' src={this.props.photoUrl}></img>
      );
    }
  }
  
  
  export default SpecificationsDimensionsPhoto;