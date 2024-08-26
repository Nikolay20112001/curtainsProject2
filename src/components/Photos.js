import React from 'react';
import MainPhoto from './MainPhoto';
import MiniPhoto from './MiniPhoto';
import photo1 from '../images/photo2.png';
import photo2 from '../images/tradechoice-linen-white-Photoroom.png';
import photo3 from '../images/photo3.jpg';
import '../css/Photos.css';

class Photos extends React.Component {
    render() {
      return (
        <div className='Photos'>
            <MainPhoto photoUrl={photo2}/>
            <MiniPhoto photoUrl={photo3}/>
            <MiniPhoto photoUrl={photo2}/>
            <MiniPhoto photoUrl={photo1}/>
            <MiniPhoto photoUrl={photo1}/>
            <MiniPhoto photoUrl={photo1}/>
            <MiniPhoto photoUrl={photo1}/>
        </div>
      );
    }
  }
  
  
  export default Photos;