import React from 'react';
import '../css/SpecificationsTitle.css';

class SpecificationsTitle extends React.Component {
    render() {
      return (
        <h2 className='SpecificationsTitle'>{this.props.titleText}</h2>
      );
    }
  }
  
  
  export default SpecificationsTitle;