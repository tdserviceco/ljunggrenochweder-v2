import React, { useState } from 'react';
import { Login, Register } from '..';

const Header = () => {

  const [login, toggleLogin] = useState(false);
  const [register, toggleRegister] = useState(false);
  const [hamburger, toggleHamburger] = useState(false)

  return (
    <header>
      <div className='header-wrapper'>
        <div onClick={() => toggleHamburger(!hamburger)} className={`menu-btn`}>
          <div className={`menu-btn__burger ${hamburger ? 'open' : ''}`}></div>
        </div>
        <div className='title-and-log-reg'>
          <h3 className='title'>Ljungren & Weder</h3>
          <div className="log-reg-container">
            <button className='login-button' onClick={() => toggleLogin(!login) }>Logga in </button>
            <span>/</span>
            <button className='register-button' onClick={() => toggleRegister(!register) }>Registrera</button>
          </div>
        </div>
      </div>
      {login && <Login />}
      {register && <Register />}
    </header>
  );
};

export default Header;