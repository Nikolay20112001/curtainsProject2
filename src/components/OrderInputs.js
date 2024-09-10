import React from 'react';
import '../css/OrderInputs.css';
import '../css/FlexRow.css';

class OrderInputs extends React.Component {
    render() {
      return (
        <div className='OrderInputs'>
          <div className='FlexColumn'>
              <div className='FlexRow FlexRow-orderInputs'>
                  <input className="OrderInputs-dateInput" type='date'></input>
                  <input className="OrderInputs-timeInput" type='time'></input>
              </div>
              <input className="OrderInputs-nameInput" placeholder='Укажите ваше имя' type='text'></input>
              <input className="OrderInputs-telInput" placeholder='+7 (___) ___-__-__' type='tel'></input>
              <label className='OrderInputs-privacyPolicyLabel'>
                <input className="OrderInputs-privacyPolicyInput" type='checkbox'></input>
                Я согласен с политикой конфиденциальности
              </label>
          </div>
            
        </div>
      );
    }
  }
  
  
  export default OrderInputs;