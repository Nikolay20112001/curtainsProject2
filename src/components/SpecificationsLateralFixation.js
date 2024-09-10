import React from 'react';
import '../css/SpecificationsLateralFixation.css';
import SpecificationsSubtitle from './SpecificationsSubtitle';
import SpecificationsDescriptionItem from './SpecificationsDescriptionItem';
import '../css/ExternalMargin.css';

class SpecificationsLateralFixation extends React.Component {
    render() {
      return (
        <div>
            <SpecificationsSubtitle subtitleText="Боковая фиксация" class="SpecificationsSubtitle"/>
            <SpecificationsDescriptionItem itemText="Магниты для фиксации нижней планки" class="SpecificationsDescriptionItem ExternalMarginT20"/>
        </div>
      );
    }
  }
  
  
  export default SpecificationsLateralFixation;