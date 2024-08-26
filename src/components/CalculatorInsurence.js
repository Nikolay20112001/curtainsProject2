import React from 'react';
import '../css/CalculatorInsurence.css';
import '../css/FlexRow.css';

class CalculatorInsurence extends React.Component {
    render() {
        return (
            <div className='FlexRow FlexRow-incurence'>
                <input type="checkbox" className='CalculatorInsurence'></input>
                <p className='CalculatorInsurence-text'>Страховка от ошибки при замере - <b>0 ₽</b></p>
                <p className='CalculatorInsurence-oldCost'>499</p>
                <button className='CalculatorInsurence-helpButton'></button>
            </div>
        );
    }
  }
  
  
  export default CalculatorInsurence;