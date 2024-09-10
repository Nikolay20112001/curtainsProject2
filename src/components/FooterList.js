import React from 'react';
import '../css/FooterList.css';

class FooterList extends React.Component {
    render() {
      return (
        <li className='FooterList'><a className='FooterList-link' href={this.props.href}>{this.props.linkText}</a></li>
      );
    }
  }
  
  
  export default FooterList;