import React from 'react';
import '../css/SpecificationsGuarantee.css';
import SpecificationsSubtitle from './SpecificationsSubtitle';
import SpecificationsDescriptionItem from './SpecificationsDescriptionItem';
import '../css/ExternalMargin.css';

class SpecificationsGuarantee extends React.Component {
    render() {
      return (
        <div className='SpecificationsGuarantee'>
            <SpecificationsSubtitle subtitleText="Гарантийный срок" class="SpecificationsSubtitle"/>
            <SpecificationsDescriptionItem itemText="до 2 лет" class="SpecificationsDescriptionItem"/>
        </div>
      );
    }
  }
  
  
  export default SpecificationsGuarantee;