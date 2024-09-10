import React from 'react';
import FooterListTitle from './FooterListTitle';
import '../css/FooterPaymentMethods.css';
import '../css/FlexRow.css';
import '../css/FlexColumn.css';
import logo_mir from '../images/mir.png';
import logo_mastercard from '../images/mastercard.png';
import logo_visa from '../images/visa.png';

class FooterPaymentMethods extends React.Component {
    render() {
      return (
        <div>
          <FooterListTitle title='Платежные системы'/>
          <ul className='FooterPaymentMethods-linkList FlexRow FlexRow-footerPaymentMethods'>
              <li className='FooterPaymentMethods-list'><a className='FooterPaymentMethods-link'><img className='FooterPaymentMethods-img' src={logo_mir}></img></a></li>
              <li className='FooterPaymentMethods-list'><a className='FooterPaymentMethods-link'><img className='FooterPaymentMethods-img' src={logo_mastercard}></img></a></li>
              <li className='FooterPaymentMethods-list'><a className='FooterPaymentMethods-link'><img className='FooterPaymentMethods-img' src={logo_visa}></img></a></li>
          </ul>
        </div>
          
      );
    }
  }
  
  
  export default FooterPaymentMethods;