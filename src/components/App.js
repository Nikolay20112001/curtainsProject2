import '../css/App.css';
import React from 'react';
import Navigation from './Navigation';
import CardContainer from './CardContainer';
import CardNavigation from './CardNavigation';
import CardSpecifications from './CardSpecifications';
import Footer from './Footer';
import CardSelfMeasurement from './CardSelfMeasurement';
import CardSpecialistMeasurementOnline from './CardSpecialistMeasurementOnline';
import CardSpecialistMeasurementPersonally from './CardSpecialistMeasurementPersonally';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navigation/>
        <CardContainer/>
        <CardSpecifications/>
        <CardSelfMeasurement/>
        <CardSpecialistMeasurementOnline/>
        <Footer/>
      </div>
    );
  }
}


export default App;
