import React from 'react';
import '../css/CalculatorOldCost.css';

class CalculatorOldCost extends React.Component {
    render() {
        return (
            <p className='CalculatorOldCost'>{this.props.oldCost} ₽</p>
        );
    }
  }
  
  
  export default CalculatorOldCost;