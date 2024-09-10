import React from 'react';
import '../css/SpecificationsAttention.css';
import '../css/FlexRow.css';
import warningIcon from'../images/Union.png';

class SpecificationsAttention extends React.Component {
    render() {
      return (
        <div className='FlexRow SpecificationsAttention'>
          <img className='SpecificationsAttention-warningIcon' src={warningIcon}></img>
          <p className='SpecificationsAttention-warningDescription'>Размеры изделия указаны без учета ткани. Намотка ткани на трубу может увеличить габариты изделия.</p>
        </div>
      );
    }
  }
  
  
  export default SpecificationsAttention;