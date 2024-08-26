import React from 'react';
import '../css/MainPhoto.css';
import photo from '../images/heart.png';

class MainPhoto extends React.Component {
    render() {
      return (
        <div className='MainPhoto'>
          <button className='MainPhoto-category'>Без сверления</button>
          <button className='MainPhoto-previousPhoto'></button>
          <img src={this.props.photoUrl} className='MainPhoto-photo'></img>
          <button className='MainPhoto-nextPhoto'></button>
        </div>
        
      );
    }
  }
  
  
  export default MainPhoto;