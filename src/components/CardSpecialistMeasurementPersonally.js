import React from 'react';
import '../css/CardSpecialistMeasurementPersonally.css';
import SpecialistMeasurementTitle from './SpecialistMeasurementTitle';
import SpecialistMeasurementDescription from './SpecialistMeasurementDescription';
import SpecialistMeasurementAdvantages from './SpecialistMeasurementAdvantages';
import SpecialistMeasurementImage from './SpecialistMeasurementImage';
import SpecialistMeasurementSubtitle from './SpecialistMeasurementSubtitle';
import SpecialistMeasurementOrder from './SpecialistMeasurementOrder';
import '../css/FlexColumn.css';
import '../css/FlexRow.css';


class CardSpecialistMeasurementPersonally extends React.Component {
    render() {
      return (
        <div className='CardSpecialistMeasurementPersonally'>
          <div className='FlexRow'>
            <div className='FlexColumn'>
                <SpecialistMeasurementTitle titleText="Преимущества выездного замера"/>
                <SpecialistMeasurementDescription descriptionText="Самостоятельный замер представляет для вас сложность или вы не хотите тратить на это время? Мы отправим квалифицированного специалиста к вам на дом для точного измерения окон. Замерщик приедет в удобное для вас время с каталогом тканей и систем, поможет выбрать оптимальный вариант и произведет все необходимые замеры."/>
                <SpecialistMeasurementSubtitle subtitleText="Преимущества выездного замера"/>
                <SpecialistMeasurementDescription descriptionText="Услуга выездного замера предполагает выезд специалиста к вам домой или в офис"/>
                <SpecialistMeasurementAdvantages/>
            </div>
            <SpecialistMeasurementImage/>
          </div>
          <SpecialistMeasurementOrder/>
        </div>
        
      );
    }
  }
  
  
  export default CardSpecialistMeasurementPersonally;