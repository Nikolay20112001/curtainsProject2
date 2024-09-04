import React from 'react';
import '../css/CardNavigation.css';

class CardNavigation extends React.Component {
    render() {
      return (
        <div>
            <ul className='CardNavigation'>
                <li>Характиристики</li>
                <li>Замер</li>
                <li>Установка</li>
                <li>Бесплатные образцы</li>
                <li>Отзывы</li>
                <li>Доставка и оплата</li>
                <li>Воспросы и важные примечания</li>
            </ul>
        </div>
      );
    }
  }
  
  
  export default CardNavigation;