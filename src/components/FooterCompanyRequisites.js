import React from 'react';
import '../css/FooterCompanyRequisites.css';
import FooterListTitle from './FooterListTitle';
import FooterList from './FooterList';
import '../css/FlexRow.css';
import '../css/FlexColumn.css';


class FooterCompanyRequisites extends React.Component {
    render() {
      return (
        <div className='FlexColumn FooterCompanyRequisites'>
            <FooterListTitle title='Реквизиты компании'/>
            <ul className='FlexColumn FooterCompanyRequisites-linkList'>
                <FooterList linkText="ООО 'Название'" href="#"/>
                <FooterList linkText="Юр адрес" href="#"/>
                <FooterList linkText="ИНН" href="#"/>
                <FooterList linkText="КПП" href="#"/>
                <FooterList linkText="Р/c" href="#"/>
                <FooterList linkText="БИК банка" href="#"/>
            </ul>
        </div>
      );
    }
  }
  
  
  export default FooterCompanyRequisites;