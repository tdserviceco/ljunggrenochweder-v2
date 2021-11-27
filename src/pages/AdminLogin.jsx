import React from 'react';
import { useNavigate } from 'react-router';
import { GoogleLogin } from 'react-google-login';
import { Icon } from '@iconify/react';
import axios from 'axios';

const AdminLogin = () => {
  let navigate = useNavigate();
  const responseGoogle = (response) => {
    if (response.profileObj.googleId) {
      const data = { email: response.profileObj.email }
      console.log(response.profileObj.email, data)

      const result = axios.post(`http://localhost:9000/.netlify/functions/api/v1/google-auth`, data)
      result.then(res => {
        navigate('/dashboard')
      }).catch(err => {
        if (err.response) {
          navigate('/register')
        }
      })
    }
  }
  const formSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="email">
          <input id="email" type="email" placeholder="Email" />
        </label>

        <label htmlFor="password">
          <input id="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">
          Login
        </button>
      </form>
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
    </div>
  );
};

export default AdminLogin;