import React from 'react';
import '../css/SelfMeasurementNecessaryResources.css';
import NecessaryResourcesItem from './NecessaryResourcesItem';
import rulet from '../images/rulet.png';
import clock from '../images/clock.png';
import people from '../images/people.png';
import '../css/FlexColumn.css';

class SelfMeasurementNecessaryResources extends React.Component {
    render() {
      return (
        <div className='SelfMeasurementNecessaryResources FlexColumn FlexColumn-necessaryResources'>
          <NecessaryResourcesItem imageUrl={rulet} descriptionText="Нужна только рулетка" imageWidth="60px" imageHeight="60px"/>
          <NecessaryResourcesItem imageUrl={clock} descriptionText="Занимает 10 минут" imageWidth="40px" imageHeight="40px"/>
          <NecessaryResourcesItem imageUrl={people} descriptionText="Можно замерить в одиночку" imageWidth="40px" imageHeight="40px"/>
        </div>
      );
    }
  }
  
  
  export default SelfMeasurementNecessaryResources;