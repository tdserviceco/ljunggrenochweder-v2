import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
const Home = () => {
  const navigate = useNavigate()
  const responseGoogle = (response) => {
    if (response.profileObj.googleId && response.profileObj.email) {
      navigate('/registration')
    }
  }

  return (
    <div>
      Home
      <GoogleLogin
        clientId="920638617112-vrr044b57bqkhic1bvmqnhch7459j2kr.apps.googleusercontent.com"
        buttonText="Login"
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}><Icon icon="flat-color-icons:google" />This is my custom Google button</button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Home;