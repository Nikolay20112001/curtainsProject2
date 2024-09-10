import React from 'react';
import '../css/SpecificationsBracing.css';
import '../css/ExternalMargin.css';
import SpecificationsSubtitle from './SpecificationsSubtitle';
import SpecificationsDescriptionItem from './SpecificationsDescriptionItem';

class SpecificationsBracing extends React.Component {
    render() {
      return (
        <div className='SpecificationsBracing'>
            <SpecificationsSubtitle subtitleText="Способы крепления" class="SpecificationsSubtitle"/>
            <ul className='SpecificationsBracing-linkList'>
                <li><SpecificationsDescriptionItem itemText="Двухсторонний скотч" class="SpecificationsDescriptionItem"/></li>
                <li className='MarginT10'><SpecificationsDescriptionItem itemText="Саморезы" class="SpecificationsDescriptionItem"/></li>
                <li className='MarginT10'><SpecificationsDescriptionItem itemText="Кронштейны на откидные створки" class="SpecificationsDescriptionItem"/></li>
            </ul>
        </div>
      );
    }
  }
  
  
  export default SpecificationsBracing;