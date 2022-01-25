import React from 'react';
import { Login } from '..';

const Header = () => {



  return (
    <header>
      <div className='hamburger-menu'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='title-and-login'>
        <h3 className='title'>Ljungren & Weder</h3>
        <p className='login'>Logga in/Registrera</p>
      </div>
      {/* <Login /> */}
    </header>
  );
};

export default Header;