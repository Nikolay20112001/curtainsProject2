import React from 'react';
import '../css/SelfMeasurementOrderMeasurer.css';
import SelfMeasurementTitle from './SelfMeasurementTitle';
import OrderMeasurerButton from './OrderMeasurerButton';
import '../css/FlexRow.css';
import '../css/FlexColumn.css';

class SelfMeasurementOrderMeasurer extends React.Component {
    render() {
      return (
        <div className='SelfMeasurementOrderMeasurer'>
          <div className='FlexRow FlexRow-selfMeasurementOrderMeasurer'>
            <div className='FlexColumn'>
                <SelfMeasurementTitle titleText="Не уверены в своих замерах?"/>
                <p className='SelfMeasurementOrderMeasurer-description'>Используйте <span className='SelfMeasurementOrderMeasurer-descriptionUnderLine'>гарантию точного замера</span>, чтобы получить замену в случае ошибки или закажите профессионального замерщика</p>
            </div>
            <div className='FlexColumn'>
                <OrderMeasurerButton/>
                <p className='SelfMeasurementOrderMeasurer-delivery'><b>От 199 ₽</b>, замерщик приедет <b>завтра</b></p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  
  export default SelfMeasurementOrderMeasurer;