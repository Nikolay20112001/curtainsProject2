import React from 'react';
import '../css/SpecificationsManufacturer.css';
import SpecificationsSubtitle from './SpecificationsSubtitle';
import SpecificationsDescriptionItem from './SpecificationsDescriptionItem';
import '../css/ExternalMargin.css';

class SpecificationsManufacturer extends React.Component {
    render() {
      return (
        <div>
            <SpecificationsSubtitle subtitleText="Производитель" class="SpecificationsSubtitle"/>
            <SpecificationsDescriptionItem itemText="BESTA (Польша)" class="SpecificationsDescriptionItem ExternalMarginT20"/>
        </div>
      );
    }
  }
  
  
  export default SpecificationsManufacturer;