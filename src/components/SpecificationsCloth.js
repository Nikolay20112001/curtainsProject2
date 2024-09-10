import React from 'react';
import '../css/SpecificationsCloth.css';
import '../css/Grid.css';
import SpecificationsTitle from './SpecificationsTitle';
import SpecificationsSubtitle from './SpecificationsSubtitle';
import SpecificationsDescriptionItem from './SpecificationsDescriptionItem';
import SpecificationsSampleOrder from './SpecificationsSampleOrder';
import materialPhoto from '../images/material.png';
import '../css/ExternalMargin.css';

class SpecificationsCloth extends React.Component {
    render() {
      return (
            <div className='SpecificationsCloth'>
                <SpecificationsSubtitle class="SpecificationsSubtitle" subtitleText="Ткань"/>
                <div className='FlexRow FlexRow-specificationsCloth'>
                    <div className='FlexColumn'>
                        <SpecificationsTitle titleText="Плэйн BLACK-OUT DBL"/>
                        <div className='Grid Grid-specificationsCloth'>
                            <div>
                                <SpecificationsSubtitle class="SpecificationsSubtitle" subtitleText="Цвет"/>
                                <SpecificationsDescriptionItem class="SpecificationsDescriptionItem" itemText="Магнолия"/>
                            </div>
                            <div>
                                <SpecificationsSubtitle class="SpecificationsSubtitle" subtitleText="Состав ткани"/>
                                <SpecificationsDescriptionItem class="SpecificationsDescriptionItem" itemText="100% Полиэстер (P)"/>
                            </div>
                            <div>
                                <SpecificationsSubtitle class="SpecificationsSubtitle" subtitleText="Фактура"/>
                                <SpecificationsDescriptionItem class="SpecificationsDescriptionItem" itemText="Гладкая"/>
                            </div>
                            <div>
                                <SpecificationsSubtitle class="SpecificationsSubtitle" subtitleText="Дизайн"/>
                                <SpecificationsDescriptionItem class="SpecificationsDescriptionItem" itemText="Моно цвет"/>
                            </div>
                            <div>
                                <SpecificationsSubtitle class="SpecificationsSubtitle" subtitleText="Термозащита"/>
                                <SpecificationsDescriptionItem class="SpecificationsDescriptionItem" itemText="Нет"/>
                            </div>
                            <div>
                                <SpecificationsSubtitle class="SpecificationsSubtitle" subtitleText="Для влажных помещений"/>
                                <SpecificationsDescriptionItem class="SpecificationsDescriptionItem" itemText="Нет"/>
                            </div>
                        </div>   
                        <SpecificationsSampleOrder/>
                    </div>
                    <img className='SpecificationsCloth-image' src={materialPhoto}></img>
                </div>
            </div>
      );
    }
  }
  
  
  export default SpecificationsCloth;