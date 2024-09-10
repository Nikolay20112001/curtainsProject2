import React from 'react';
import '../css/FooterCatalog.css';
import FooterListTitle from './FooterListTitle';
import FooterList from './FooterList';

class FooterCatalog extends React.Component {
    render() {
      return (
        <div className='FooterCatalog FlexColumn'>
            <FooterListTitle title='Каталог'/>
            <ul className='FlexColumn FooterCatalog-linkList'>
                <FooterList linkText="Шторы за 3 дня" href="#"/>
                <FooterList linkText="Лидеры продаж" href="#"/>
                <FooterList linkText="На пластиковые окна" href="#"/>
                <FooterList linkText="Без сверления" href="#"/>
                <FooterList linkText="Кассетные" href="#"/>
                <FooterList linkText="Недорогие" href="#"/>
                <FooterList linkText="Мини" href="#"/>
                <FooterList linkText="Белые" href="#"/>
                <FooterList linkText="Серые" href="#"/>
                <FooterList linkText="На балкон" href="#"/>
            </ul>
        </div>
      );
    }
  }
  
  
  export default FooterCatalog;