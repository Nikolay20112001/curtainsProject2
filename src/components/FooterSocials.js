import React from 'react';
import '../css/FooterSocials.css';
import youtube from '../images/youtube.png';
import vk from '../images/vk.png';
import telegram from '../images/telegram.png';

class FooterSocials extends React.Component {
    render() {
      return (
        <ul className='FooterSocials-linkList FlexRow'>
            <li className='FooterSocials-list'><a className='FooterSocials-link'><img className='FooterSocials-img' src={youtube}></img></a></li>
            <li className='FooterSocials-list'><a className='FooterSocials-link'><img className='FooterSocials-img' src={vk}></img></a></li>
            <li className='FooterSocials-list'><a className='FooterSocials-link'><img className='FooterSocials-img' src={telegram}></img></a></li>
        </ul>
      );
    }
  }
  
  
  export default FooterSocials;