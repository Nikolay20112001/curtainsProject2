import React from 'react';
import '../css/CalculatorHelp.css';
import '../css/FlexRow.css';

class CalculatorHelp extends React.Component {
    render() {
      return (
        <div className='FlexRow'>
          <a href='#' className='CalculatorHelp'>Как замерить?</a>
          <button className='CalculatorHelp-button'></button>
        </div>
      );
    }
  }
  
  
  export default CalculatorHelp;