import React from 'react';
import '../css/CardSelfMeasurement.css';
import '../css/Grid.css';
import SelfMeasurementTitle from './SelfMeasurementTitle';
import SelfMeasurementVideo from './SelfMeasurementVideo';
import SelfMeasurementNecessaryResources from './SelfMeasurementNecessaryResources';
import SelfMeasurementStep from './SelfMeasurementStep';
import SelfMeasurementOrderMeasurer from './SelfMeasurementOrderMeasurer';
import installer from '../images/installer.png';


class CardSelfMeasurement extends React.Component {
    render() {
      return (
        <div className='CardSelfMeasurment FlexColumn FlexColumn-selfMeasurement'>
            <SelfMeasurementTitle titleText="Как сделать замер?"/>
            <div className='FlexRow FlexRow-videoAndResources'>
                <SelfMeasurementVideo/>
                <SelfMeasurementNecessaryResources/>
            </div>
            <div className='Grid Grid-steps'>
                <SelfMeasurementStep imageUrl={installer} titleText="Шаг 1. Подготовка" descriptionText="Подготовьте рулетку, блокнот или заметки в телефоне, чтобы записать значения. Сопоставьте габаритные размеры изделия с возможными помехами, такими как оконные ручки, откосы окна, потолок и другие элементы. Убедитесь, что ничего не будет мешать установке и корректной работе системы."/>
                <SelfMeasurementStep imageUrl={installer} titleText="Шаг 2. Замер ширины" descriptionText="Он производится от одного стыка до другого. Лучше замерить в нескольких местах, так как рама может быть слегка деформирована. Указывайте самое большое значение. Замер производится одинаково на глухих и открывающихся створках."/>
                <SelfMeasurementStep imageUrl={installer} titleText="Шаг 3. Замер высоты" descriptionText="В случае если мы замеряем открывающуюся створку, то нам нужна высота всей створки. Если планируется изделие на глухую створку, то нам нужна высота всей рамы."/>
            </div>
            <SelfMeasurementOrderMeasurer/>
        </div>
      );
    }
  }
  
  
  export default CardSelfMeasurement;