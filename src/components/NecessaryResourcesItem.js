import React from 'react';
import '../css/NecessaryResourcesItem.css';

class NecessaryResourcesItem extends React.Component {
    render() {
      return (
        <div className='NecessaryResourcesItem'>
          <img className='NecessaryResourcesItem-image' src={this.props.imageUrl} width={this.props.imageWidth} height={this.props.imageHeight}></img>
          <p className='NecessaryResourcesItem-description'>{this.props.descriptionText}</p>
        </div>
      );
    }
  }
  
  
  export default NecessaryResourcesItem;