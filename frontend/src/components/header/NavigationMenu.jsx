import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function NavigationMenu({ state }) {

  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['userProfile']);

  const logOut = () => {
    removeCookie('userProfile');
    navigate('/')
  }

  return (
      <section className={`navigation-menu ${ state }`}>
        <div className='title'>
          <h2>Ljunggren & Weder</h2>
        </div>
        <div className='links'>
          <Link to='/'><h2>Startsida</h2></Link>
          <Link to='/'><h2>Nyhetsbrev</h2></Link>
          <Link to='/booking'><h2>Bokning</h2></Link>
          <Link to='/'><h2>Om oss</h2></Link>
        </div>
        <div className='logout'>
          <button type='button' onClick={logOut}><h2>Logga ut</h2></button>
        </div>
      </section>
    )
  }

export default NavigationMenu
