import React from 'react';
import '../css/SpecialistMeasurementOrder.css';
import '../css/FlexRow.css';
import '../css/FlexColumn.css';
import SpecialistMeasurementTitle from './SpecialistMeasurementTitle';
import SpecialistMeasurementDescription from './SpecialistMeasurementDescription';
import OrderInputs from './OrderInputs';
import OrderButton from './OrderButton';
import zoom from '../images/zoom.png';

class SpecialistMeasurementOrder extends React.Component {
    render() {
      return (
        <div className='SpecialistMeasurementOrder FlexRow FlexRow-specialistMeasurementOrder'>
            <div className='FlexColumn FlexColumn-specialistMeasurementOrder'>
                <SpecialistMeasurementTitle titleText="Как записаться на онлайн замер?"/>
                <SpecialistMeasurementDescription descriptionText="Выберите удобное время для замера и оставьте свои контактные данные. Наш специалист свяжется с вами для подтверждения и согласует подробности видео-звонка. В назначенное время подключайтесь к видеосвязи и следуйте рекомендациям нашего эксперта."/>
                <p className='SpecialistMeasurementOrder-textSelectDateAndTime'>Выберите удобную дату и время для приезда замерщика</p>
                <OrderInputs/>
                <OrderButton/>
            </div>
            <img className='SpecialistMeasurementOrder-image' src={zoom}></img>
        </div>
      );
    }
  }
  
  
  export default SpecialistMeasurementOrder;