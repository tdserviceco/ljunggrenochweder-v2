import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function NavigationMenu({ state, /* reference */ }) {

  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['userProfile']);

  const logOut = () => {
    removeCookie('userProfile');
    navigate('/')
  };


  return (
    <section className={`navigation-menu ${state}`}/*  ref={reference} */>
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
        {cookies.userProfile &&
          <button type='button' onClick={logOut}>Logga ut</button>
        }
      </div>
    </section>
  )
}

export default NavigationMenu
