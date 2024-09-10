import React from 'react';
import '../css/CardSpecialistMeasurementOnline.css';
import SpecialistMeasurementTitle from './SpecialistMeasurementTitle';
import SpecialistMeasurementDescription from './SpecialistMeasurementDescription';
import SpecialistMeasurementAdvantages from './SpecialistMeasurementAdvantages';
import SpecialistMeasurementImage from './SpecialistMeasurementImage';
import SpecialistMeasurementSubtitle from './SpecialistMeasurementSubtitle';
import SpecialistMeasurementOrder from './SpecialistMeasurementOrder';
import '../css/FlexColumn.css';
import '../css/FlexRow.css';


class CardSpecialistMeasurementOnline extends React.Component {
    render() {
      return (
        <div className='CardSpecialistMeasurementOnline'>
          <div className='FlexRow FlexRow-cardSpecialistMeasurementOnline'>
            <div className='FlexColumn FlexColumn-cardSpecialistMeasurementOnline'>
                <SpecialistMeasurementTitle titleText="Онлайн-замер"/>
                <SpecialistMeasurementDescription descriptionText="Не знаете, как правильно замерить окно для рулонных штор? Наши специалисты помогут вам! Бесплатная онлайн услуга включает видео-консультацию, подробные инструкции по замеру и ответы на ваши вопросы! Экономьте время и получайте индивидуальную поддержку!"/>
                <SpecialistMeasurementSubtitle subtitleText="Что Включает Услуга Онлайн Замера?"/>
                <SpecialistMeasurementDescription descriptionText="Наша услуга онлайн замера предполагает видео-консультацию с опытным специалистом, который:"/>
                <SpecialistMeasurementAdvantages/>
            </div>
            <SpecialistMeasurementImage/>
          </div>
          <SpecialistMeasurementOrder/>
        </div>
        
      );
    }
  }
  
  
  export default CardSpecialistMeasurementOnline;