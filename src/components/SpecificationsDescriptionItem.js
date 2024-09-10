import React from 'react';
import '../css/SpecificationsDescriptionItem.css';
import '../css/ExternalMargin.css';

class SpecificationsDescriptionItem extends React.Component {
    render() {
      return (
        <p className={this.props.class}>{this.props.itemText}</p>
      );
    }
  }
  
  
  export default SpecificationsDescriptionItem;