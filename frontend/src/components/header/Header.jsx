import React, { useState, useEffect } from 'react';
import { useTransition } from "react-transition-state";
import { useNavigate, Link } from 'react-router-dom';
import { Login, Register } from '..';
import NavigationMenu from './NavigationMenu';
import { useCookies } from 'react-cookie';
/* import { useClickOutside } from '../../assets/custom-hooks'; */


const Header = () => {
  const [avartars] = useState([
    { image: "/img/atlas_beetle" },
    { image: "/img/puffin" },
    { image: "/img/scorpion" },
    { image: "/img/toad" },
    { image: "/img/unicorn" },
    { image: "/img/tyrannosaurus" }
  ])

  let navigate = useNavigate();
  const [profile, setProfile] = useState('')

  useEffect(() => {
    /** inspiration: https://stackoverflow.com/questions/33443122/display-random-images-using-a-foreach-loop-and-and-one-img-tag */
    {/* Loop time baby */ }
    for (let i = 0; i < avartars.length; i++) {
      let randomNum = Math.floor(Math.random() * avartars.length);
      return setProfile(avartars[randomNum]);
    }
  }, [avartars])

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
  //Test
  const loginButton = () => {
    toggleLogin(!login);
    toggleLoginEffect();
  };
  const registerButton = () => {
    toggleRegister(!register);
    toggleRegisterEffect();
  };
  const hamburgerButton = () => {
    toggleHamburger(!hamburger);
    toggleNavigationEffect();
  };

  /* let domNode = useClickOutside(() => {
    toggleNavigationEffect(false)
  }) */


  const showLogin = loginEffect === "unmounted";
  const showRegister = registerEffect === "unmounted";
  const showNavigation = navigationEffect === "unmounted";

  let username;
  if (cookies.userProfile !== undefined) {
    username = cookies.userProfile.username.replaceAll(' ', '-');
  }
  return (
    <header >
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
              <button className={`register-button ${login ? 'disable' : ''}`} onClick={() => registerButton()}>Registrera</button>
            </div> :
            <div className='user-avatar' onClick={() => navigate(`user/${username}`)}>
              {profile.image !== undefined &&
                <img className="avartar" src={`${profile.image}.png`} alt="animal" />
              }
              <h3>{cookies.userProfile.username}</h3>
            </div>
          }
        </div>
      </div>

      {!showNavigation && <NavigationMenu state={navigationEffect} /* reference={domNode} */ />}
      {!showLogin && <Login state={loginEffect} />}
      {!showRegister && <Register state={registerEffect} />}
    </header>
  );
};

export default Header;