import React from 'react';
import '../css/CardNavigation.css';
import '../css/FlexRow.css';

class CardNavigation extends React.Component {
    render() {
      return (
        <div className='CardNavigation'>
            <nav className='nav'>
                <ul className='CardNavigation-list FlexRow'>
                    <li className='CardNavigation-link'><button>Характиристики</button></li>
                    <li className='CardNavigation-link'><button>Замер</button></li>
                    <li className='CardNavigation-list'><button>Установка</button></li>
                    <li className='CardNavigation-list'><button>Бесплатные образцы</button></li>
                    <li className='CardNavigation-list'><button>Отзывы</button></li>
                    <li className='CardNavigation-list'><button>Доставка и оплата</button></li>
                    <li className='CardNavigation-list'><button>Вопросы и важные примечания</button></li>
                </ul>
            </nav>
        </div>
      );
    }
  }
  
  
  export default CardNavigation;