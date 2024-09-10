import React from 'react';
import '../css/FooterCustomers.css';
import FooterListTitle from './FooterListTitle';
import FooterList from './FooterList';

class FooterCustomers extends React.Component {
    render() {
      return (
        <div className='FooterCustomers FlexColumn'>
            <FooterListTitle title='Покупателям'/>
            <ul className='FlexColumn FooterCustomers-linkList'>
                <FooterList linkText="Доставка" href="#"/>
                <FooterList linkText="Оплата" href="#"/>
                <FooterList linkText="Гарантия и возврат" href="#"/>
                <FooterList linkText="Доставка образцов" href="#"/>
                <FooterList linkText="Онлайн замер" href="#"/>
                <FooterList linkText="Выездной замер" href="#"/>
                <FooterList linkText="Монтаж" href="#"/>
                <FooterList linkText="Гарантия точного замера" href="#"/>
                <FooterList linkText="Контакты" href="#"/>
                <FooterList linkText="Инструкции" href="#"/>
            </ul>
        </div>
      );
    }
  }
  
  
  export default FooterCustomers;