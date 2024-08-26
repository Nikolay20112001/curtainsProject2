import React from 'react';
import '../css/Navigation.css';

class Navigation extends React.Component {
    render() {
      return (
        <nav className='Navigation'>
          <ul className='Navigation-linkList'>
            <li className='Navigation-list'><a href="#" className='Navigation-link'>Главная </a></li>
            <li className='Navigation-list'><a  href="#" className='Navigation-link'>Мини </a></li>
            <li className='Navigation-list'><a  href="#" className='Navigation-link'>Название модели </a></li>
          </ul>
        </nav>
      );
    }
  }
  
  
  export default Navigation;