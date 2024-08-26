import React from 'react';
import '../css/CardRating.css';
import star from '../images/star.png';

class CardRating extends React.Component {
    render() {
      return (
        <p className='CardRating'><img src={star}></img> <b>4,9</b></p>
      );
    }
  }
  
  
  export default CardRating;