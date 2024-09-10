import React from 'react';
import '../css/FooterContactInfo.css';

class FooterContactInfo extends React.Component {
    render() {
      return (
        <div className='FooterContactInfo'>
            <p className='FooterContactInfo-phone'>+ 7 999 999-88-88</p>
            <p className='FooterContactInfo-workHours'>Пн-Вс: 9:00-18:00</p>
            <div className='FlexRow-messengers'>
                <a className=''><img src=""></img></a>
                <a className=''><img src=""></img></a>
            </div>
            <button className='FooterContactInfo-callOrder'>Заказать звонок</button>
            <p className='FooterContactInfo-email'>email@gmail.com</p>
            <p className='FooterContactInfo-address'>Адрес: г. Рязань, ул. Пушкина, д. 18, оф. 12</p>
        </div>
        

      );
    }
  }
  
  
  export default FooterContactInfo;