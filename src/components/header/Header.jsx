import React from 'react';
import '../header/Header.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <header className='header'>
        <img id="logo" alt='Logo of Barrel Roll company, triangle paradox' src='https://nsa40.casimages.com/img/2019/05/04/mini_190504015655173642.jpg' />
        <h1 className='mainTitle'>Welcome to the realm of beer!</h1>
      </header>
    );
  }
}