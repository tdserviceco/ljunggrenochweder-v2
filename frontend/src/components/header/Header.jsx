import React, { useState } from 'react';
import { Login } from '..';
import { Register } from '..';

const Header = () => {

  const [login, toggleLogin] = useState(false);
  const [register, toggleRegister] = useState(false);

  return (
    <header>
      <div className='hamburger-menu'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='title-and-log-reg'>
        <h3 className='title'>Ljungren & Weder</h3>
        <div className="log-reg-container">
          <button className='login-button' onClick={() => toggleLogin(!login) }>Logga in </button>
          <span>/</span>
          <button className='register-button' onClick={() => toggleRegister(!register) }>Registrera</button>
        </div>
      </div>
      {login && <Login />}
      {register && <Register />}
    </header>
  );
};

export default Header;