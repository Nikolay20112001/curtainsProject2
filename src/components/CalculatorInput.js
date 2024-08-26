import React from 'react';
import '../css/CalculatorInput.css';

class CalculatorInput extends React.Component {
    render() {
      return (
        <input placeholder={this.props.placeholder} className='CalculatorInput'></input>
      );
    }
  }
  
  
  export default CalculatorInput;