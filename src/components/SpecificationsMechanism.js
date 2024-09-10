import React from 'react';
import '../css/SpecificationsMechanism.css';
import SpecificationsSubtitle from './SpecificationsSubtitle';
import SpecificationsDescriptionItem from './SpecificationsDescriptionItem';
import '../css/ExternalMargin.css';

class SpecificationsMechanism extends React.Component {
    render() {
      return (
        <div>
            <SpecificationsSubtitle subtitleText="Механизм управления" class="SpecificationsSubtitle"/>
            <SpecificationsDescriptionItem itemText="Цепочный" class="SpecificationsDescriptionItem ExternalMarginT20"/>
        </div>
      );
    }
  }
  
  
  export default SpecificationsMechanism;