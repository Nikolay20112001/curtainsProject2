import React from 'react';
import '../css/MiniPhoto.css';
import polygon from '../images/polygon.png';

class MiniPhoto extends React.Component {
    render() {
      return (
        <img src={this.props.photoUrl} className='MiniPhoto'></img>
      );
    }
  }
  
  
  export default MiniPhoto;