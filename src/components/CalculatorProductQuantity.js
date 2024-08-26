import React from 'react';
import '../css/CalculatorProductQuantity.css';
import '../css/FlexRow.css';

class CalculatorProductQuantity extends React.Component {
    render() {
        return (
            <div class='FlexRow FlexRow-productQuantity'>
                <button className='CalculatorProductQuantity-minus'>-</button>
                <p className='CalculatorProductQuantity'>1</p>
                <button className='CalculatorProductQuantity-plus'>+</button>
            </div>
        );
    }
  }
  
  
  export default CalculatorProductQuantity;