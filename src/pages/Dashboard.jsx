import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import Error403 from '../components/errors/Error403';
import Customer from '../components/dashboard/Customer';
import Worker from '../components/dashboard/Worker';
const Dashboard = () => {

  const role = import.meta.env.VITE_APP_STYLIST;
  const superRole = import.meta.env.VITE_APP_MIGHTYROLE;
  const grunt = import.meta.env.VITE_APP_GRUNT;
  const [cookie, setCookie, removeCookie] = useCookies(['access']);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    console.log('logout')
    removeCookie('access');
    removeCookie('G_AUTHUSER_H');
    navigate('/');
  }

  useEffect(() => {
    console.log(cookie)
    if (cookie.access === undefined) {
      setLoggedIn(false);
      console.log(loggedIn)
    }
    else {
      setLoggedIn(true)
      console.log(loggedIn)
    }
  })

  return (
    <>
      {loggedIn &&
        <div>
          {cookie.access.role === superRole &&
            <Worker />
            ||
            cookie.access.role === role &&
            <Worker />
          }

          {cookie.access.role === grunt &&
            <Customer />
          }

          <button type="button" onClick={logout}>Logout</button>
        </div>
      }
      {!loggedIn &&
        <Error403 />
      }
    </>
  );
};

export default Dashboard;