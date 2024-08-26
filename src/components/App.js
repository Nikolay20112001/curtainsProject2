import '../css/App.css';
import React from 'react';
import Navigation from './Navigation';
import CardContainer from './CardContainer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <CardContainer />
      </div>
    );
  }
}


export default App;
