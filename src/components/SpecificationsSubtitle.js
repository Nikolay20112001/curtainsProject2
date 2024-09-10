import React from 'react';
import '../css/SpecificationsSubtitle.css';

class SpecificationsSubtitle extends React.Component {
    render() {
      return (
        <p className={this.props.class}>{this.props.subtitleText}</p>
      );
    }
  }
  
  
  export default SpecificationsSubtitle;