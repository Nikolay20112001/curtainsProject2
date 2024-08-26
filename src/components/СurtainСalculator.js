import React from 'react';
import '../css/CurtainCalculator.css';
import CalculatorTitle from './CalculatorTitle';
import CalculatorHelp from './CalculatorHelp';
import CalculatorInputTitle from './CalculatorInputTitle';
import CalculatorInput from './CalculatorInput';
import CalculatorFinalCost from './CalculatorFinalCost';
import CalculatorDiscount from './CalculatorDiscount';
import CalculatorOldCost from './CalculatorOldCost';
import CalculatorInsurence from './CalculatorInsurence';
import CalculatorProductQuantity from './CalculatorProductQuantity';

import '../css/FlexRow.css';
import '../css/GridCalculatorInputs.css';

class CurtainCalculator extends React.Component {
    render() {
      return (
        <div className='CurtainCalculator'>
          <div className='FlexRow FlexRow-calculatorTitleAndHelp'>
            <CalculatorTitle/>
            <CalculatorHelp/>
          </div>
          <div className='FlexRow FlexRow-CalculatorInputs'>
            <div>
              <CalculatorInputTitle titleText={"Ширина"}/>
              <CalculatorInput placeholder={"300 - 3050мм"}/> 
            </div>
            <div>
              <CalculatorInputTitle titleText={"Длина"}/>
              <CalculatorInput placeholder={"300 - 3050мм"}/>
            </div>
            <div>
              <CalculatorInputTitle titleText={"Количество"}/>
              <CalculatorProductQuantity/>
            </div>
          </div>
          <div class='FlexRow FlexRow-cardPrices'>
            <CalculatorFinalCost finalCost={"11243"}/>
            <CalculatorDiscount discount={"-45%"}/>
            <CalculatorOldCost oldCost={"12000"}/>
          </div>
          <CalculatorInsurence/>
      </div>
      );
    }
  }
  
  
  export default CurtainCalculator;