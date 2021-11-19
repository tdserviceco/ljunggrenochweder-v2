import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from '../components/header/Header';
import axios from 'axios';
const Home = () => {
  const navigate = useNavigate()
  const responseGoogle = (response) => {
    if (response.profileObj.googleId) {
      console.log(typeof (response.profileObj.email))
      const result = axios.post(`http://localhost:9000/.netlify/functions/api/v1/google-auth`, { email: response.profileObj.email })
      result.then(res => {
        console.log(res.data)
      }).catch(err => {
        if (err.response) {
          navigate('/registration')
        }
      })
    }
  }

  return (
    <>
      <Header />
      <section className="home">
        <GoogleLogin
          clientId={import.meta.env.VITE_APP_GID}
          buttonText="Login"
          render={renderProps => (
            <button onClick={renderProps.onClick} ><Icon icon="flat-color-icons:google" />This is my custom Google button</button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </section>
    </>
  );
};

export default Home;