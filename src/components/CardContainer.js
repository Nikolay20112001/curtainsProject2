import React from 'react';
import Photos from './Photos';
import '../css/CardContainer.css';
import CardInfo from './CardInfo';


class CardContainer extends React.Component {
    render() {
      return (
          <div className='Card-container'>
              <Photos/>
              <CardInfo/>
          </div>
      );
    }
  }
  
  
  export default CardContainer;