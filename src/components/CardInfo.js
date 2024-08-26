import React from 'react';
import '../css/CardInfo.css';
import CardCategory from '../components/CardCategory.js';
import CardFavourite from '../components/CardFavourite.js';
import CardTitle from '../components/CardTitle.js';
import CardRating from '../components/CardRating.js';
import CurtainCalculator from './СurtainСalculator.js';
import FabricSample from './FabricSample.js';
import AddCartButton from './AddCartButton.js';
import OptionsButton from './OptionsButton.js';
import CardDelivery from './CardDelivery.js';
import Reviews from './Reviews.js';
import '../css/FlexRow.css';


class CardInfo extends React.Component {
    render() {
      return (
        <div className='CardInfo'>
            <div className='FlexRow FlexRow-cardCategoryAndFavourite'>
                <CardCategory/>
                <CardFavourite/>
            </div>
            <CardTitle/>
            <div className='FlexRow FlexRow-ratingAndFabricSample'>
              <div className='FlexRow'>
                <CardRating/>
                <Reviews/>
              </div>
                <FabricSample/>
            </div>
            <CurtainCalculator/>
            <div className='FlexRow FlexRow-addCartAndOptionsButtons'>
                <AddCartButton/>
                <OptionsButton/>
            </div>
            <CardDelivery/>
        </div>
      );
    }
  }
  
  
  export default CardInfo;