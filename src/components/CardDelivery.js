import React from 'react';
import '../css/CardDelivery.css';

class CardDelivery extends React.Component {
    render() {
      return (
        <div className='FlexRow FlexRow-cardDelivery'>
          <p className='CardDelivery'>Доставка по г.Рязань: <b>31 августа - 3 сентября</b></p>
          <button className='CardDelivery-helpButton'></button>
        </div>
      );
    }
  }
  
  
  export default CardDelivery;