import React from 'react';
import Photos from './Photos';
import '../css/CardContainer.css';
import CardInfo from './CardInfo';
import CardNavigation from './CardNavigation';


class CardContainer extends React.Component {
    render() {
      return (
          <div className='Card-container'>
              <Photos/>
              <CardInfo/>
              <CardNavigation/>
          </div>
      );
    }
  }
  
  
  export default CardContainer;