import React from 'react';
import '../css/CalculatorInputTitle.css';


class CalculatorInputTitle extends React.Component {
    render() {
      return (
        <h3 className='CalculatorInputTitle'>{this.props.titleText}</h3>
      );
    }
  }
  
  
  export default CalculatorInputTitle;