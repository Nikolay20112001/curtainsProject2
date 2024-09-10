import React from 'react';
import '../css/FooterListTitle.css';

class FooterListTitle extends React.Component {
    render() {
      return (
        <h3 className='FooterListTitle'>{this.props.title}</h3>
      );
    }
  }
  
  
  export default FooterListTitle;