import React, { useState } from 'react';
import { useTransition } from "react-transition-state";
import { Login, Register } from '..';
import NavigationMenu from './NavigationMenu';
import { useCookies } from 'react-cookie';
import { Icon } from '@iconify/react';


const Header = () => {

  const [cookies] = useCookies(['userProfile']);

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
    timeout: 250,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
    preExit: true
  });
  const [navigationEffect, toggleNavigationEffect] = useTransition({
    timeout: 250,
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
  const hamburgerButton =  () => {
    toggleHamburger(!hamburger);
    toggleNavigationEffect();
  };

  const showLogin = loginEffect === "unmounted";
  const showRegister = registerEffect === "unmounted";
  const showNavigation = navigationEffect === "unmounted";
  console.log(cookies.userProfile)
  return (
    <header>
      <div className='header-wrapper'>
        <div onClick={() => hamburgerButton()} className={`menu-btn`}>
          <div className={`menu-btn-burger ${hamburger ? 'open' : ''}`}></div>
        </div>
        <div className='title-and-log-reg'>
          <h3 className='title'>Ljungren & Weder</h3>
          {cookies.userProfile === undefined ? 
            <div className="log-reg-container">
              <button className={`login-button ${register ? 'disable' : ''}`} onClick={() => loginButton()}>Logga in </button>
              <span>/</span>
              <button className={`register-button ${login ? 'disable' : ''}`} onClick={() => registerButton() }>Registrera</button>
            </div> :
            <div className='user-avatar'>
              
              <img  src="/img/atlas_beetle.png" alt="animal" />
              <h3>{cookies.userProfile.username}</h3>
            </div> 
          }
        </div>
      </div>

      {!showNavigation && <NavigationMenu state={ navigationEffect }/>}
      {!showLogin && <Login state={ loginEffect }/>}
      {!showRegister && <Register state={ registerEffect }/>}
    </header>
  );
};

export default Header;