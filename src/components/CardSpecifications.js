import React from 'react';
import '../css/CardSpecifications.css';
import '../css/FlexRow.css';
import '../css/FlexColumn.css';
import SpecificationsTitle from './SpecificationsTitle';
import SpecificationsDimensions from './SpecificationsDimensions';
import SpecificationsBracing from './SpecificationsBracing';
import SpecificationsGuarantee from './SpecificationsGuarantee';
import SpecificationsMechanism from './SpecificationsMechanism';
import SpecificationsManufacturer from './SpecificationsManufacturer';
import SpecificationsLateralFixation from './SpecificationsLateralFixation';
import SpecificationsCloth from './SpecificationsCloth';

class CardSpecifications extends React.Component {
    render() {
      return (
        <div className='CardSpecifications'>
            <SpecificationsTitle titleText = "Система Мини (Mini) "/>
            <SpecificationsDimensions/>
            <div className='FlexRow FlexRow-cardSpecifications'>
              <SpecificationsBracing/>
                <div className='FlexColumn FlexColumn-cardSpecifications'>
                  <SpecificationsGuarantee warrantyPeriod="до 2 лет"/>
                  <SpecificationsMechanism controlMechanism="Цепочный"/>
                </div>
                <div className='FlexColumn FlexColumn-cardSpecifications'>
                  <SpecificationsManufacturer manufacturer="BESTA (Польша)"/>
                  <SpecificationsLateralFixation/>
                </div>
              </div>
              <SpecificationsCloth/>
        </div>
      );
    }
  }
  
  
  export default CardSpecifications;