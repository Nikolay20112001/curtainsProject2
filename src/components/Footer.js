import React from 'react';
import '../css/Footer.css';
import FooterLogo from '../components/FooterLogo';
import FooterContactInfo from './FooterContactInfo';
import FooterCatalog from './FooterCatalog';
import FooterCustomers from './FooterCustomers';
import FooterPaymentMethods from './FooterPaymentMethods';
import FooterCompanyRequisites from './FooterCompanyRequisites';
import FooterDomen from './FooterDomen';
import FooterPrivacyPolicy from './FooterPrivacyPolicy';
import FooterOfferAgreement from './FooterOfferAgreement';
import FooterSocials from './FooterSocials';

class Footer extends React.Component {
    render() {
      return (
        <div className='Footer'>
            <div className='FlexRow'>
                <div className='FlexColumn FlexColumn-logoAndContactInfo'>
                    <FooterLogo/>
                    <FooterContactInfo/>
                </div>
                <FooterCatalog/>
                <FooterCustomers/>
              <div className='FlexColumn FlexColumn-paymentAndRequisites'>
                <FooterPaymentMethods/>
                <FooterCompanyRequisites/>
              </div>
            </div>
            <div className='FlexRow FlexRow-footerBottom'>
              <div className='FlexRow'>
                <FooterDomen/>
                <FooterPrivacyPolicy/>
                <FooterOfferAgreement/>
              </div>
              <div>
                <FooterSocials/>
              </div>
            </div>
        </div>
      );
    }
  }
  
  
  export default Footer;