import React from 'react';
import '../css/CalculatorDiscount.css';

class CalculatorDiscount extends React.Component {
    render() {
        return (
            <div className='CalculatorDiscount-circle'>
                <p className='CalculatorDiscount'>{this.props.discount}</p>
            </div>
        );
    }
  }
  
  
  export default CalculatorDiscount;