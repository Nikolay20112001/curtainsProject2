import React from 'react';
import '../css/CalculatorFinalCost.css';

class CalculatorFinalCost extends React.Component {
    render() {
        return (
            <p className='CalculatorFinalCost'>{this.props.finalCost} ₽</p>
        );
    }
  }
  
  
  export default CalculatorFinalCost;