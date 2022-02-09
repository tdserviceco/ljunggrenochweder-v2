import React, { useState } from 'react';
import { useTransition } from "react-transition-state";
import { Login, Register } from '..';

const Header = () => {

  const [login, toggleLogin] = useState(false);
  const [register, toggleRegister] = useState(false);
  const [hamburger, toggleHamburger] = useState(false);

  const [loginEffect, toggleLoginEffect] = useTransition({
    timeout: 250,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
    preExit: true
  });
  const [registerEffect, toggleRegisterEffect] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
    preExit: true
  });
  
  const loginButton =  () => {
    toggleLogin(!login);
    toggleLoginEffect();
  };
  const registerButton =  () => {
    toggleRegister(!register);
    toggleRegisterEffect();
  };

  const showLogin = loginEffect === "unmounted";
  const showRegister = registerEffect === "unmounted";

  return (
    <header>
      <div className='header-wrapper'>
        <div onClick={() => toggleHamburger(!hamburger)} className={`menu-btn`}>
          <div className={`menu-btn-burger ${hamburger ? 'open' : ''}`}></div>
        </div>
        <div className='title-and-log-reg'>
          <h3 className='title'>Ljungren & Weder</h3>
          <div className="log-reg-container">
            <button className={`login-button ${register ? 'disable' : ''}`} onClick={() => loginButton()}>Logga in </button>
            <span>/</span>
            <button className={`register-button ${login ? 'disable' : ''}`} onClick={() => registerButton() }>Registrera</button>
          </div>
        </div>
      </div>
      {!showLogin && <Login state={ loginEffect }/>}
      {!showRegister &&  <Register state={ registerEffect }/>}
    </header>
  );
};

export default Header;