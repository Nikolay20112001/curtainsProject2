import React from 'react';
import '../css/SelfMeasurementVideo.css';

class SelfMeasurementVideo extends React.Component {
    render() {
      return (
        <video className='SelfMeasurementVideo'>
            <source src="https://www.youtube.com/watch?v=aRcUVhVlSHg"></source>
        </video>
        
      );
    }
  }
  
  
  export default SelfMeasurementVideo;